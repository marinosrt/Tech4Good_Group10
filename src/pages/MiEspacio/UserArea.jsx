import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const UserArea = () => {

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default UserArea