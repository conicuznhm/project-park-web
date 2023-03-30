import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ButtonCustom from "../components/ButtonCustom";
import OptionVehicle from "../components/OptionVehicle";
import SelectVehicle from "../components/SelectVehicle";
import VehicleSlot from "../components/VehicleSlot";
import { selectUser } from "../redux/auth-slice";
import { fetchFloor, fetchSlot, selectFloor, selectSlot } from "../redux/park-slice";
import {
  createReservation,
  selectSelectSlot,
  selectSelectVehicle,
  updateSelectSlot
} from "../redux/reserve-slice";
import { fetchVehicle, selectVehicle } from "../redux/vehicle-slice";

export default function ReserveContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { parkId } = useParams();

  //slotId = obj    vehicleId = number
  const now = new Date();
  const initialInput = {
    selectStart: now.toISOString().slice(0, 16),
    selectEnd: new Date(now.getTime() + 60000 * 60).toISOString().slice(0, 16),
    isPaid: "",
    slotId: "",
    parkId: "",
    vehicleId: ""
  };

  const [floorSelect, setFloorSelect] = useState(-1);
  const [selectAll, setSelectAll] = useState(true);
  const [reserveInput, setReserveInput] = useState(initialInput);
  const [isShow, setIsShow] = useState(true);
  const [selectedBox, setSelectedBox] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const minStart = now.toISOString().slice(0, 16);
  const minEnd = new Date(reserveInput.selectStart).toISOString().slice(0, 16);

  //fetch data
  //get floor by parkId
  useEffect(() => {
    dispatch(fetchFloor(parkId));
  }, []);
  const floor = useSelector(selectFloor);

  //get slot
  useEffect(() => {
    // const timeoutId = setTimeout(() => {
    //   dispatch(fetchSlot({ parkId, reserveInput }));
    //   if (reserveInput.selectEnd) {
    //   }
    // }, 500);
    const handleFetchSlot = () => {
      dispatch(fetchSlot({ parkId, reserveInput }));
    };
    const timeoutId = setTimeout(handleFetchSlot, 500);
    return () => clearTimeout(timeoutId);
  }, [parkId, reserveInput.selectStart, reserveInput.selectEnd]);

  const slot = useSelector(selectSlot);

  const slotSelect = useSelector(selectSelectSlot);
  const vehicleSelect = useSelector(selectSelectVehicle);

  //handle logic
  const handleClick = e => {
    setFloorSelect(e.target.name);
    setSelectAll(false);
  };

  const handleClickAll = () => {
    setFloorSelect(false);
    setSelectAll(true);
  };

  const handleChangeDate = e => {
    const newMin = e.target.value.slice(14, 16);
    const oldMinStart = reserveInput.selectStart.slice(14, 16);
    const oldMinEnd = reserveInput.selectEnd.slice(14, 16);
    setReserveInput({ ...reserveInput, [e.target.name]: e.target.value });
    if (newMin !== oldMinStart && e.target.name === "selectStart") {
      e.target.blur();
    } else if (newMin !== oldMinEnd && e.target.name === "selectEnd") {
      e.target.blur();
    }
  };

  //isPay logic to get true or false
  const isPay = true;
  //
  const inputBody = {
    isPaid: true,
    slotId: slotSelect.id,
    parkId: parkId,
    vehicleId: +vehicleSelect
  };

  const handleOk = () => {
    setReserveInput({ ...reserveInput, ...inputBody });
    setIsShow(false);
  };
  // const handleNo = () => {
  //   setReserveInput(initialInput);
  //   dispatch(updateSelectSlot({}));
  //   setSelectedBox(null);
  // };

  const handleCancel = () => {
    setReserveInput(initialInput);
    dispatch(updateSelectSlot({}));
    setSelectedBox(null);
    setIsShow(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    isPay ? dispatch(createReservation(reserveInput)) : console.log("Need to pay first");
    navigate("/transaction");
  };

  return (
    <form onSubmit={handleSubmit}>
      {floor.length ? (
        <div>
          <div className="carousel flex flex-row gap-2">
            <div className="carousel-item">
              <ButtonCustom word="All" onClick={handleClickAll} my={`mb-0`} />
            </div>
            {floor.map(el => {
              return (
                <div className="carousel-item" key={el.id} data-slide={el.id}>
                  <ButtonCustom
                    word={"Floor " + el.floorName}
                    onClick={handleClick}
                    // key={el.id}
                    name={el.id}
                    my={`mb-0`}
                  />
                </div>
              );
            })}
          </div>
          <div className="h-[10%] mt-2">
            {isShow && (
              <div className="flex">
                <div className="flex flex-col justify-end">
                  <SelectVehicle />
                </div>
                <div>
                  <label className="text-white" htmlFor="start">
                    Start
                  </label>
                  <input
                    id="start"
                    type="datetime-local"
                    min={minStart}
                    name="selectStart"
                    onChange={handleChangeDate}
                    className="mr-2 w-12"
                  />
                </div>
                <div>
                  <label className="text-white" htmlFor="end">
                    End
                  </label>
                  <input
                    id="end"
                    type="datetime-local"
                    min={minEnd}
                    name="selectEnd"
                    onChange={handleChangeDate}
                    className="mr-2 w-12"
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <ButtonCustom word="OK" type="button" onClick={handleOk} my={`mb-0`} />
                </div>
              </div>
            )}
            <div>
              {!isShow && <ButtonCustom word="Cancel" type="button" onClick={handleCancel} />}
              {!isShow && <ButtonCustom word="reserve" type="submit" />}
              {/* {!isShow && <Link to="/checkoutPage"/>} */}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-y-4 gap-x-2 mt-8">
            {slot.map(el => {
              if (selectAll)
                return (
                  <VehicleSlot
                    el={el}
                    key={el.id}
                    selectedBox={selectedBox}
                    setSelectedBox={setSelectedBox}
                  />
                );
              if (+floorSelect === el.floorId)
                return (
                  <VehicleSlot
                    el={el}
                    key={el.id}
                    selectedBox={selectedBox}
                    setSelectedBox={setSelectedBox}
                  />
                );
            })}
          </div>
        </div>
      ) : (
        <h1>Floor is empty</h1>
      )}
    </form>
  );
}
