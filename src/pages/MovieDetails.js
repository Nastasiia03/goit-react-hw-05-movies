import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";


export const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const { movieId } = useParams(); 

    useEffect(() => {
        async function fetchData(movieId) {
            try {
                const url = 'https://api.themoviedb.org/3/movie/';
                const key = '6bf6ef2ab5ece9f25b4bdae1dc149130';
                const response = await axios.get(`${url}${movieId}?api_key=${key}`);
                console.log(response.data)
                
               setMovie(response.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData(movieId);
    
    }, [movieId]);

    
    const { poster_path, title, overview, genres} = movie; 
    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    // const genres = movie.genres; 
    return <div>
        <img src={poster} alt={title} width="350"/>
        <h2>{title}</h2>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres && <ul>{genres.map(genre => (<li key={genre.id}>{genre.name}</li>))}</ul>}
        <ul>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
        </ul>
        <Outlet/>
    </div>
}