import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../store";

export const Navbar = () => {
    // 2. Extraemos el array de favoritos y la función para borrarlos
    const { favorites, removeFavorite } = useContext(GlobalContext);
	
    return (
        <nav className="navbar navbar-dark bg-dark mb-3 px-4">

            {/* Logo a la izquierda que nos lleva al Home */}
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/100px-Star_Wars_Logo.svg.png" 
                        alt="Star Wars" 
                        height="35" 
                    />
                </span>
            </Link>
            
            <div className="ml-auto">

                {/* Menú Desplegable (Dropdown) de Bootstrap */}
                <div className="dropdown">
                    <button 
                        className="btn btn-warning dropdown-toggle fw-bold" 
                        type="button" 
                        id="favoritesDropdown" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        Favorites 
                        {/* El número de favoritos se actualiza solo */}
                        <span className="badge bg-secondary ms-2">{favorites.length}</span>
                    </button>
                    
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown" style={{ minWidth: "250px" }}>
                        {/* Si no hay favoritos, mostramos (Empty) */}
                        {favorites.length === 0 ? (
                            <li className="dropdown-item text-center text-muted">(Empty)</li>
                        ) : (

                            // Si hay favoritos, hacemos un map para listarlos
                            favorites.map((fav, index) => (
                                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
									
                                    {/* Link para ir a ver el detalle del favorito */}
                                    <Link to={`/details/${fav.type}/${fav.uid}`} className="text-decoration-none text-dark me-3">
                                        {fav.name}
                                    </Link>
                                    
                                    {/* Botón para eliminarlo */}
                                    <button 
                                        className="btn btn-sm btn-danger" 
                                        onClick={(e) => {
                                            e.stopPropagation(); // Evita que el menú se cierre al hacer clic
                                            removeFavorite(fav.uid, fav.type);
                                        }}
                                        title="Eliminar de favoritos"
                                    >
                                        🗑️
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};