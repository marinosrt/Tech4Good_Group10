import React, { useContext } from "react";
import UserContext from "context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const { user } = useContext(UserContext);
    console.log("este es el user", user)

    if (!user) {
        return <Navigate to="/auth"/>
    }

    return children;
}

export default ProtectedRoute;