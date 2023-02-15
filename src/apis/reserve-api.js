import axios from '../config/axios';


export const getReservation = () => axios.get('/reserve');
export const getReservationByVehicleId = (vehicleId) => axios.get('/reserve/' + vehicleId);

export const createReservation = input => axios.post('/reserve', input);
export const updateReservation = (reserveId, input) => axios.patch('/reserve/' + reserveId, input);



// export const addSlot = input => axios.post('/offer/slot/add', input);
// export const updateSlotOffer = (slotId, input) => axios.patch('/offer/slot' + slotId, input);
// export const deleteSlot = slotId => axios.delete('/offer/slot' + slotId);



