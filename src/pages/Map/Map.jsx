import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";


const geoUrl =
    "https://raw.githubusercontent.com/martgnz/bcn-geodata/master/barris/barris.geojson";


const array = ['Serveis a les empreses i oficines',
    'Activitats emmagatzematge',
    'Administració',
    'Activitats de transport ',
    'Vehicles',
    'Restaurants',
    'Material equipament llar',
    'Carn i Porc',
    'Altres',
    'Peix i marisc',
    'Floristeries',
    'Fruites i verdures',
    'Drogueria i perfumeria',
    'Vestir',
    'Ous i aus',
    'Pa, pastisseria i làctics',
    'Basars',
    'Plats preparats (no degustació)',
    'Farmàcies PARAFARMÀCIA',
    'Ensenyament',
    'Sense informació',
    'Souvenirs',
    'Reparacions (Electrodomèstics i automòbils)',
    'Autoservei / Supermercat',
    'Sanitat i assistència',
    'Sense informació - Havia tingut activitat (rètol)',
    'Finances i assegurances',
    "serveis d'allotjament",
    'Bars   / CIBERCAFÈ',
    'Equipaments culturals i recreatius',
    'En reforma',
    'Merceria',
    'Locals buits en venda i lloguer',
    'Arts gràfiques',
    "Centres d'estètica",
    'Calçat i pell',
    'Xocolateries / Geladeries / Degustació',
    'Activitats industrials',
    'Parament ferreteria',
    'Activitats immobiliàries',
    'Altres equipaments esportius',
    'Locals buits en lloguer',
    'Mobles i articles fusta i metall',
    'Fabricació tèxtil',
    'Locals buits en venda',
    'Perruqueries',
    'Tabac i articles fumadors',
    'Serveis de menjar take away MENJAR RÀPID',
    'Serveis Socials',
    'Associacions',
    'Informàtica',
    'Gimnàs /fitnes',
    'Activitats de transport i emmagatzematge',
    'Activitats de la construcció',
    'Joguines i esports',
    'Llibres, diaris i revistes',
    'Joieria, rellotgeria i bijuteria',
    'Grans magatzems i hipermercats',
    'Aparells domèstics',
    'Manteniment, neteja i similars',
    'Veterinaris / Mascotes',
    'Herbolaris, dietètica i NUTRICIÓ',
    'Bars especials amb actuació / Bars musicals / Discoteques /PUB',
    'Souvenirs i basars',
    'Begudes',
    'Pàrquings i garatges',
    'Tintoreries',
    'Fotografia',
    'Arranjaments',
    'Òptiques ',
    'Agències de viatge',
    'Segells, monedes i antiguitats',
    'Serveis de telecomunicacions',
    'serveis de menjar i begudes',
    'Equipaments religiosos',
    'Combustibles i carburants',
    'Música',
    'Locutoris',
    'Maquinària',
    'Esports',
    'Òptiques i fotografia',
    'altres',
    'Altres ( per exemple VENDING)'];


const markersHardcode = [
    { name: "fruteria", coordinates: [2.1744, 41.4036] },
    { name: "fruteria", coordinates: [2.1526, 41.4136] },
    { name: "floristeria", coordinates: [2.1649, 41.3916] },
    { name: "carniceria", coordinates: [2.1733, 41.3818] },
];


const Map = () => {

    const [markers, setMarkers] = useState([]);

    const [selectedCategories, setSelectedCategories] = useState([]);



    const handleInputChange = (value) => {
        setSelectedCategories((prevInputs) => {
            if (prevInputs.includes(value)) {
                return prevInputs.filter((item) => item !== value);
            } else {
                return [...prevInputs, value];
            }
        });
    };

    const url = "http://localhost:8080/getBusiness"

    useEffect(() => {
        const fetchMarkers = async () => {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(selectedCategories)
                });

                if (!response.ok) {
                    throw new Error("Error al obtener los marcadores");
                }
                console.log(selectedCategories)
                const data = await response.json();
                const parsedData = data.map(item => ({
                    ...item,
                    Longitud: parseFloat(item.Longitud),
                    Latitud: parseFloat(item.Latitud)
                }));
                setMarkers(parsedData);
                console.log("data: " + data)
                setMarkers(data);
            } catch (error) {
                console.error("Error al obtener los marcadores:", error);
                console.log(selectedCategories)

            }
        };

        fetchMarkers();
    }, [selectedCategories]);


    return (<>

        <div className="flex flex-wrap gap-4">
            {array.map((item, id) => (
                <label>
                    <input
                        key={id}
                        type="checkbox"
                        checked={selectedCategories.includes(item)}
                        onChange={() => handleInputChange(item)}
                    />
                    {item}
                </label>
            ))}
        </div>




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
            {markers.map(({ Nom_Activitat, Longitud, Latitud, markerOffset, id }) => (
                <Marker key={id} coordinates={[Longitud, Latitud]}>
                    <circle r={3} fill="#F00" stroke="#fff" strokeWidth={1} />
                    <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                    >
                        {/* {Nom_Activitat} */}
                    </text>
                </Marker>
            ))}
        </ComposableMap>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to='/'>Volver al Home</Link></button>

    </>
    );
};

export default Map;
