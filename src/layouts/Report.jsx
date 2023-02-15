import { Link } from 'react-router-dom';
import ReportPara from '../components/ReportPara';

export default function Report({ res }) {
  // res.id  res.Park.name res.Park.address res.priceRate   res.reserveCost
  // res.Slot.slotName  res.status  res.timeEnd  res.timeStart
  //res.Vehicle.license

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src="" alt="park" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Transaction
        </h5>
        {res ? (
          <div>
            <ReportPara item={res?.Park?.name} />
            <ReportPara item={res?.Park?.address} />
            <ReportPara item={res?.Slot?.slotName} />
            <ReportPara item={res?.priceRate} />
            <ReportPara item={res?.timeStart} />
            <ReportPara item={res?.timeEnd} />
            <ReportPara item={res?.reserveCost} />
            <ReportPara item={res?.status} />
            <ReportPara item={res?.Vehicle?.brand} />
            <ReportPara item={res?.Vehicle?.license} />
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
