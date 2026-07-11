import React, { createContext, useState, useEffect } from 'react';
// Crear el contexto

export const GlobalContext = createContext();
// Crear el Proveedor

export const GlobalProvider = ({ children }) => {

    const [characters, setCharacters] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [favorites, setFavorites] = useState([]);
	
    const addFavorite = (item) => {

        const isDuplicate = favorites.some(fav => fav.uid === item.uid && fav.type === item.type);
        if (!isDuplicate) {
            setFavorites([...favorites, item]);
        }
    };
    const removeFavorite = (uid, type) => {
        setFavorites(favorites.filter(fav => !(fav.uid === uid && fav.type === type)));
    };
    const fetchCharacters = async () => {
        try {
            const res = await fetch("https://www.swapi.tech/api/people");
            const data = await res.json();
            const charsWithType = data.results.map(item => ({ ...item, type: "person" }));
            setCharacters(charsWithType);
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
    };
    const fetchVehicles = async () => {
        try {
            const res = await fetch("https://www.swapi.tech/api/vehicles");
            const data = await res.json();
            const vehiclesWithType = data.results.map(item => ({ ...item, type: "vehicle" }));
            setVehicles(vehiclesWithType);
        } catch (error) {
            console.error("Error fetching vehicles:", error);
        }
    };
    const fetchPlanets = async () => {
        try {
            const res = await fetch("https://www.swapi.tech/api/planets");
            const data = await res.json();
            const planetsWithType = data.results.map(item => ({ ...item, type: "planet" }));
            setPlanets(planetsWithType);
        } catch (error) {
            console.error("Error fetching planets:", error);
        }
    };
    useEffect(() => {
        fetchCharacters();
        fetchVehicles();
        fetchPlanets();
    }, []);
    return (
        <GlobalContext.Provider value={{ characters, vehicles, planets, favorites, addFavorite, removeFavorite }}>
            {children}
        </GlobalContext.Provider>
    );
};