import { Link } from "react-router-dom";
import ReportPara from "../components/ReportPara";

export default function Report({ res }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src="" alt="park" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Transaction
        </h5>
        {res ? (
          <div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Park lot name : {res?.Park?.name}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Address : {res?.Park?.address}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Slot : {res?.Slot?.slotName}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Start time : {res?.timeStart}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              End time : {res?.timeEnd}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {res?.priceRate} ฿ per hour
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {res?.reserveCost} ฿
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Vehicle brand : {res?.Vehicle?.brand}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Vehicle license : {res?.Vehicle?.license}
            </p>
          </div>
        ) : null}

        <Link
          to="/home"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          OK
        </Link>
      </div>
    </div>
  );
}
