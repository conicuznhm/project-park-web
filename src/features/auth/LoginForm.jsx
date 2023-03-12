import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginCase } from "../../redux/auth-slice";
import * as authApi from "../../apis/auth-api";
import { setAccessToken } from "../../utils/local-storage";
import jwtDecode from "jwt-decode";
// import { useEffect } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const res = await authApi.login({ email, password });
      // console.log(res);
      setAccessToken(res.data.accessToken);
      dispatch(loginCase(jwtDecode(res.data.accessToken)));

      toast.success("login successfully");
    } catch (err) {}
  };

  const handleSetEmail = e => setEmail(e.target.value);
  const handleSetPassword = e => setPassword(e.target.value);

  return (
    <form
      className="flex justify-center items-center	h-[852px] bg-[radial-gradient(at_center_top,_#184353,_#1B2838,_#1B2838)] border-0 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-4/5 gap-y-10 h-auto">
        <div>
          <h1 className="text-start text-white mb-4">Sign In</h1>
          <input
            type="text"
            className=" placeholder:pl-1 placeholder:text-white my-0 mx-auto w-full bg-transparent border border-[#3CACFD] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Email"
            value={email}
            onChange={handleSetEmail}
          />
        </div>
        <div>
          <input
            type="password"
            className=" placeholder:pl-1 placeholder:text-white my-0 mx-auto w-full bg-transparent border border-[#3CACFD] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Enter Password"
            value={password}
            onChange={handleSetPassword}
          />
          {/* <div className="text-end">
            <Link to="">Forgot your password?</Link>
          </div> */}
        </div>

        <div>
          <button
            type="submit"
            className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
          >
            Log In
          </button>
          <div className="text-end text-white mt-4">
            <Link to="/signup">Create an account</Link>
          </div>
        </div>
      </div>
    </form>
  );
}
