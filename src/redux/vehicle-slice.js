import { createSlice } from '@reduxjs/toolkit';
import * as vehicleApi from '../apis/vehicle-api';

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState: { vehicle: null },
  reducers: {
    getCase: (state, action) => {
      state.vehicle = action.payload;
    },
    updateCase: (state, action) => {
      state.vehicle = { ...state.vehicle, ...action.payload };
    }
  }
});

export const fetchVehicle = () => async (dispatch, getState) => {
  try {
    const res = await vehicleApi.getVehicle();
    dispatch(getCase(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const { getCase, updateCase } = vehicleSlice.actions;
export default vehicleSlice.reducer;

export const selectVehicle = state => state.vehicle.vehicle;
