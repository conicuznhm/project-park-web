import axios from '../config/axios';


//offer
export const getParkByOfferId = () => axios.get('/offer');

export const createPark = input => axios.post('/offer', input);
export const updatePark = (parkId, input) => axios.patch('/offer/' + parkId, input);
export const updateParkImage = (parkId, formData) => axios.patch('/offer/' + parkId + '/image', formData);
export const deletePark = parkId => axios.delete('/offer/' + parkId, input);

//customer
export const getPark = () => axios.get('/park');



