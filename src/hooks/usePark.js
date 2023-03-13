import { useSelector } from "react-redux";

export default function () {
  const park = useSelector(state => state.park.park);
  return park;
}
