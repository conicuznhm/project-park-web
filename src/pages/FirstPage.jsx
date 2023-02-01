// import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function FirstPage() {
  return (
    <div className="flex flex-col bg-universe-first justify-between bg-no-repeat h-screen ">
      <div></div>

      <div className="mt-80">
        <Link
          to="/login"
          type="button"
          className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 mr-2 mb-2 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
          bg-opacity-70 w-36"
        >
          Sign In
        </Link>
      </div>

      <div className="flex flex-col text-white font-medium text-sm mb-14 gap-y-3">
        <div className="text-end pr-4">
          <span>Don't have an account yet?</span>
        </div>

        <div className="text-end pr-4 underline">
          <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </div>
  );
}
