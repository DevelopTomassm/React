//Libraries imports
import { Navigate } from "react-router-dom";
//Context function import
import { useAuth } from "../../context/authContext";
//Export function
//This function is used to protect the routes of non-logged users
export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (!user) return <Navigate to="/inicio" />;
  if (loading) return <div> Cargando... </div>;
  return <> {children} </>;
}
