import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/auth-slice';
import { updateSelectVehicle } from '../redux/reserve-slice';
import { fetchVehicle, selectVehicle } from '../redux/vehicle-slice';
import OptionVehicle from './OptionVehicle';

export default function SelectVehicle() {
  //get vehicle by userId
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVehicle());
  }, []);
  const vehicle = useSelector(selectVehicle);
  const user = useSelector(selectUser);
  const [select, setSelect] = useState('');

  const handleChange = e => {
    setSelect(e.target.value);
    console.log(e.target.value);
    dispatch(updateSelectVehicle(e.target.value));
  };
  return (
    <select onChange={handleChange} value={select}>
      <option value="">Select Car</option>
      {vehicle.map(el => user.id === el.userId && <OptionVehicle el={el} key={el.id} />)}
    </select>
  );
}

{
  /* {vehicle.map(
        el =>
          user.id === el.userId && (
            <option key={el.id} value={el.id}>
              {el.brand} {el.license}
            </option>
          )
      )} */
}
