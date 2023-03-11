import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as parkApi from "../apis/park-api";
import * as floorApi from "../apis/floor-api";
import * as slotApi from "../apis/slot-api";

const initialState = {
  park: [],
  floor: [],
  slot: []
};

//Park
export const fetchPark = createAsyncThunk("fetchPark", async () => {
  try {
    const res = await parkApi.getPark();
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

//floor
export const fetchFloor = createAsyncThunk("fetchFloor", async parkId => {
  try {
    const res = await floorApi.getFloorByParkId(parkId);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

//Slot
export const fetchSlot = createAsyncThunk(
  "fetchSlot",
  async ({ parkId, reserveInput: { selectStart, selectEnd } }) => {
    try {
      const res = await slotApi.getSlotByParkId(parkId, selectStart, selectEnd);
      // return [...res.data];
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

// deprecate reserveSlice
const parkSlice = createSlice({
  name: "park",
  initialState,
  reducers: {
    updatePark: (state, action) => {
      state.park = action.payload;
    },

    updateFloor: (state, action) => {
      state.floor = action.payload;
    },

    updateSlot: (state, action) => {
      state.slot = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPark.fulfilled, (state, action) => {
        state.park = action.payload;
      })
      .addCase(fetchFloor.fulfilled, (state, action) => {
        state.floor = action.payload;
      })
      .addCase(fetchSlot.fulfilled, (state, action) => {
        state.slot = action.payload;
      });
  }
});

//builder callback
// const parkSlice = createSlice({
//     name: 'park',
//     initialState,
//     reducers(builder) {
//         builder
//             .addCase(updatePark, (state, action) => {
//                 state.park = action.payload;
//             })
//             .addCase(updateFloor, (state, action) => {
//                 state.floor = action.payload;
//             })
//             .addCase(updateSlot, (state, action) => {
//                 state.slot = action.payload;
//             });
//     },
//     extraReducers(builder) {
//         builder
//             .addCase(fetchPark.fulfilled, (state, action) => {
//                 state.park = action.payload;
//             })
//             .addCase(fetchFloor.fulfilled, (state, action) => {
//                 state.floor = action.payload;
//             })
//             .addCase(fetchSlot.fulfilled, (state, action) => {
//                 state.slot = action.payload;
//             });
//     }
// })

export const { updatePark, updateFloor, updateSlot } = parkSlice.actions;
export default parkSlice.reducer;

export const selectPark = state => state.park.park;
export const selectFloor = state => state.park.floor;
export const selectSlot = state => state.park.slot;

// reducers: {
//     loginCase: (state, action) => {
//       state.authUser = action.payload;
//     },
//     logoutCase: (state, action) => {
//       state.authUser = null;
//     },
//     //update user profile
//     updateCase: (state, action) => {
//       state.authUser = { ...state.authUser, ...action.payload };
//       // state.authUser = action.payload;
//     }
//   }

// //Slot
// export const fetchSlot = createAsyncThunk(
//     'fetchSlot',
//     async () => {
//         try {
//             const slot = await slotApi.getSlot();
//             return slot;
//         } catch (err) {
//             console.error(err);
//             throw err;
//         }
//     }
// )

// const slotSlice = createSlice({
//     name: 'slot',
//     initialState,
//     reducers: {
//         update: (state, action) => {
//             state.slot = action.payload;
//         }
//     },
//     extraReducers: {
//         [fetchSlot.fulfilled]: (state, action) => {
//             state.slot = action.payload;
//         }
//     }
// })

// export const { update } = parkSlice.actions;
// export default parkSlice.reducer;

// export const selectPark = state => state.park.park;
// export const selectSlot = state => state.slot.slot;
