import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser, selectUser, updateCase } from "../redux/auth-slice";
import cat1 from "../assets/images/carpark/cat1.png";
import { useState } from "react";
import Input from "../components/Input";
import * as userApi from "../apis/user-api";
import { useEffect } from "react";

export default function UserSetting() {
  const authUser = useSelector(selectUser);
  const [isEdit, setIsEdit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  //set user profile name phone
  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const res = await userApi.updateProfileUser({ firstName, lastName, phone });
      if (res) {
        dispatch(updateCase({ firstName, lastName, phone }));
        setIsEdit(false);
        setFirstName("");
        setLastName("");
        setPhone("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  //set image profile
  const handleClickSave = async () => {
    const formData = new FormData();
    formData.append("profileImage", file);
    const res = await userApi.updateProfile(formData);
    // console.log(file);
    dispatch(updateCase({ profileImage: res.data.profileImage }));
    setFile(null);
  };

  const handleClick = () => {
    setIsEdit(false);
    setFirstName("");
    setLastName("");
    setPhone("");
  };

  return (
    <div>
      {/* <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> */}
      <div>
        <div className="flex flex-col items-center pb-10">
          <img
            onClick={() => isEdit && document.getElementById("chooseImage").click()}
            className="w-36 h-36 mb-3 rounded-full shadow-lg relative"
            src={file ? URL.createObjectURL(file) : authUser.profileImage || cat1}
            alt="Profile image"
          />

          <div className="left-1/3">
            <input
              id="chooseImage"
              type="file"
              name="editProfileImage"
              className="hidden"
              onChange={e => {
                e.target.files[0] && setFile(e.target.files[0]);
              }}
            />
            {isEdit ? (
              <div className="">
                <button
                  onClick={handleClickSave}
                  type="button"
                  className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
                >
                  Save
                </button>
              </div>
            ) : null}
          </div>

          <div className="mb-1 text-4xl font-medium text-white dark:text-white">
            {authUser.firstName} {authUser.lastName}
          </div>
          <div className="text-2xl text-gray-400 dark:text-gray-400">{authUser.phone}</div>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button
              onClick={() => setIsEdit(!isEdit)}
              className="text-black bg-sky-500 hover:bg-blue-800 
              font-medium rounded-lg text-base px-8 py-2.5 
              dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
                w-full"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {isEdit ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-3/4 mx-auto">
          <div className="flex flex-col gap-5">
            <Input
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              error=""
            />
            <Input
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              error=""
            />
            <Input
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              error=""
            />
          </div>
          <div className="flex justify-between">
            <div className="w-28">
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
            <div className="w-28">
              <button
                onClick={handleClick}
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
        </form>
      ) : null}
    </div>
  );
}
