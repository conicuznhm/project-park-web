import Router from "./routes/Router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAccessToken } from "./utils/local-storage";
import { useDispatch } from "react-redux";
import { fetchAuthUser } from "./redux/auth-slice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (getAccessToken()) {
  //     dispatch(fetchAuthUser());
  //   }
  // }, []);

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
