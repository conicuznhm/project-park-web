import moment from 'moment';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import OptionVehicle from '../components/OptionVehicle';
import SelectVehicle from '../components/SelectVehicle';
import VehicleSlot from '../components/VehicleSlot';
import { selectUser } from '../redux/auth-slice';
import { fetchFloor, fetchSlot, selectFloor, selectSlot } from '../redux/park-slice';
import { fetchVehicle, selectVehicle } from '../redux/vehicle-slice';

export default function ReserveContainer() {
  const dispatch = useDispatch();
  //   const parkId = useParams();
  const parkId = 1;

  //slotId = obj    vehicleId = number
  const initialInput = {
    selectEnd: new Date(),
    reserveCost: '',
    isPaid: '',
    slotId: '',
    parkId: '',
    vehicleId: ''
  };

  const [floorSelect, setFloorSelect] = useState(-1);
  const [selectAll, setSelectAll] = useState(true);
  const [reserveInput, setReserveInput] = useState(initialInput);

  //fetch data
  //get floor by parkId
  useEffect(() => {
    dispatch(fetchFloor(parkId));
  }, []);
  const floor = useSelector(selectFloor);

  //get slot
  useEffect(() => {
    dispatch(fetchSlot());
  }, []);
  const slot = useSelector(selectSlot);

  // //get vehicle by userId
  // useEffect(() => {
  //   dispatch(fetchVehicle());
  // }, []);
  // const vehicle = useSelector(selectVehicle);

  // const user = useSelector(selectUser);

  //handle logic
  const handleClick = e => {
    setFloorSelect(e.target.name);
    setSelectAll(false);
  };

  const handleClickAll = e => {
    setFloorSelect(false);
    setSelectAll(true);
  };

  const handleChangeDate = e => {
    setReserveInput({ ...reserveInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden">
        <div className="">
          <ButtonCustom word="All" onClick={handleClickAll} />
          {floor.map(el => {
            return (
              <ButtonCustom
                word={'Floor ' + el.floorName}
                onClick={handleClick}
                key={el.id}
                name={el.id}
              />
            );
          })}
        </div>
        <div className="h-[10%]">
          <input
            type="datetime-local"
            name="selectEnd"
            onChange={handleChangeDate}
            className="mr-2"
          />
          <ButtonCustom word="reserve" type="submit" />
        </div>
        <div>
          <SelectVehicle />
        </div>
        <div className="flex flex-wrap justify-center gap-y-4 gap-x-2">
          {slot.map(el => {
            if (selectAll) return <VehicleSlot el={el} key={el.id} />;
            if (+floorSelect === el.floorId) return <VehicleSlot el={el} key={el.id} />;
          })}
        </div>
      </div>
    </form>
  );
}
