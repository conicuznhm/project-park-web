import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createFloor, editPark, fetchOfferFloor } from "../../redux/admin-slice";
import cat1 from "../../assets/images/carpark/cat1.png";
import { useNavigate } from "react-router-dom";
import useOfferFloor from "../../hooks/useOfferFloor";
import FloorOffer from "../../components/FloorOffer";

export default function ParkEditForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [priceRate, setPriceRate] = useState("");
  const [minReserveTime, setMinReserveTime] = useState("");
  const [parkImage, setParkImage] = useState("");
  const [floorName, setFloorName] = useState("");
  const [slotAmount, setSlotAmount] = useState("");

  const [isFloor, setIsFloor] = useState(false);
  const [isPark, setIsPark] = useState(false);

  const dispatch = useDispatch();

  const { parkId } = useParams();
  const park = useSelector(state => state.admin.park);

  useEffect(() => {
    dispatch(fetchOfferFloor(parkId));
  }, [parkId]);
  const floor = useOfferFloor();

  const handleClickEdit = () => {
    dispatch(editPark({ name, address, priceRate, minReserveTime, parkImage, parkId }));
    setIsPark(false);
    setName("");
    setAddress("");
    setPriceRate("");
    setMinReserveTime("");
    setParkImage("");
  };

  const handleClickAdd = () => {
    dispatch(createFloor({ floorName, slotAmount, parkId }));
    setIsFloor(false);
    setFloorName("");
    setSlotAmount("");
  };
  const parkPic = park.find(el => el.id === +parkId);

  const handleEditPark = () => {
    setIsPark(!isPark);
    setIsFloor(false);
  };
  const handleAddFloor = () => {
    setIsFloor(!isFloor);
    setIsPark(false);
  };

  return (
    <>
      <form>
        <h1 className="text-white text-xl">Admin page</h1>
        <div className="flex gap-8 mb-8 mt-4">
          <button
            type="button"
            onClick={handleAddFloor}
            className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
          >
            Add floor
          </button>
          <button
            type="button"
            onClick={handleEditPark}
            className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
          >
            Edit park
          </button>
        </div>

        {isPark && (
          <div>
            <h1 className="mt-5">add park</h1>
            <img
              className="w-28 h-28 mx-auto mb-3 rounded-xl shadow-lg cursor-pointer"
              src={parkImage ? URL.createObjectURL(parkImage) : parkPic?.parkImage || cat1}
              alt="Park lot image"
            />
            <div className="flex flex-col ">
              <input
                type="text"
                className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
                placeholder="Park name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="text"
                className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
                placeholder="Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
              <input
                type="text"
                className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
                placeholder="price rate"
                value={priceRate}
                onChange={e => setPriceRate(e.target.value)}
              />
              <input
                type="text"
                className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
                placeholder="Min Reserve Time"
                value={minReserveTime}
                onChange={e => setMinReserveTime(e.target.value)}
              />
              <input
                type="file"
                className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
                placeholder="image"
                onChange={e => {
                  e.target.files[0] && setParkImage(e.target.files[0]);
                }}
              />
              <div>
                <button
                  type="button"
                  onClick={handleClickEdit}
                  className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
        {isFloor && (
          <div>
            <input
              type="text"
              className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
              placeholder="Floor number"
              value={floorName}
              onChange={e => setFloorName(e.target.value)}
            />
            <input
              type="text"
              className=" placeholder:pl-1 placeholder: my-0 mx-auto w-full border border-[#3CACFD]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
              placeholder="Slot amount"
              value={slotAmount}
              onChange={e => setSlotAmount(e.target.value)}
            />
            <button
              type="button"
              onClick={handleClickAdd}
              className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
            >
              Submit
            </button>
          </div>
        )}
        <div className="mt-10 mx-auto">
          <div className="flex flex-row gap-4">
            <span className="text-white text-sm">Floor-number</span>
            <span className="text-white text-sm">slots-amount</span>
            <span className="text-white text-sm">Park-id</span>
          </div>
          {floor?.map(el => (
            <FloorOffer el={el} key={el?.id} />
          ))}
        </div>
      </form>
    </>
  );
}
