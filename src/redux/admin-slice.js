import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as offerParkApi from "../apis/park-api";
import * as offerFloorApi from "../apis/floor-api";

const initialState = {
  park: [],
  floor: [],
  loading: false
};

//park
export const fetchOfferPark = createAsyncThunk("offerPark/fetchOfferPark", async () => {
  try {
    const res = await offerParkApi.getParkByOfferIdApi();
    return res.data;
  } catch (err) {
    console.error(err);
  }
});

export const createPark = createAsyncThunk("offerPark/createPark", async () => {
  try {
    const res = await offerParkApi.createParkApi(input);
    return res.data;
  } catch (err) {
    console.error(err);
  }
});

export const editPark = createAsyncThunk(
  "offerPark/editPark",
  async ({ name, address, priceRate, minReserveTime, parkImage }) => {
    try {
      const formData = new FormData();
      if (name) {
        formData.append("name", name);
      }
      if (address) {
        formData.append("address", address);
      }
      if (priceRate) {
        formData.append("priceRate", priceRate);
      }
      if (minReserveTime) {
        formData.append("minReserveTime", minReserveTime);
      }
      if (parkImage) {
        formData.append("parkImage", parkImage);
      }
      const res = await offerParkApi.editParkApi(parkId, formData);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const deletePark = createAsyncThunk("/offerPark/deletePark", async parkId => {
  try {
    const res = await offerParkApi.deleteParkApi(parkId);
    return parkId;
  } catch (err) {
    console.error(err);
  }
});

//floor
export const fetchOfferFloor = createAsyncThunk("offerPark/fetchOfferFloor", async parkId => {
  try {
    const res = await offerFloorApi.getFloorApi(parkId);
    return res.data;
  } catch (err) {
    console.error(err);
  }
});

export const createFloor = createAsyncThunk("offerPark/createFloor", async input => {
  try {
    const res = await offerFloorApi.createFloorApi(input);
    return res.data;
  } catch (err) {
    console.error(err);
  }
});
export const deleteFloor = createAsyncThunk("offerPark/deleteFloor", async floorId => {
  try {
    const res = await offerFloorApi.deleteFloorApi(floorId);
    return res.data;
  } catch (err) {
    console.error(err);
  }
});

const adminSlice = createSlice({
  name: "offerPark",
  initialState,
  reducers: {
    clearOffer: (state, action) => {
      return initialState;
    }
  },
  extraReducers(builder) {
    //park
    builder
      .addCase(editPark.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editPark.fulfilled, (state, action) => {
        state.park === action.payload;
        state.loading = initialState.park;
      });
    builder.addCase(fetchOfferPark.fulfilled, (state, action) => {
      state.park = action.payload;
    });
    builder.addCase(createPark.fulfilled, (state, action) => {
      state.park.push(action.payload);
    });
    builder.addCase(deletePark.fulfilled, (state, action) => {
      state.park = state.park.filter(el => el.id !== action.payload);
    });
    //floor
    builder.addCase(fetchOfferFloor.fulfilled, (state, action) => {
      state.floor = action.payload;
    });
    builder.addCase(createFloor.fulfilled, (state, action) => {
      state.floor.push(action.payload);
    });
    builder.addCase(deleteFloor.fulfilled, (state, action) => {
      state.floor = state.floor.filter(el => el.id !== action.payload);
    });
  }
});

export const { clearOffer } = adminSlice.actions;
export default adminSlice.reducer;
