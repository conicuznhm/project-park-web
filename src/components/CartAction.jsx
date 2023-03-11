// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { clearCart, removeAll } from "../redux/cart-slice";
// import useCart from "../hooks/useCart";
// import Script from "react-load-script";
// import useCharge from "../hooks/useCharge";
// import { createTransaction, setCharge } from "../redux/transaction-slice";
// import * as chargeApi from "../apis/charge-api";
// import useUser from "../hooks/useUser";

// export default function CartAction({ sumPrice }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useUser();
//   const cart = useCart();

//   //====================================================//
//   const charge = useCharge();
//   const handleLoadScript = () => {
//     console.log("script");
//     window.OmiseCard.configure({
//       // publicKey: process.env.REACT_APP_OMISE_PUBLIC_KEY,
//       publicKey: "pkey_test_5v17fi85hzib9l24i5a",
//       frameLabel: "Steem",
//       submitLabel: "PAY NOW",
//       currency: "thb",
//     });
//   };
//   const creditCardConfigure = () => {
//     window.OmiseCard.configure({
//       defaultPaymentMethod: "credit_card",
//       otherPaymentMethods: [],
//     });
//     window.OmiseCard.configureButton("#creditCard");
//     window.OmiseCard.attach();
//   };

//   const omiseCardHandle = (email, name, amount) => {
//     amount *= 100;
//     window.OmiseCard.open({
//       frameDescription: "Invoice #3847",
//       amount,
//       onCreateTokenSuccess: async (token) => {
//         try {
//           const res = await chargeApi.createChargeApi({
//             email,
//             name,
//             amount,
//             token,
//           });
//           if (res.data.status !== "successful") {
//             throw new Error("purchase error");
//           }
//           const result = { ...res.data, amount: res.data.amount / 100 };
//           console.log(cart);
//           const gameArrId = cart.map((el) => el.gameId);

//           dispatch(setCharge(result));
//           dispatch(createTransaction({ gameArrId, token }));
//           dispatch(clearCart());
//           navigate("/paymentsucess");
//         } catch (err) {
//           console.error(err);
//         }
//       },
//       onFormClosed: () => {},
//     });
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     creditCardConfigure();
//     omiseCardHandle(user.email, user.userName, sumPrice);
//   };

//   // console.log(charge);
//   //====================================================//

//   return (
//     <>
//       <div className="bg-[#18202C]">
//         <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
//         <div className="flex justify-between font-bold p-4">
//           <p>Estimated total</p>
//           <p>฿ {sumPrice}</p>
//         </div>
//         <div className="text-xs px-4 pb-4">
//           Is this a purchase for yourself or is it a gift? Select one to
//           continue to checkout.
//         </div>
//         <div className="flex justify-end pr-4 pb-4">
//           <form>
//             <button
//               id="creditCard"
//               onClick={handleClick}
//               className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-5"
//             >
//               Purchase
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="flex justify-between items-center my-3">
//         <Link
//           to="/"
//           className="text-blueText bg-blueText/20  rounded-sm p-1.5 px-5 hover:bg-[#5F9EE4] hover:text-white"
//         >
//           Continue Shopping
//         </Link>

//         <button className="text-xs" onClick={() => dispatch(removeAll())}>
//           Remove all items
//         </button>
//       </div>
//     </>
//   );
// }
