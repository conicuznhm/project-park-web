import { useState } from "react";

export default function ParkEditForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [priceRate, setPriceRate] = useState("");
  const [minReserveTime, setMinReserveTime] = useState("");
  const [parkImage, setParkImage] = useState("");
  const [floorName, setFloorName] = useState("");
  const [slotAmount, setSlotAmount] = useState("");
  const [parkId, setParkId] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
  };
  // console.log(name);
  // console.log(address);
  // console.log(priceRate);
  // console.log(minReserveTime);

  const handleEditImage = () => {};

  const handleAddFloor = () => {};

  const handleDeletePark = () => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>admin page</h1>
        <h1 className="mt-5">add park</h1>
        <div className="flex flex-col ">
          <input
            type="text"
            className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full bg-transparent border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Park name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full bg-transparent border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <input
            type="text"
            className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full bg-transparent border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="price rate"
            value={priceRate}
            onChange={e => setPriceRate(e.target.value)}
          />
          <input
            type="text"
            className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full bg-transparent border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Min Reserve Time"
            value={minReserveTime}
            onChange={e => setMinReserveTime(e.target.value)}
          />
          <input
            type="file"
            className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full bg-transparent border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="image"
            onChange={e => {
              e.target.files[0] && setVehicleImage(e.target.files[0]);
            }}
          />
          <div>
            <button
              type="submit"
              className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
