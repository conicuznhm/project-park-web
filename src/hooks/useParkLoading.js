import { useSelector } from "react-redux";

export default () => {
  return useSelector(state => state.admin.loading);
};
