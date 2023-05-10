import React from "react";
import { Link } from "react-router-dom";

const Reservas = () => {
    return(
        <div>Esta es la página de reservas
            <Link to="/user-area"><button>Volver</button>
            </Link>
        </div>
    )
}

export default Reservas;