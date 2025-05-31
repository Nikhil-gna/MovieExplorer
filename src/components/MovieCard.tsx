import React, { useState } from "react";
import type { Movie } from "../types/movie";
import { useFavorites } from "../context/FavoritesContext";
import { MoviePopup } from "./MoviePopup";
import toast from "react-hot-toast";
import { Heart, HeartOff } from "lucide-react";

export const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
    const { isFavorite, toggleFavorite } = useFavorites();
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => setShowPopup(true);

    const handleToggleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        const isFav = isFavorite(movie.imdbID);
        toggleFavorite(movie);
        toast.success(
            isFav
                ? `"${movie.Title}" removed from favorites`
                : `"${movie.Title}" added to favorites`
        );
    };

    return (
        <>
            <div
                className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-200 overflow-hidden cursor-pointer"
                onClick={handleClick}
            >
                <div className="relative">
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="w-full h-80 object-cover rounded-t-2xl"
                    />
                    <button
                        onClick={handleToggleFavorite}
                        className={`absolute top-3 right-3 p-2 rounded-full text-white shadow transition ${isFavorite(movie.imdbID)
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-blue-600 hover:bg-blue-700"
                            }`}
                        title={isFavorite(movie.imdbID) ? "Remove from favorites" : "Add to favorites"}
                    >
                        {isFavorite(movie.imdbID) ? <HeartOff size={20} /> : <Heart size={20} />}
                    </button>
                </div>

                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-1" title={movie.Title}>
                        {movie.Title}
                    </h2>

                    <div className="flex items-center gap-2 mt-2 text-sm">
                        <span className="bg-yellow-100 text-yellow-800 font-medium px-2 py-0.5 rounded-full">
                            ⭐ {movie.Rating}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                            {movie.Year}
                        </span>
                    </div>
                </div>
            </div>

            {showPopup && (
                <MoviePopup movie={movie} onClose={() => setShowPopup(false)} />
            )}
        </>
    );
};
