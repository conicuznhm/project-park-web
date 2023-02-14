import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPark, selectPark } from '../redux/park-slice';

export default function ParkSetting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPark());
  }, []);

  const park = useSelector(selectPark);

  console.log(park);
  return <h1>park setting</h1>;
}
