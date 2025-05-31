import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import { searchMovies, fetchTopRatedMovies } from "../services/api";


export function useMovies(query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadFromCache = (key: string): Movie[] | null => {
    if (typeof window === "undefined") return null;
    try {
      const cached = localStorage.getItem(key);
      if (!cached) return null;
      return JSON.parse(cached) as Movie[];
    } catch {
      return null;
    }
  };

  const saveToCache = (key: string, data: Movie[]) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {}
  };

  useEffect(() => {
    let cancelled = false;

    const fetch = async () => {
      setLoading(true);
      setError(null);

      const cacheKey = query.trim() ? `search_${query.trim()}` : "top_rated";

      const cachedData = loadFromCache(cacheKey);
      if (cachedData) {
        setMovies(cachedData);
        setLoading(false);
        return;
      }

      try {
        const results = query.trim()
          ? await searchMovies(query)
          : await fetchTopRatedMovies();

        if (!cancelled) {
          setMovies(results);
          saveToCache(cacheKey, results); 
        }
      } catch (e) {
        console.error("Movie fetch error:", e);
        if (!cancelled) setError("Failed to fetch movies.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetch();

    return () => {
      cancelled = true;
    };
  }, [query]);

  return { movies, loading, error };
}
