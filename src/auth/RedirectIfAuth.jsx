import { Navigate } from 'react-router-dom';

export default function RedirectIfAuth({ children }) {
  const auth = false;
  if (auth) {
    return <Navigate to="/home" />;
  }
  return children;
}
