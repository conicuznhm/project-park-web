import car0 from '../assets/images/icon/car0.png';
import carRed from '../assets/images/icon/carRed.png';
import carGreen from '../assets/images/icon/carGreen.png';
import { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updateSelectSlot } from '../redux/reserve-slice';

export default function VehicleSlot({ el }) {
  const dispatch = useDispatch();
  const [green, setGreen] = useState(false);

  const handleClick = e => {
    if (el.isAvailable) {
      dispatch(updateSelectSlot(el));
      // el.id === +e.target.name && setGreen(true);
      setGreen(!green);
    }
  };

  return (
    <div className="w-40 h-24 border border-solid border-black" name={el.id} onClick={handleClick}>
      {el.slotName}
      <img
        src={green ? carGreen : el.isAvailable ? car0 : carRed}
        alt="Car"
        className="mx-auto"
        name={el.id}
      />
    </div>
  );
}

// slotName={el.slotName}
//                   key={el.id}
//                   id={el.id}
//                   isAvailable={el.isAvailable}
//                   timeStart={el.timeStart}
//                   timeEnd={el.timeEnd}
//                   selectStart=""
//                   selectEnd=""

// moment(timeStart).isBefore(moment(selectEnd))
// &&moment(timeStart).isAfter(moment(selectStart))
// ||
// moment(timeEnd).isBefore(moment(selectEnd))
// &&moment(timeEnd).isAfter(moment(selectStart))
// if true ==> not available
// ||
//   moment(timeStart).isBefore(moment(selectEnd))
// &&moment(timeStart).isAfter(moment(selectStart))
// &&
// moment(timeEnd).isBefore(moment(selectEnd))
// &&moment(timeEnd).isAfter(moment(selectStart))
// if true ==> not available
