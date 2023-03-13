import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ParkItem from "../components/ParkItem";
import usePark from "../hooks/usePark";

export default function ParkPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const park = usePark();
  const onClick = el => {
    navigate("/" + el.id + "/reserve");
  };
  return (
    <>
      <div className="text-white py-8 text-3xl">Park Lots</div>
      {park?.map(el => (
        <ParkItem el={el} onClick={onClick} key={el?.id} />
      ))}
    </>
  );
}
