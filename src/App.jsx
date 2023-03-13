import Router from "./routes/Router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAccessToken } from "./utils/local-storage";
import { useDispatch } from "react-redux";
import { fetchAuthUser } from "./redux/auth-slice";
import { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { fetchPark } from "./redux/park-slice";
import { fetchVehicle } from "./redux/vehicle-slice";
import { fetchReservation } from "./redux/reserve-slice";
import useVehicle from "./hooks/useVehicle";
import useReservation from "./hooks/useReservation";
import usePark from "./hooks/usePark";

function App() {
  const dispatch = useDispatch();
  const authUser = useAuth();
  const vehicle = useVehicle();
  const reserve = useReservation();
  const park = usePark();

  useEffect(() => {
    if (authUser) {
      dispatch(fetchVehicle());
      dispatch(fetchPark());
      dispatch(fetchReservation());
    }
  }, [authUser]);

  // console.log(authUser);
  // console.log(vehicle);
  // console.log(reserve);
  // console.log(park);

  return (
    //remove className="max-w-[393px] mx-auto my-10" when deploy and need properly responsive
    <div className="max-w-[393px] mx-auto">
      <Router />
      <ToastContainer autoClose="2000" theme="light" position="top-center" />
    </div>

    // <div className="container-mobile">
    //   <Router />
    //   <ToastContainer autoClose="2000" theme="light" position="top-center" />
    // </div>
  );
}

export default App;
