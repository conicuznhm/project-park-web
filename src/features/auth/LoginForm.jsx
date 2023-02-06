import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const {login} = useSelector()

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      // await login(email, password)

      toast.success('login successfully');
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSetEmail = e => setEmail(e.target.value);
  const handleSetPassword = e => setPassword(e.target.value);

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div className="flex flex-col w-4/5 gap-y-10">
        <div>
          <h1 className="text-start">Sign In</h1>
          <input
            type="text"
            className=" placeholder:pl-1 placeholder:text-white my-0 mx-auto w-full bg-transparent border border-[#3CACFD] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Email"
            value={email}
            onChange={handleSetEmail}
          />
        </div>
        <div>
          <input
            type="text"
            className=" placeholder:pl-1 placeholder:text-white my-0 mx-auto w-full bg-transparent border border-[#3CACFD] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            placeholder="Enter Password"
            value={password}
            onChange={handleSetPassword}
          />
          <div className="text-end">
            <Link to="">Forgot your password?</Link>
          </div>
        </div>

        <div className="">
          <button
            type="submit"
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