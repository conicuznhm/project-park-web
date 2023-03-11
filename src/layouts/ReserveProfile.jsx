import { boolean } from "joi";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonCustom from "../components/ButtonCustom";
import ReportPara from "../components/ReportPara";
import { selectReservation, selectSelectSlot, fetchReservation } from "../redux/reserve-slice";

export default function ReserveProfile() {
  const dispatch = useDispatch();
  //   const parkId = useParams();
  // const parkId = 1;

  const [click, setClick] = useState();
  useEffect(() => {
    dispatch(fetchReservation());
  }, []);

  const res = useSelector(selectReservation) || [];

  const handleClick = e => {
    setClick(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src="" alt="park" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Transaction Info
        </h5>
        <div>
          {res.map(el => (
            <span
              key={el.id}
              type="button"
              name={el.id}
              value={el?.Vehicle?.license}
              className="ml-2 border"
              onClick={handleClick}
            >
              {el?.Vehicle?.license}
            </span>
          ))}
        </div>
        <div>
          {res
            ? res?.map(el => (
                <div key={el.id} className="border border-b-8 border-black">
                  <ReportPara item={el?.Park?.name} />
                  <ReportPara item={el?.Park?.address} />
                  <ReportPara item={el?.Slot?.slotName} />
                  <ReportPara item={el?.priceRate} />
                  <ReportPara item={el?.timeStart} />
                  <ReportPara item={el?.timeEnd} />
                  <ReportPara item={el?.reserveCost} />
                  <ReportPara item={el?.status} />
                  <ReportPara item={el?.Vehicle?.brand} />
                  <ReportPara item={el?.Vehicle?.license} />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

//   return (
//     <div>
//       {/* <form>
//         <div className="relative z-0 w-full mb-6 group">
//           <h1>Hi</h1>
//         </div>
//         <div className="relative z-0 w-full mb-6 group">
//           <h1>Hello</h1>
//         </div>
//         <div className="relative z-0 w-full mb-6 group">
//           {reservation
//             ? reservation.map(el => (
//                 <div key={el.id} name={el.id} className="mb-2">
//                   <span>{el.timeStart?.split('T')[0] + '/'}</span>
//                   <span>{el.timeStart?.split('T')[1].split(':')[0] + 'h' + ' '}</span>
//                   <span>{el.timeEnd?.split('T')[0] + '/'}</span>
//                   <span>{el.timeEnd?.split('T')[1].split(':')[0] + 'h'}</span>
//                   <span>{el.reserveCost + '$'}</span>
//                   <span>{el.status}</span>
//                   <span>{el.Park?.name}</span>
//                   <span>{el.Vehicle?.id}</span>
//                 </div>
//               ))
//             : null}
//         </div>
//         <div className="grid md:grid-cols-2 md:gap-6">
//           <div className="relative z-0 w-full mb-6 group"></div>
//           <div className="relative z-0 w-full mb-6 group"></div>
//         </div>
//         <div className="grid md:grid-cols-2 md:gap-6">
//           <div className="relative z-0 w-full mb-6 group"></div>
//           <div className="relative z-0 w-full mb-6 group"></div>
//         </div>
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Cancel
//         </button>
//       </form> */}
//     </div>
//   );
// }
