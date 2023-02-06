import Router from './routes/Router';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAccessToken } from './utils/local-storage';
import { useDispatch } from 'react-redux';
import { fetchAuthUser } from './redux/auth-slice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getAccessToken()) {
      // console.log(getAccessToken());
      dispatch(fetchAuthUser());
    }
  }, []);

  return (
    <div className="container-mobile">
      <Router />
      <ToastContainer autoClose="2000" theme="light" position="top-center" />
    </div>
  );
}

export default App;
