import { useDispatch } from "react-redux";
import { deleteFloor } from "../redux/admin-slice";

export default function FloorOffer({ el, onClick }) {
  const dispatch = useDispatch();
  return (
    <div key={el?.id} className="flex justify-between items-center bg-[#18202C] mt-4 pr-4">
      <div className="flex items-center" onClick={() => onClick(el)}></div>
      <div className="text-white">{el?.floorName}</div>
      <div className="text-white">{el?.slotAmount}</div>
      <div className="text-white">{el?.parkId}</div>
      <button
        type="button"
        className="border border-1 border-gray-300 rounded-md text-ls text-white"
        onClick={() => dispatch(deleteFloor(el?.id))}
      >
        Remove
      </button>
    </div>
  );
}
