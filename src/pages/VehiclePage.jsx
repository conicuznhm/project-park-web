import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import VehicleAction from "../components/VehicleAction";
import VehicleItem from "../components/VehicleItem";

export default function VehiclePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const onClick = (el) => {
  //     navigate(
  //       "/app/" +
  //         el?.Game?.steamAppid +
  //         "/" +
  //         el?.Game?.name.replace(/[\W_]+/g, "_"),
  //     );
  //     window.scrollTo({ top: 0 });
  //   };

  return (
    <>
      <div className="py-8 text-3xl">Vehicle Profile</div>
      <VehicleAction />
      <VehicleItem />
      {/* {cart?.map((el) => (
          <VehicleItem el={el} onClick={onClick} key={el?.id} />
        ))}
        <VehicleAction sumPrice={sumPrice} /> */}
    </>
  );
}
