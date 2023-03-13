import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as vehicleApi from "../apis/vehicle-api";

const initialState = {
  vehicle: [],
  loading: false
};

export const editVehicle = createAsyncThunk(
  "vehicle/editVehicle",
  async ({ type, brand, license, vehicleImage, vehicleId }, thunkApi) => {
    try {
      const formData = new FormData();
      if (type) {
        formData.append("type", type);
      }
      if (brand) {
        formData.append("brand", brand);
      }
      if (license) {
        formData.append("license", license);
      }
      if (vehicleImage) {
        formData.append("vehicleImage", vehicleImage);
      }
      const res = await vehicleApi.editVehicleApi(vehicleId, formData);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const deleteVehicle = createAsyncThunk("vehicle/deleteVehicle", async vehicleId => {
  try {
    const res = await vehicleApi.deleteVehicleApi(vehicleId);
    if (!res) {
      throw new Error("cannot delete");
    }
    return vehicleId;
  } catch (err) {
    console.error(err);
  }
});

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    getCase: (state, action) => {
      state.vehicle = action.payload;
      // state.vehicle = action.payload;
    },
    updateCase: (state, action) => {
      // state.vehicle = { ...state.vehicle, ...action.payload };
      state.vehicle.push(action.payload);
    },
    clearVehicle: (state, action) => {
      return initialState;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(editVehicle.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editVehicle.fulfilled, (state, action) => {
        state.vehicle = action.payload;
        state.loading = initialState.loading;
      })
      .addCase(deleteVehicle.fulfilled, (state, action) => {
        state.vehicle = state.vehicle.filter(el => el.id !== action.payload);
      });
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

export const createVehicle = input => async (dispatch, getState) => {
  try {
    const res = await vehicleApi.createVehicle(input);
    dispatch(updateCase(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const { getCase, updateCase } = vehicleSlice.actions;
export default vehicleSlice.reducer;

export const selectVehicle = state => state.vehicle.vehicle;
