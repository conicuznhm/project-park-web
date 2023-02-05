import { Link } from 'react-router-dom';
import Input from '../components/Input';

export default function SignUpForm() {
  return (
    <form className="flex justify-center">
      <div className="flex flex-col w-4/5 gap-y-8">
        <div className="flex flex-col text-start">
          <h1>Sign Up</h1>
        </div>
        <div className="flex flex-col gap-y-8">
          <Input
            placeholder="First Name"
            name="firstName"
            value=""
            onChange={() => {}}
            //   error="error"
          />
          <Input
            placeholder="Last Name"
            name="lastName"
            value=""
            onChange={() => {}}
            //   error="error"
          />
          <Input
            placeholder="Phone Number"
            name="phone"
            value=""
            onChange={() => {}}
            //   error="error"
          />

          <Input
            placeholder="Email"
            name="email"
            value=""
            onChange={() => {}}
            //   error="error"
          />
          <Input
            placeholder="Password"
            name="password"
            value=""
            onChange={() => {}}
            // error="error"
          />
          <Input
            placeholder="Confirm password"
            name="confirmPassword"
            value=""
            onChange={() => {}}
            // error="error"
          />
        </div>
        <div className="flex justify-between">
          <div className="w-36">
            <button
              className="text-black bg-sky-500 hover:bg-blue-800 
          font-medium rounded-lg text-base px-8 py-2.5 
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
            w-full"
            >
              Sign Up
            </button>
          </div>

          <div className="w-36">
            <Link
              to="/"
              type="button"
              className="text-black bg-sky-500 hover:bg-blue-800 
            font-medium rounded-lg text-base px-8 py-2.5 
            dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
              w-full"
            >
              Cancel
              {/* useEffect to handle clearing data */}
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
