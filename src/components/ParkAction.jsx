import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function ParkAction() {
  return (
    <>
      <div className="bg-[#18202C]">
        <div className="flex justify-between font-bold p-4">
          <p>Estimated total</p>
          <p>฿ 77777</p>
        </div>
        <div className="text-xs px-4 pb-4">
          Is this a purchase for yourself or is it a gift? Select one to continue to checkout.
        </div>
        <div className="flex justify-end pr-4 pb-4">
          <form>
            <button
              id="creditCard"
              //   onClick={handleClick}
              className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-5"
            >
              Purchase
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center my-3">
        <Link
          to="/"
          className="text-blueText bg-blueText/20  rounded-sm p-1.5 px-5 hover:bg-[#5F9EE4] hover:text-white"
        >
          Continue Shopping
        </Link>

        {/* <button className="text-xs" onClick={() => dispatch(removeAll())}> */}
        <button className="text-xs">Remove all items</button>
      </div>
    </>
  );
}
