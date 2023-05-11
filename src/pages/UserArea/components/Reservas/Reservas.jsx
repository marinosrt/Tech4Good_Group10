import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Reservas = () => {

    const location = useLocation();

    return (
        <div >
            <div className=" relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">

                <ol className="relative z-10 flex justify-between text-sm font-medium text-white" >

                    <li className="flex items-center gap-2 bg-myblue3 p-2">
                        <span className={`h-6 w-6 rounded-full ${location.pathname === "/user-area/reservas" ? "bg-myblue2" : "bg-gray-300"} text-center text-[10px]/6 font-bold`} >
                            1
                        </span>
                        <span className="hidden sm:block"> Tarifa </span>
                    </li>

                    <li className="flex items-center gap-2 bg-myblue3 p-2">
                        <span className={`h-6 w-6 rounded-full ${location.pathname === "/user-area/reservas/step2" ? "bg-myblue2" : "bg-gray-300"} text-center text-[10px]/6 font-bold`} >
                            2
                        </span>
                        <span className="hidden sm:block"> Pago </span>
                    </li>

                    <li className="flex items-center gap-2 bg-myblue3 p-2">
                        <span className={`h-6 w-6 rounded-full ${location.pathname === "/user-area/reservas/step3" ? "bg-myblue2" : "bg-gray-300"} text-center text-[10px]/6 font-bold`} >
                            3
                        </span>
                        <span className="hidden sm:block"> Confirmación </span>
                    </li>
                </ol>
            </div>

            <div className="flex justify-center">
                <Outlet />
            </div>

            <Link to="/user-area">
                <button>Volver</button>
            </Link>
        </div>
    )
}

export default Reservas;