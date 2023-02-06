import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from '../../redux/auth-slice';

export default function RedirectIfAuth({ children }) {
  // const auth = false;
  const authUser = useSelector(selectUser);

  if (authUser) {
    return <Navigate to={'/home'} />;
  }
  return children;
}
