import { useSelector } from "react-redux";

export default () => {
  return useSelector(state => state.reserve.selectVehicle);
};
