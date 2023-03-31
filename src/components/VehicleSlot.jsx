import car0 from "../assets/images/icon/car0.png";
import carRed from "../assets/images/icon/carRed.png";
import carGreen from "../assets/images/icon/carGreen.png";
import { useDispatch } from "react-redux";
import { updateSelectSlot } from "../redux/reserve-slice";

export default function VehicleSlot({ el, setSelectedBox, selectedBox }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (el.isAvailable) {
      dispatch(updateSelectSlot(el));
      setSelectedBox(el.id);
      if (el.id === selectedBox) {
        setSelectedBox(null);
      }
    }
    // console.log(el);
  };

  return (
    <div
      className="text-white w-40 h-24 border border-solid border-black"
      name={el.id}
      onClick={handleClick}
    >
      {el.slotName}
      <img
        // src={green ? carGreen : el.isAvailable ? car0 : carRed}
        src={selectedBox === el.id ? carGreen : el.isAvailable ? car0 : carRed}
        alt="Car"
        className="mx-auto"
        name={el.id}
      />
    </div>
  );
}
