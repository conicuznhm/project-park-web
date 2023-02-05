import Router from './routes/Router';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container-mobile">
      <Router />
      <ToastContainer autoClose="2000" theme="light" position="top-center" />
    </div>
  );
}

export default App;
