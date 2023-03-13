// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPark, selectPark } from "../redux/park-slice";
// import { useNavigate } from "react-router-dom";
// import ParkItem from "../components/ParkItem";
// import ParkAction from "../components/ParkAction";

// export default function ParkSetting() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(fetchPark());
//   }, []);

//   const park = useSelector(selectPark);

//   console.log(park);
//   //   const onClick = (el) => {
//   //     navigate(
//   //       "/app/" +
//   //         el?.Game?.steamAppid +
//   //         "/" +
//   //         el?.Game?.name.replace(/[\W_]+/g, "_"),
//   //     );
//   //     window.scrollTo({ top: 0 });
//   //   };

//   return (
//     <>
//       <div className="py-8 text-3xl">Park Profiles</div>
//       <ParkAction />
//       <ParkItem />
//       {/* {cart?.map((el) => (
//           <VehicleItem el={el} onClick={onClick} key={el?.id} />
//         ))}
//         <VehicleAction sumPrice={sumPrice} /> */}
//     </>
//   );
// }
