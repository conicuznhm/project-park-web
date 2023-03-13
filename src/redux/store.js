import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import parkReducer from "./park-slice";
import reserveReducer from "./reserve-slice";
import vehicleReducer from "./vehicle-slice";
import adminReducer from "./admin-slice";
export const store = configureStore({
  reducer: {
    user: authReducer,
    vehicle: vehicleReducer,
    park: parkReducer,
    reserve: reserveReducer,
    admin: adminReducer
  }
});
