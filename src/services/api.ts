import axios from 'axios';
import type { Movie } from '../types/movie';

const api = axios.create({
  baseURL: 'https://imdb8.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY as string,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST as string,
  },
});
const defalutPoster = 'https://drive-in-theatre.netlify.app/movieImages/default-movie.png';

export async function searchMovies(query: string): Promise<Movie[]> {
  const res = await api.get('/auto-complete', { params: { q: query } });
  const results = res.data.d || [];

 
  return results.map((item: any) => ({
    imdbID: item.id.replace('/title/', '').replace('/', ''),
    Title: item.l,
    Year: item.y?.toString() || 'N/A',
    Poster: item.i?.imageUrl || defalutPoster,
  }));
}

export async function fetchTopRatedMovies(): Promise<Movie[]> {
    const res = await api.get('/title/v2/get-popular', {
      params: {
        first: 30,
        country: 'US',
        language: 'en-US',
      },
    });
  
  const edges = res.data?.data?.movies?.edges || [];
  
  
    const movies: Movie[] = edges.map((edge: any) => {
      const node = edge.node;
  
      return {
        imdbID: node.id,
        Title: node.titleText?.text || 'Untitled',
        Year: node.releaseYear?.year?.toString() || 'N/A',
        Poster: node.primaryImage?.url || '/placeholder.jpg',
        Plot: node.plot?.plotText?.plainText || 'No plot available.',
        Rating: node.ratingsSummary?.aggregateRating?.toString() || 'N/A',
        Genres: node.titleGenres?.genres?.map((g: any) => g.genre.text) || [],
      };
    });
  
    return movies;
  }
  