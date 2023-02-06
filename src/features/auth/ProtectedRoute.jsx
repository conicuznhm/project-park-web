import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from '../../redux/auth-slice';

export default function ProtectedRoute({ children }) {
  const authUser = useSelector(selectUser);
  if (!authUser) {
    return <Navigate to={'/'} />;
  }
  return children;
}
