import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteVehicle } from "../redux/vehicle-slice";
import cat1 from "../assets/images/carpark/cat1.png";
import VehicleEditForm from "../features/vehicle/VehicleEditForm";

export default function VehicleItem({ el, onClick, editId }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const handleClick = () => {
    setIsEdit(!isEdit);
    onClick(el);
  };
  return (
    <div key={el?.id} className="flex justify-between items-center bg-[#18202C] mt-4 pr-4">
      <div className="flex items-center">
        {/* <img src={el?.vehicleImage || cat1} className="h-11 bg-blue-400 m-4 cursor-pointer" /> */}
        <img
          // onClick={() => onClick(el)}
          onClick={handleClick}
          className="w-24 h-20 mb-3 rounded-xl shadow-lg cursor-pointer"
          src={el?.vehicleImage || cat1}
          alt="Car image"
        />
        <p className="cursor-pointer">{""}</p>
      </div>
      <div className="relative text-white">
        {el?.type} {el?.brand} {el?.license}
        <div className="absolute z-50">
          {isEdit && <VehicleEditForm editId={editId} setIsEdit={setIsEdit} />}
        </div>
      </div>
      <button
        type="button"
        className="border border-1 border-gray-300 rounded-md text-ls text-white"
        onClick={() => dispatch(deleteVehicle(el?.id))}
      >
        Remove
      </button>
    </div>
  );
}

// <img
//   onClick={() => isEdit && document.getElementById("chooseImage").click()}
//   className="w-36 h-36 mb-3 rounded-full shadow-lg relative"
//   src={file ? URL.createObjectURL(file) : authUser.profileImage || cat1}
//   alt="Profile image"
// />

// <input
//   id="chooseImage"
//   type="file"
//   name="editProfileImage"
//   className="hidden"
//   onChange={e => {
//     e.target.files[0] && setFile(e.target.files[0]);
//   }}
// />

// src={file ? URL.createObjectURL(file) : el?.vehicleImage || cat1}
