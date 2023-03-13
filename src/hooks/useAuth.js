import { useSelector } from "react-redux";

export default function () {
  const auth = useSelector(state => state.user.authUser);
  return auth;
}
