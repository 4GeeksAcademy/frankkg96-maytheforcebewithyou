import React, { useContext } from "react";
// 1. Importamos nuestra nube de datos
import { GlobalContext } from "../store";
// 2. Importamos la Tarjeta que acabas de crear
import { ItemCard } from "../components/ItemCard";
export const Home = () => {
    // 3. Extraemos las tres listas de la API
    const { characters, vehicles, planets } = useContext(GlobalContext);
    // CSS en línea para que el contenedor tenga un "scroll" horizontal bonito
    const carouselStyle = {
        gap: "10px",
        overflowX: "auto",
        paddingBottom: "15px"
    };
    return (
        <div className="container mt-5">

            {/* SECCIÓN PERSONAJES */}
            <h2 className="text-danger mb-3">Characters</h2>
            <div className="d-flex" style={carouselStyle}>
				
                {/* Si characters está vacío, mostramos un texto de carga */}
                {characters.length === 0 ? (
                    <p className="text-light">Cargando personajes desde una galaxia muy lejana...</p>
                ) : (
                    characters.map((person) => (
                        <ItemCard key={person.uid} item={person} />
                    ))
                )}
            </div>

            {/* SECCIÓN VEHÍCULOS */}
            <h2 className="text-danger mb-3 mt-4">Vehicles</h2>
            <div className="d-flex" style={carouselStyle}>
                {vehicles.length === 0 ? (
                    <p className="text-light">Cargando vehículos...</p>
                ) : (
                    vehicles.map((vehicle) => (
                        <ItemCard key={vehicle.uid} item={vehicle} />
                    ))
                )}

            </div>
            {/* SECCIÓN PLANETAS */}
            <h2 className="text-danger mb-3 mt-4">Planets</h2>
            <div className="d-flex" style={carouselStyle}>
                {planets.length === 0 ? (
                    <p className="text-light">Cargando planetas...</p>
                ) : (
                    planets.map((planet) => (
                        <ItemCard key={planet.uid} item={planet} />
                    ))
                )}
            </div>
        </div>
    );
};