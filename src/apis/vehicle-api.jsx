import axios from '../config/axios';

export const createVehicle = input => axios.post('/vehicle', input);
export const getVehicle = () => axios.get('/vehicle/');

export const updateVehicle = (vehicleId, input) => axios.patch(`/vehicle/${vehicleId}`, input);
export const updateVehicleImage = (vehicleId, formData) =>
  axios.patch(`/vehicle/${vehicleId}`, formData);

export const deleteVehicle = vehicleId => axios.delete(`/vehicle/${vehicleId}`);
