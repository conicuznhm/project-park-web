import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import { signUp } from '../../apis/auth-api';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialInput = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export default function SignUpForm() {
  const [input, setInput] = useState(initialInput);
  const navigate = useNavigate();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // useEffect

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      // console.log(input);
      // const result = input
      // console.log(input);

      await signUp(input); //authApi signUp
      setInput(initialInput);
      navigate('/login');
      toast.success('success register');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div className="flex flex-col w-4/5 gap-y-8">
        <div className="flex flex-col text-start">
          <h1>Sign Up</h1>
        </div>
        <div className="flex flex-col gap-y-8">
          <Input
            placeholder="First Name"
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
            //   error="error"
          />
          <Input
            placeholder="Last Name"
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
            //   error="error"
          />
          <Input
            placeholder="Phone Number"
            name="phone"
            value={input.phone}
            onChange={handleChangeInput}
            //   error="error"
          />

          <Input
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
            //   error="error"
          />
          <Input
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            // error="error"
          />
          <Input
            placeholder="Confirm password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            // error="error"
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
