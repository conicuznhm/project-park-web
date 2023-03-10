import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import Item from '../components/Item';
import { selectUser } from '../redux/auth-slice';
import { createVehicle, fetchVehicle } from '../redux/vehicle-slice';

export default function VehicleSetting() {
  const initial = {
    license: '',
    type: '',
    brand: ''
  };
  const [isAdd, setIsAdd] = useState(false);
  const [license, setLicense] = useState('');
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [input, setInput] = useState(initial);

  const dispatch = useDispatch();

  const handleCancel = () => {
    setLicense('');
    setType('');
    setBrand('');
  };

  const handleClick = () => {
    setInput({ ...initial, license, type, brand });
    // console.log(input);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createVehicle(input));
    setLicense('');
    setType('');
    setBrand('');
  };

  useEffect(() => {
    dispatch(fetchVehicle());
  }, []);

  const vehicle = useSelector(state => state.vehicle.vehicle) || [];
  const user = useSelector(selectUser);
  // const vehicleByUserId = vehicle.filter(el => +el.userId === +user.id);
  // console.log(vehicleByUserId);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-6 mt-10">
        <div className="w-5/6 ml-8">
          <div>
            <span>Vehicle</span>
          </div>
          {vehicle.length
            ? vehicle.map(
                el =>
                  +user.id === +el.userId && (
                    <div key={el.id}>
                      {el.license} {el.type} {el.brand}
                    </div>
                  )
              )
            : null}
        </div>
        <div className="flex flex-col w-5/6 ml-16 gap-y-6">
          <div>
            <Item src="" alt="" name="" />
          </div>
        </div>
        <div className="" type="">
          <span>Add Vehicle</span>
        </div>
        <div>
          <div>
            <img
              // onClick={() => document.getElementById('chooseImage').click()}
              className="w-24 h-24 mb-3 rounded-full shadow-lg mx-auto"
              // src={file ? URL.createObjectURL(file) : authUser.profileImage || cat1}
              alt="Vehicle image"
            />
          </div>
          <Input
            placeholder="Car license"
            name="license"
            onChange={e => setLicense(e.target.value)}
            value={license}
          />
          <Input
            placeholder="Type"
            name="type"
            onChange={e => setType(e.target.value)}
            value={type}
          />
          <Input
            placeholder="Brand"
            name="brand"
            onChange={e => setBrand(e.target.value)}
            value={brand}
          />
        </div>
        <div className="flex justify-between">
          <div className="w-36">
            <button
              type="submit"
              className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
            >
              Submit
            </button>
          </div>
          <div>
            <button
              onClick={handleClick}
              type="button"
              className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
            >
              set
            </button>
          </div>
          <div className="w-36">
            <button
              onClick={handleCancel}
              type="button"
              className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
