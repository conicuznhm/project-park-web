import { boolean } from 'joi';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ButtonCustom from '../components/ButtonCustom';
import { selectReservation, selectSelectSlot, fetchReservation } from '../redux/reserve-slice';

export default function ReserveProfile() {
  const dispatch = useDispatch();
  //   const parkId = useParams();
  const parkId = 1;

  useEffect(() => {
    dispatch(fetchReservation());
  }, []);

  const reservation = useSelector(selectReservation);
  console.log(reservation);

  return (
    <div>
      {/* <form>
        <div className="relative z-0 w-full mb-6 group">
          <h1>Hi</h1>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <h1>Hello</h1>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          {reservation
            ? reservation.map(el => (
                <div key={el.id} name={el.id} className="mb-2">
                  <span>{el.timeStart?.split('T')[0] + '/'}</span>
                  <span>{el.timeStart?.split('T')[1].split(':')[0] + 'h' + ' '}</span>
                  <span>{el.timeEnd?.split('T')[0] + '/'}</span>
                  <span>{el.timeEnd?.split('T')[1].split(':')[0] + 'h'}</span>
                  <span>{el.reserveCost + '$'}</span>
                  <span>{el.status}</span>
                  <span>{el.Park?.name}</span>
                  <span>{el.Vehicle?.id}</span>
                </div>
              ))
            : null}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group"></div>
          <div className="relative z-0 w-full mb-6 group"></div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group"></div>
          <div className="relative z-0 w-full mb-6 group"></div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cancel
        </button>
      </form> */}
    </div>
  );
}
