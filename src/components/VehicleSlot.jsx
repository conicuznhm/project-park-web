import car0 from '../assets/images/icon/car0.png';
import carRed from '../assets/images/icon/carRed.png';
import carGreen from '../assets/images/icon/carGreen.png';
import { useState } from 'react';
import moment from 'moment';

export default function VehicleSlot({
  slotName,
  id,
  isAvailable,
  timeStart,
  timeEnd,
  selectStart,
  selectEnd
}) {
  const handleClick = () => {};

  //   const showRed =
  //   moment(timeStart).isBefore(moment(selectEnd))
  //   &&moment(timeStart).isAfter(moment(selectStart))

  //   moment(timeEnd).isBefore(moment(selectEnd))
  //   &&moment(timeEnd).isAfter(moment(selectStart))

  return (
    <div className="w-40 h-24 border border-solid border-black" name={id} onClick={handleClick}>
      {slotName}
      <img src={isAvailable ? car0 : carRed} alt="Car" className="mx-auto" name={id} />
    </div>
  );
}
