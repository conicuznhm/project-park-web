import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import cat1 from "../assets/images/carpark/cat1.png";
import { deletePark } from "../redux/admin-slice";

export default function ParkOffer({ el, onClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate();
    onClick(el);
  };
  return (
    <div
      key={el?.id}
      onClick={handleClick}
      className="flex justify-between items-center bg-[#18202C] mt-4 pr-4"
    >
      <div className="flex items-center">
        <img
          className="w-24 h-20 mb-3 rounded-xl shadow-lg cursor-pointer"
          src={el?.parkImage || cat1}
          alt="Park lot image"
        />
      </div>
      <div className="text-white">{el?.name}</div>
      <div className="text-white">{el?.address}</div>
      <div className="text-white">{el?.priceRate + "฿ per hour"}</div>
      <button
        type="button"
        className="border border-1 border-gray-300 rounded-md text-ls text-white"
        onClick={() => dispatch(deletePark(el?.id))}
      >
        Remove
      </button>
    </div>
  );
}
