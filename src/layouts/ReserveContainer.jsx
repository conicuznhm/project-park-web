import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import VehicleSlot from '../components/VehicleSlot';
import { fetchFloor, fetchSlot, selectFloor, selectSlot } from '../redux/park-slice';

export default function ReserveContainer() {
  const dispatch = useDispatch();
  //   const parkId = useParams();
  const parkId = 1;

  const [floorSelect, setFloorSelect] = useState(-1);
  const [selectAll, setSelectAll] = useState(true);

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

  const handleClick = e => {
    setFloorSelect(e.target.name);
    setSelectAll(false);
  };

  const handleClickAll = e => {
    setFloorSelect(false);
    setSelectAll(true);
  };

  return (
    <div>
      <div>
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
      <div className="flex flex-wrap justify-center gap-y-4 gap-x-2">
        {slot.map(el => {
          if (selectAll)
            return (
              <VehicleSlot
                slotName={el.slotName}
                key={el.id}
                id={el.id}
                isAvailable={el.isAvailable}
                timeStart={el.timeStart}
                timeEnd={el.timeEnd}
                selectStart=""
                selectEnd=""
              />
            );
          if (+floorSelect === el.floorId)
            return (
              <VehicleSlot
                slotName={el.slotName}
                key={el.id}
                id={el.id}
                isAvailable={el.isAvailable}
                timeStart={el.timeStart}
                timeEnd={el.timeEnd}
                selectStart=""
                selectEnd=""
              />
            );
        })}
      </div>
    </div>
  );
}
