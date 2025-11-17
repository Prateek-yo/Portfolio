import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('coffee-finder-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const addToFavorites = (cafe) => {
    const newFavorites = [...favorites, cafe];
    setFavorites(newFavorites);
    localStorage.setItem('coffee-finder-favorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (cafeId) => {
    const newFavorites = favorites.filter(cafe => cafe.id !== cafeId);
    setFavorites(newFavorites);
    localStorage.setItem('coffee-finder-favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (cafeId) => {
    return favorites.some(cafe => cafe.id === cafeId);
  };

  return (
    <FavoritesContext.Provider value={{ 
      favorites, 
      addToFavorites, 
      removeFromFavorites, 
      isFavorite 
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};