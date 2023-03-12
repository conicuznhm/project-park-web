// import { Dropdown } from 'flowbite-react';
import { Link } from "react-router-dom";

export default function FirstPage() {
  return (
    <Link
      to="/login"
      className="h-[852px] flex flex-col bg-universe-first justify-between bg-no-repeat border-0 rounded-2xl"
    >
      <div className="flex justify-center items-center h-full">
        <div className="text-5xl text-cyan-400">Touch!!!</div>
      </div>
      <div className="flex flex-col text-end text-base text-white font-medium mb-14 gap-y-3 pr-4">
        <div className="">
          <span>Don't have an account yet?</span>
        </div>
        <div className="underline">
          <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </Link>
  );
}
