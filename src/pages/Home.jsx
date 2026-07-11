import React, { useContext } from "react";
import { GlobalContext } from "../store";
import { ItemCard } from "../components/ItemCard";
export const Home = () => {
    
    const { characters, vehicles, planets } = useContext(GlobalContext);
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