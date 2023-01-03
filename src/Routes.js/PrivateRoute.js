import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){
  const { currentUser } = useContext(AuthContext);
  return currentUser !== null
    ? children
    : <Navigate to="/login/" replace/>

}

export default PrivateRoute;