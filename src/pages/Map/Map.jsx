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

    const url = "http://localhost:8080/findBusinessByType"

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


        <section className="text-gray-600 body-font lg:px-24 min-h-screen">
            <div className="container px-5 lg:py-12 mx-auto flex flex-wrap">
                <div className="flex flex-col lg:flex-row w-full">
                    <div className="lg:w-2/5 md:pr-10 md:py-24">
                        <div className="h-96 lg:w-3/5 overflow-y-auto">
                            {array.map((item, id) => (<>
                                <label className="flex flex-row gap-4 px-12">
                                    <input
                                        key={id}
                                        type="checkbox"
                                        checked={selectedCategories.includes(item)}
                                        onChange={() => handleInputChange(item)}
                                    />
                                    <h4 className="text-gray-900 font-ligth text-sm"> {item}</h4>
                                </label>
                            </>))}
                        </div>
                    </div>

                    <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-2" >
                        <div className="flex flex-grow flex-col mx-14">
                            <ComposableMap
                                projectionConfig={{
                                    scale: 220000,
                                    center: [2.2, 41.4],
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
                                        <circle r={3} fill="#4F46E5" stroke="#fff" strokeWidth={1} />
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
                        </div>


                    </div>
                </div>
            </div>

            <div className="flex justify-center pt:24 lg:mt-2 lg:mb-12">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <Link to="/">Volver</Link>
                </button>
            </div>
        </section>
    </>
    );
};

export default Map;
