

import React, { useState, useEffect } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";


const geoUrl =
    "https://raw.githubusercontent.com/martgnz/bcn-geodata/master/barris/barris.geojson";





const markersHardcode = [
    { name: "Sagrada Familia", coordinates: [2.1744, 41.4036] },
    { name: "Park Güell", coordinates: [2.1526, 41.4136] },
    { name: "Casa Batlló", coordinates: [2.1649, 41.3916] },
    { name: "La Rambla", coordinates: [2.1733, 41.3818] },
];


const Map = () => {

    const [markers, setMarkers] = useState([]);

    const url = ""

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMarkers(data);
            })
            .catch((error) => {
                console.error("Error al obtener los marcadores:", error);
            });
    }, []);


    return (
        <ComposableMap

            projectionConfig={{
                scale: 125000,
                center: [2.1744, 41.4036],
            }}
        >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#EAEAEC"
                            stroke="#D6D6DA"
                        />
                    ))
                }
            </Geographies>
            {markersHardcode.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                    <circle r={3} fill="#F00" stroke="#fff" strokeWidth={1} />
                    <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                    >
                        {name}
                    </text>
                </Marker>
            ))}
        </ComposableMap>
    );
};

export default Map;





// import React from "react";
// import { ComposableMap, ZoomableGroup, Geographies, Geography, Marker } from "react-simple-maps";


// import mapImage from "../../assets/img/mapa-barrios-de-barcelona.jpg"; // Ruta de la imagen local

// const markers = [
//     { name: "Sagrada Familia", coordinates: [2.1744, 41.4036] },
//     { name: "Park Güell", coordinates: [2.1526, 41.4136] },
//     { name: "Casa Batlló", coordinates: [2.1649, 41.3916] },
//     { name: "La Rambla", coordinates: [2.1733, 41.3818] },

// ];

// const MapContainer = () => {
//     return (
//         <ComposableMap
//             projection="geoMercator"
//             projectionConfig={{
//                 scale: 2000,
//                 center: [-4, 40],
//             }}
//             width={800} // Ajusta el ancho según tus necesidades
//             height={600} // Ajusta la altura según tus necesidades
//         >
//             <ZoomableGroup>
//                 <image
//                     href={mapImage}
//                     width={800} // Ajusta el ancho según el tamaño de la imagen
//                     height={600} // Ajusta la altura según el tamaño de la imagen
//                 />
//             </ZoomableGroup>
//             {markers.map(({ name, coordinates }) => (
//                 <Marker key={name} coordinates={coordinates}>
//                     <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
//                     <text
//                         textAnchor="middle"
//                         y={-20}
//                         style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
//                     >
//                         {name}
//                     </text>
//                 </Marker>
//             ))}
//         </ComposableMap>
//     );
// };

// export default MapContainer;
