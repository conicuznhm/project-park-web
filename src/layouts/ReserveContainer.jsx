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
import { createReservation, selectSelectSlot, selectSelectVehicle } from "../redux/reserve-slice";
import { fetchVehicle, selectVehicle } from "../redux/vehicle-slice";

export default function ReserveContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const parkId = useParams();
  const parkId = 1;

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
  const minStart = new Date().toISOString().slice(0, 16);
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
  }, [parkId, dispatch, reserveInput.selectStart, reserveInput.selectEnd]);

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
    setReserveInput({ ...reserveInput, [e.target.name]: e.target.value });
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
  const handleCancel = () => {
    setReserveInput(initialInput);
    setIsShow(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    isPay ? dispatch(createReservation(reserveInput)) : console.log("Need to pay first");
    navigate("/transaction");
  };

  console.log(floor);
  console.log(reserveInput);
  return (
    <form onSubmit={handleSubmit}>
      {floor.length ? (
        <div className="overflow-hidden">
          <div className="">
            <ButtonCustom word="All" onClick={handleClickAll} />
            {floor.map(el => {
              return (
                <ButtonCustom
                  word={"Floor " + el.floorName}
                  onClick={handleClick}
                  key={el.id}
                  name={el.id}
                />
              );
            })}
          </div>
          <div className="h-[10%]">
            {isShow && (
              <>
                <div>
                  <label htmlFor="start">Start</label>
                  <input
                    id="start"
                    type="datetime-local"
                    min={minStart}
                    name="selectStart"
                    onChange={handleChangeDate}
                    className="mr-2"
                  />
                </div>
                <div>
                  <label htmlFor="end">End</label>
                  <input
                    id="end"
                    type="datetime-local"
                    min={minEnd}
                    name="selectEnd"
                    onChange={handleChangeDate}
                    className="mr-2"
                  />
                </div>
              </>
            )}
            {isShow && <ButtonCustom word="OK" type="button" onClick={handleOk} />}
            <div>
              {!isShow && <ButtonCustom word="Cancel" type="button" onClick={handleCancel} />}
              {!isShow && <ButtonCustom word="reserve" type="submit" />}
            </div>
          </div>
          <div>{isShow && <SelectVehicle />}</div>
          <div className="flex flex-wrap justify-center gap-y-4 gap-x-2">
            {slot.map(el => {
              if (selectAll) return <VehicleSlot el={el} key={el.id} />;
              if (+floorSelect === el.floorId) return <VehicleSlot el={el} key={el.id} />;
            })}
          </div>
        </div>
      ) : (
        <h1>Floor is empty</h1>
      )}
    </form>
  );
}
