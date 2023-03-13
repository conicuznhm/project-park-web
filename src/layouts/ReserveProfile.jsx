import { useDispatch, useSelector } from "react-redux";
import { selectReservation } from "../redux/reserve-slice";

export default function ReserveProfile() {
  const dispatch = useDispatch();
  const res = useSelector(selectReservation) || [];
  const handleClick = e => {
    setClick(e.target.value);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <img className="rounded-t-lg" src="" alt="park" /> */}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Transaction Info
        </h5>
        <div>
          {res.map(el => (
            <span
              key={el?.id}
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
                <div key={el?.id} className="mt-4 border border-b-8 border-black">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Park lot name : {el?.Park?.name}
                  </p>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Address : {el?.Park?.address}
                  </p>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Slot : {el?.Slot?.slotName}
                  </p>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Start time : {el?.timeStart}
                  </p>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    End time : {el?.timeEnd}
                  </p>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {el?.priceRate} ฿ per hour
                  </p>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {el?.reserveCost} ฿
                  </p>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Vehicle brand : {el?.Vehicle?.brand}
                  </p>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Vehicle license : {el?.Vehicle?.license}
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
