import { useDispatch } from "react-redux";
export default function ParkItem() {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center bg-[#18202C] mb-1 pr-4">
      <div className="flex items-center">
        <img
          src={""}
          className="h-11 bg-blue-400 m-4 cursor-pointer"
          //   onClick={() => onClick(el)}
        />
        <p
          className="cursor-pointer"
          // onClick={() => onClick(el)}
        >
          {""}
        </p>
      </div>
      <div className="">
        <p>{"Car"}</p>
        <button
          href="/"
          className="text-xs"
          //   onClick={() => dispatch(deleteItem(el.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
