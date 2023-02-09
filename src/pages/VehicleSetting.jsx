import { useState } from 'react';
import Input from '../components/Input';
import Item from '../components/Item';

export default function VehicleSetting() {
  const [isAdd, setIsAdd] = useState(false);

  return (
    <div className="flex flex-col gap-y-6 mt-10">
      <div className="w-5/6 ml-8">
        <div>
          <span>Vehicle</span>
        </div>
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
        <Input placeholder="First Name" name="firstName" />
        <Input placeholder="First Name" name="firstName" />
        <Input placeholder="First Name" name="firstName" />
      </div>
      <div className="flex justify-between">
        <div className="w-36">
          <button
            type="button"
            className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
          >
            Submit
          </button>
        </div>
        <div className="w-36">
          <button
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
  );
}
