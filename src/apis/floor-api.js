import axios from "../config/axios";

//offer
export const getFloorOffer = () => axios.get("/offer/all/floor");

export const getFloorApi = parkId => axios.get("/offer/" + parkId + "/floor");
export const createFloorApi = (input, parkId) => axios.post("/offer/" + parkId + "/floor", input);
export const deleteFloorApi = floorId => axios.delete("/offer/floor/" + floorId);

// export const updateFloor = (floorId, input) => axios.patch('/offer/floor/' + floorId, input);
//customer
export const getFloor = () => axios.get("/park/floor");
export const getFloorByParkId = parkId => axios.get("/park/" + parkId + "/floor");
