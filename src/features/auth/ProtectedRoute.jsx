import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const auth = true;
  if (!auth) {
    return <Navigate to={'/'} />;
  }
  return children;
}
