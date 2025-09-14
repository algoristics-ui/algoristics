import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
    {/* <div style={{ background: 'yellow', color: 'black', padding: 20, fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}> */}
      {/* TEST PROTECTED ROUTE: ProtectedRoute is rendering its children */}
      <div style={{ marginTop: 20 }}>{children}</div>
    </div>
  );
};

export default ProtectedRoute;