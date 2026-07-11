import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const Single = () => {
    
    const { type, uid } = useParams();
    const [details, setDetails] = useState(null);

    
    let endpointType = type;
    if (type === "person") endpointType = "people";
    else if (type === "vehicle") endpointType = "vehicles";
    else if (type === "planet") endpointType = "planets";

   
    useEffect(() => {

        const fetchDetails = async () => {
            try {
                const res = await fetch(`https://www.swapi.tech/api/${endpointType}/${uid}`);
                const data = await res.json();
                
                setDetails(data.result.properties); 
            } catch (error) {
                console.error("Error fetching details:", error);
            }
        };

        fetchDetails();
    }, [type, uid]);
   
    if (!details) return <div className="text-center mt-5 text-light"><h3>Cargando holocrones de la base de datos...</h3></div>;
  

    const formattedName = details.name.split(" ").join("+");
    const imgUrl = `https://dummyimage.com/800x600/282c34/ffffff.png&text=${formattedName}`;
    return (
        <div className="container mt-5 text-light">
            <div className="row">
                {/* Izquierda: Imagen Gigante */}
                <div className="col-md-6">
                    <img src={imgUrl} className="img-fluid rounded border border-secondary" alt={details.name} />
                </div>
                
                {/* Derecha: Título y descripción */}
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-4 text-warning fw-bold">{details.name}</h1>
                    <p className="lead mt-3 text-secondary">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    </p>
                    <div className="mt-4">
                        <Link to="/" className="btn btn-outline-warning btn-lg">Back to Home</Link>
                    </div>
                </div>
            </div>
            {/* Separador de luz neón roja */}
            <hr className="text-danger my-5" style={{ height: "4px", opacity: "1" }} />
            {/* Parte Inferior: Características (Renderizado Condicional) */}
            <div className="row text-center text-danger fw-bold">
                {type === "person" && (
                    <>
                        <div className="col-2"><h5>Birth Year</h5><p className="text-light fw-normal">{details.birth_year}</p></div>
                        <div className="col-2"><h5>Gender</h5><p className="text-light fw-normal">{details.gender}</p></div>
                        <div className="col-2"><h5>Height</h5><p className="text-light fw-normal">{details.height}</p></div>
                        <div className="col-2"><h5>Skin Color</h5><p className="text-light fw-normal">{details.skin_color}</p></div>
                        <div className="col-2"><h5>Eye Color</h5><p className="text-light fw-normal">{details.eye_color}</p></div>
                        <div className="col-2"><h5>Hair Color</h5><p className="text-light fw-normal">{details.hair_color}</p></div>
                    </>
                )}
                
                {type === "planet" && (
                    <>
                        <div className="col-2"><h5>Climate</h5><p className="text-light fw-normal">{details.climate}</p></div>
                        <div className="col-2"><h5>Population</h5><p className="text-light fw-normal">{details.population}</p></div>
                        <div className="col-2"><h5>Terrain</h5><p className="text-light fw-normal">{details.terrain}</p></div>
                        <div className="col-2"><h5>Diameter</h5><p className="text-light fw-normal">{details.diameter}</p></div>
                        <div className="col-2"><h5>Gravity</h5><p className="text-light fw-normal">{details.gravity}</p></div>
                        <div className="col-2"><h5>Orbital P.</h5><p className="text-light fw-normal">{details.orbital_period}</p></div>
                    </>
                )}
                {type === "vehicle" && (
                    <>
                        <div className="col-2"><h5>Model</h5><p className="text-light fw-normal">{details.model}</p></div>
                        <div className="col-2"><h5>Class</h5><p className="text-light fw-normal">{details.vehicle_class}</p></div>
                        <div className="col-2"><h5>Passengers</h5><p className="text-light fw-normal">{details.passengers}</p></div>
                        <div className="col-2"><h5>Length</h5><p className="text-light fw-normal">{details.length}</p></div>
                        <div className="col-2"><h5>Crew</h5><p className="text-light fw-normal">{details.crew}</p></div>
                        <div className="col-2"><h5>Max Speed</h5><p className="text-light fw-normal">{details.max_atmosphering_speed}</p></div>
                    </>
                )}
            </div>
        </div>
    );
};
