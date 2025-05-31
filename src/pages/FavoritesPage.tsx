import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { MovieCard } from "../components/MovieCard";

const FavoritesPage: React.FC = () => {
    const { favorites } = useFavorites();

    return (
        <div className="w-full px-4 py-6 sm:px-6 md:px-8 lg:px-10">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-8 px-2">
                    <h1 className="text-3xl sm:text-4xl antialiased md:subpixel-antialiased font-bold text-blue-900">
                        Your Favorite Movies
                    </h1>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                        Here are the movies you've marked as favorites.
                    </p>
                </header>

                {favorites.length === 0 ? (
                    <div className="text-center text-gray-500 text-lg mt-12">
                        You have no favorites yet. Browse movies and add some!
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {favorites.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;
