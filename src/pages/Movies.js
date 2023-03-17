import { useSearchParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';


export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("query") ?? "";
  const location = useLocation();

  useEffect(() => {
    if (movieName === "") return;
  async function fetchFilms(movieName) {
try {
const url = 'https://api.themoviedb.org/3/search/movie?';
const key = '6bf6ef2ab5ece9f25b4bdae1dc149130';
const response = await axios.get(`${url}api_key=${key}&query=${movieName}&language=en-US&page=1&include_adult=false`);
 
  setMovies(response.data.results);
} catch (error) {
console.log(error.message);
}
    }
    fetchFilms(movieName);

}, [movieName])

console.log(movies)
    
const visibleMovies = movies.filter(movie => movie.title.toLowerCase().includes(movieName.toLowerCase()))
  
const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.movieName.value });
    form.reset();
  };

  
  return <div>
      <form onSubmit ={handleSubmit}>
      <input type="text" name="movieName" ></input>
      <button type="submit">Search</button>
      </form>
      <ul>
        {visibleMovies.map(movie => {
          return <li key={movie.id}>
<Link to={`${movie.id}`} state={{from: location}}>{ movie.title}</Link>
          </li>
        })}
      </ul>
      {/* <Toaster position="top-right"/> */}
    </div>
}