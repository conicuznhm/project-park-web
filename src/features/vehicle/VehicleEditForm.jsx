import { useState } from "react";
import { useDispatch } from "react-redux";
import { editVehicle } from "../../redux/vehicle-slice";

export default function VehicleEditForm({ setIsEdit, editId }) {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [license, setLicense] = useState("");
  const [vehicleImage, setVehicleImage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editVehicle({ setIsEdit, type, brand, license, vehicleImage, vehicleId: editId }));
    setType("");
    setBrand("");
    setLicense("");
    setVehicleImage("");
    setIsEdit(state => !state);
  };
  // console.log(type);
  // console.log(brand);
  // console.log(license);
  return (
    <form onSubmit={handleSubmit} className="bg-gray-500">
      <div className="flex flex-col gap-y-5 h-auto">
        <h1 className="text-start text-white mb-4">Vehicle</h1>
        <div>
          <input
            type="file"
            name="editVehicleImage"
            onChange={e => {
              e.target.files[0] && setVehicleImage(e.target.files[0]);
            }}
          />
          <input
            type="text"
            className=" placeholder:pl-1 placeholder:text-white my-0 mx-auto w-full bg-transparent border border-[#3CACFD] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Type"
            value={type}
            onChange={e => setType(e.target.value)}
          />
          <input
            type="text"
            className=" placeholder:pl-1 placeholder:text-white my-0 mx-auto w-full bg-transparent border border-[#3CACFD] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Brand"
            value={brand}
            onChange={e => setBrand(e.target.value)}
          />
          <input
            type="text"
            className=" placeholder:pl-1 placeholder:text-white my-0 mx-auto w-full bg-transparent border border-[#3CACFD] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="License"
            value={license}
            onChange={e => setLicense(e.target.value)}
          />
        </div>
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
  );
}
