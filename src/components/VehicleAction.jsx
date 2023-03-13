import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import VehicleForm from "../features/vehicle/VehicleForm";

export default function VehicleAction() {
  return (
    <>
      <div className="bg-[#18202C]">
        <div className="flex flex-col text-end">
          <div className="">
            <button
              type="button"
              //   onClick={handleClick}
              className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-5"
            >
              Add Vehicle
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
