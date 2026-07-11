import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../store'; 

export const ItemCard = ({ item }) => {

    const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);

    const isFavorite = favorites.some(fav => fav.uid === item.uid && fav.type === item.type);

    let imgCategory = item.type;
    if (imgCategory === 'person') imgCategory = 'characters';

    const imgUrl = `https://dummyimage.com/400x200/282c34/ffffff.png&text=${imgCategory}/${item.uid}.jpg`;

    return (
        <div className="card mx-2 my-3" style={{ minWidth: "18rem", flex: "0 0 auto", backgroundColor: "#1e1e1e", color: "white" }}>
            {/* Solo la imagen de Star Wars, sin reemplazos */}
            <img src={imgUrl} className="card-img-top" alt={item.name} />
            
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="d-flex justify-content-between mt-3">
                    <Link to={`/details/${item.type}/${item.uid}`} className="btn btn-outline-light">
                        Learn more!
                    </Link>
                    <button 
                        className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`}
                        onClick={() => isFavorite ? removeFavorite(item.uid, item.type) : addFavorite(item)}
                    >
                        ♥
                    </button>
                </div>
            </div>
        </div>
    );
};