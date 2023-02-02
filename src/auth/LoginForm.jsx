import { Link } from 'react-router-dom';

export default function LoginForm() {
  return (
    <form className="flex justify-center">
      <div className="flex flex-col w-4/5 gap-y-10">
        <div>
          <h1 className="text-start">Sign In</h1>
          <input
            type="text"
            className=" placeholder:pl-1 placeholder:text-white my-0 mx-auto w-full bg-transparent border border-[#3CACFD] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Email"
            value=""
            onChange={() => {}}
          />
        </div>
        <div>
          <input
            type="text"
            className=" placeholder:pl-1 placeholder:text-white my-0 mx-auto w-full bg-transparent border border-[#3CACFD] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Enter Password"
            value=""
            onChange={() => {}}
          />
          <div className="text-end">
            <Link to="">Forgot your password?</Link>
          </div>
        </div>

        <div className="">
          <button
            className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
          >
            Log In
          </button>
          <div className="text-end">
            <Link to="/signup">Create an account</Link>
          </div>
        </div>
      </div>
    </form>
  );
}
