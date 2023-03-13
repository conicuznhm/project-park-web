import { useSelector } from "react-redux";
import Report from "../layouts/Report";

export default function TransactionPage() {
  const res = useSelector(state => state.reserve.resReserve) || {};
  // res.id  res.Park.name res.Park.address res.priceRate   res.reserveCost
  // res.Slot.slotName  res.status  res.timeEnd  res.timeStart
  //res.Vehicle.license

  return (
    <div>
      <Report res={res} />
    </div>
  );
}
