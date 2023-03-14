import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ParkOffer from "../../components/ParkOffer";
import ParkForm from "./ParkForm";

export default function ParkContainer() {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const park = useSelector(state => state.admin.park);

  const onClick = el => {
    navigate("/" + el?.id + "/profile");
  };

  return (
    <div className="">
      <div className="py-8 text-3xl text-white">Park Lots</div>
      <div>
        {park?.map(el => (
          <ParkOffer el={el} onClick={onClick} key={el?.id} />
        ))}
        <div className="mt-10 flex justify-end">
          <button
            type="button"
            onClick={() => setIsEdit(!isEdit)}
            className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-5"
          >
            Add park lot
          </button>
        </div>
      </div>
      <div className="w-3/4 mx-auto">{isEdit && <ParkForm setIsEdit={setIsEdit} />}</div>
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
