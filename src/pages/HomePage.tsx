import React, { useEffect } from "react";
import { useMovies } from "../hooks/useMovies";
import { useDebounce } from "../hooks/useDebounce";
import { MovieCard } from "../components/MovieCard";
import { SearchBar } from "../components/SearchBar";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

const HomePage: React.FC = () => {
    const [query, setQuery] = React.useState("");
    const debouncedQuery = useDebounce(query, 500);
    const { movies, loading, error } = useMovies(debouncedQuery);


    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    return (
        <div className="w-full px-4 py-6 sm:px-6 md:px-8 lg:px-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 px-2">
                    <h1 className="text-4xl sm:text-4xl font-extrabold text-indigo-900 drop-shadow-sm">
                        🎬 Movie Explorer
                    </h1>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                        Search and discover your favorite movies
                    </p>
                </div>

                <div className="mb-6 max-w-lg mx-auto">
                    <SearchBar
                        value={query}
                        onChange={setQuery}
                        placeholder="Search movies..."
                    />
                </div>

                {loading && (
                    <div className="flex justify-center items-center mt-10">
                        <div className="w-32 sm:w-40 md:w-52">
                            <Lottie animationData={loadingAnimation} loop autoplay />
                        </div>
                    </div>
                )}

                {!loading && movies.length > 0 && (
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                )}

                {!loading && movies.length === 0 && (
                    <div className="text-center mt-12 text-gray-500 text-lg">
                        No movies found. Try a different search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
