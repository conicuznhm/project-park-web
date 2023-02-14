import axios from '../config/axios';


//offer
export const getFloorOffer = () => axios.get('/offer/all/floor');

export const createFloor = input => axios.post('/offer/floor', input);
export const updateFloor = (floorId, input) => axios.patch('/offer/floor/' + floorId, input);
export const deleteFloor = floorId => axios.delete('/offer/floor/' + floorId);

//customer
export const getFloor = () => axios.get('/park/floor');
export const getFloorByParkId = (parkId) => axios.get('/park/' + parkId + '/floor');



