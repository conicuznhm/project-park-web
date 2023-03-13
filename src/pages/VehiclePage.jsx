import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import VehicleItem from "../components/VehicleItem";
import VehicleForm from "../features/vehicle/VehicleForm";
import useVehicle from "../hooks/useVehicle";

export default function VehiclePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isShow, setIsShow] = useState(false);
  const [editId, setEditId] = useState(false);
  const vehicle = useVehicle();
  // console.log(vehicle);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  const onClick = el => {
    setEditId(el.id);
  };
  return (
    <>
      <div className="py-2 text-3xl text-white">Vehicle Profile</div>
      <div className="text-end relative">
        <button
          type="button"
          onClick={handleClick}
          className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-5"
        >
          Add Vehicle
        </button>
        <div>
          <div className="absolute right-0 z-50">
            {isShow && <VehicleForm setIsShow={setIsShow} />}
          </div>
        </div>
      </div>
      {vehicle?.map(el => (
        <VehicleItem el={el} onClick={onClick} key={el.id} editId={editId} />
      ))}
    </>
  );
}

//   const onClick = (el) => {
//     navigate(
//       "/app/" +
//         el?.Game?.steamAppid +
//         "/" +
//         el?.Game?.name.replace(/[\W_]+/g, "_"),
//     );
//     window.scrollTo({ top: 0 });
//   };

// onClick={() => document.getElementById("chooseImage").click()}

{
  /* <input
        id="chooseImage"
        type="file"
        name="editVehicleImage"
        className="hidden"
        onChange={e => {
          e.target.files[0] && setFile(e.target.files[0]);
        }}
      /> */
}
