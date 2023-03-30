import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth-slice";

export default function AdminRoute({ children }) {
  const authUser = useSelector(selectUser);
  if (authUser?.role !== "offer") {
    return <div className="text-6xl">You are unauthorized</div>;
  }
  return children;
}
