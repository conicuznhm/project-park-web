import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReserveContainer from '../layouts/ReserveContainer';
import { fetchPark, fetchSlot, selectPark, selectSlot } from '../redux/park-slice';

export default function ReservePage() {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchSlot());
  //   }, []);
  //   const slot = useSelector(selectSlot);

  return (
    <div>
      <ReserveContainer />
    </div>
  );
}
