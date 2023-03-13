import axios from "../config/axios";

//offer

export const updatePark = (parkId, input) => axios.patch("/offer/" + parkId, input);
export const updateParkImage = (parkId, formData) =>
  axios.patch("/offer/" + parkId + "/image", formData);

export const getParkByOfferIdApi = () => axios.get("/offer");
export const createParkApi = input => axios.post("/offer", input);
export const editParkApi = (parkId, formData) => axios.patch("/offer/" + parkId, formData);
export const deleteParkApi = parkId => axios.delete("/offer/" + parkId);

//customer
export const getPark = () => axios.get("/park");
