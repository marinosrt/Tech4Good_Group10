import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (<>

        <div className="grid h-screen px-4 bg-white place-content-center">
            <h2>404 | Not Found</h2>
            <Link to="/" className="flex justify-center mt-8">
                <button>Volver</button>
            </Link>
        </div>
    </>

    )
}

export default Error404;
