import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const UserArea = () => {

    return (
        <div className="bg-myblue3 min-h-screen">
            <Header />
            <div className="px-12 py-12 xl:px-40">
                <Outlet />
            </div>

        </div>
    )
}

export default UserArea