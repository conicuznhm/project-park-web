import axios from "../config/axios";

//offer
export const getSlotOffer = () => axios.get("/offer/all/slot");

export const createSlot = input => axios.post("/offer/slot", input);
export const addSlot = input => axios.post("/offer/slot/add", input);
export const updateSlotOffer = (slotId, input) => axios.patch("/offer/slot/" + slotId, input);
export const deleteSlot = slotId => axios.delete("/offer/slot/" + slotId);

//customer
export const getSlot = () => axios.get("/park/slot");
export const getRedSlot = parkId => axios.get("/park/" + parkId + "/redslot");
export const updateSlot = slotId => axios.patch("/park/slot/" + slotId);

// export const getSlotByFloorId = (floorId) => axios.get('/park/' + floorId + '/slot');
