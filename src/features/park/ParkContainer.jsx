import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ParkOffer from "../../components/ParkOffer";
import usePark from "../../hooks/usePark";

export default function ParkContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const park = useSelector(state => state.admin.park);

  const onClick = el => {
    navigate("/" + el?.id + "/profile");
  };

  return (
    <div>
      <div className="py-8 text-3xl text-white">Park Lots</div>
      <div className="bg-[#18202C]">
        <div className="flex flex-col text-end">
          <div className="">
            <button
              type="button"
              //   onClick={handleClick}
              className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-5"
            >
              Add park lot
            </button>
          </div>
        </div>
      </div>
      {park?.map(el => (
        <ParkOffer el={el} onClick={onClick} key={el.id} />
      ))}
      {/* {cart?.map((el) => (
          <VehicleItem el={el} onClick={onClick} key={el?.id} />
        ))}
        <VehicleAction sumPrice={sumPrice} /> */}
    </div>
  );
}

// const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [priceRate, setPriceRate] = useState("");
//   const [minReserveTime, setMinReserveTime] = useState("");
//   const [parkImage, setParkImage] = useState("");
//   const [floorName, setFloorName] = useState("");
//   const [slotAmount, setSlotAmount] = useState("");
//   const [parkId, setParkId] = useState(null);

{
  /* <div className="text-white py-8 text-3xl">Park Lots</div>
      {park?.map(el => (
        <ParkItem el={el} onClick={onClick} key={el?.id} />
      ))} */
}
