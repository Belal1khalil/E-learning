
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({children}) {
     const{token} = useContext(UserContext)
    if (token) {
        return children ;
    } else {
        return <Navigate to="/login"/>
    }
}