import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as reserveApi from '../apis/reserve-api'
import * as parkApi from '../apis/park-api'
import * as floorApi from '../apis/floor-api'
import * as slotApi from '../apis/slot-api'

const initialState = {
    reservation: [],
    selectSlot: {},
    selectVehicle: 0
}

//Reservation
export const fetchReservation = createAsyncThunk(
    'fetchReservation',
    async () => {
        try {
            const res = await reserveApi.getReservation();
            return res.data;
        } catch (err) {
            console.error(err);
            // throw err;
        }
    }
)

export const updateReservation = createAsyncThunk(
    'updateReservation',
    async ({ reserveId, input }) => {
        try {
            const res = await reserveApi.updateReservation(reserveId, input);
            return res.data;
        } catch (err) {
            console.error(err);
            // throw err;
        }
    }
)


export const createReservation = createAsyncThunk(
    'createReservation',
    async (input) => {
        try {
            const res = await reserveApi.createReservation(input)
            return res.data;
        } catch (err) {
            console.error(err)
        }
    }
)

const reserveSlice = createSlice({
    name: 'reserve',
    initialState: initialState,
    reducers: {
        updateReserve(state, action) {
            // state.reservation = {...state.reservation,...action.payload};
            return { ...state.reservation, ...action.payload };
        },
        updateSelectSlot(state, action) {
            state.selectSlot = action.payload;
        },
        updateSelectVehicle(state, action) {
            state.selectVehicle = action.payload;
        }
    },
    extraReducers: {
        [fetchReservation.fulfilled](state, action) {
            state.reservation = action.payload;
        },
        [createReservation.fulfilled](state, action) {
            state.reservation = [...state.reservation, ...action.payload];
        },
        [updateReservation.fulfilled](state, action) {
            state.reservation = [...state.reservation, ...action.payload];
        },
    },
});




//builder callback
// const reserveSlice = createSlice({
//     name: 'reserve',
//     initialState,
//     reducers(builder) {
//         builder
//             .addCase(updateReserve, (state, action) => {
//                 state.reservation = action.payload;
//             })
//             .addCase(updateSelectSlot, (state, action) => {
//                 return state.selectSlot.push(action.payload);
//             })
//     },
//     extraReducers(builder) {
//         builder
//             .addCase(fetchReservation.fulfilled, (state, action) => {
//                 state.reservation = action.payload;
//             })
//             .addCase(createReservation.fulfilled, (state, action) => {
//                 // state.reservation = action.payload;
//                 state.reservation = [...state.reservation, ...action.payload];
//             })
//             .addCase(updateReservation.fulfilled, (state, action) => {
//                 // state.reservation = action.payload;
//                 state.reservation = [...state.reservation, ...action.payload];
//             })
//     }
// })


export const { updateReserve, updateSelectSlot, updateSelectVehicle } = reserveSlice.actions;
export default reserveSlice.reducer;

export const selectReservation = state => state.reserve.reservation;
export const selectSelectSlot = state => state.reserve.selectSlot;
export const selectSelectVehicle = state => state.reserve.selectVehicle;


