import React from 'react';
import type { Movie } from '../types/movie';
import { X } from 'lucide-react';

interface Props {
    movie: Movie;
    onClose: () => void;
}

export const MoviePopup: React.FC<Props> = ({ movie, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 w-[90%] max-w-3xl shadow-2xl">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition cursor-pointer"
                    aria-label="Close"
                >
                    <X size={28} />
                </button>

                <div className="flex flex-col md:flex-row gap-6">

                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="w-full md:w-48 h-auto max-h-[360px] object-cover rounded-lg shadow"
                    />


                    <div className="text-gray-800 flex-1">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-1">{movie.Title}</h2>
                        <p className="text-sm text-gray-500 mb-4">{movie.Year}</p>

                        <div className="mb-3 flex flex-wrap gap-3">
                            <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
                                ⭐ Rating: {movie.Rating}
                            </span>
                            {movie.Genres && movie.Genres.length > 0 && (
                                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                                    {movie.Genres.join(', ')}
                                </span>
                            )}
                        </div>

                        <div className="text-sm leading-relaxed">
                            <p className="font-semibold mb-1">Plot:</p>
                            <p className="text-gray-700">{movie.Plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
