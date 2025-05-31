import React, { createContext, useContext, useEffect, useState } from "react";
import type { Movie } from "../types/movie";

interface FavoritesContextProps {
    favorites: Movie[];
    toggleFavorite: (movie: Movie) => void;
    isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Movie[]>(() => {
        if (typeof window === "undefined") return [];
        try {
            const stored = localStorage.getItem("favorites");
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) return parsed;
            }
        } catch {
            localStorage.removeItem("favorites");
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (movie: Movie) => {
        setFavorites((prev) =>
            prev.some((m) => m.imdbID === movie.imdbID)
                ? prev.filter((m) => m.imdbID !== movie.imdbID)
                : [...prev, movie]
        );
    };

    const isFavorite = (id: string) => favorites.some((m) => m.imdbID === id);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error("useFavorites must be used within a FavoritesProvider");
    return context;
}
