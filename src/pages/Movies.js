import { useSearchParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';


export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("query") ?? "";

  useEffect(() => {
    if (movieName === "") return;
  async function fetchFilms(movieName) {
try {
const url = 'https://api.themoviedb.org/3/search/movie?';
const key = '6bf6ef2ab5ece9f25b4bdae1dc149130';
const response = await axios.get(`${url}api_key=${key}&query=${movieName}&language=en-US&page=1&include_adult=false`);
  // console.log(response.data.results)
  setMovies(response.data.results);
} catch (error) {
console.log(error.message);
}
    }
    fetchFilms(movieName);

}, [movieName])

console.log(movies)
    
const visibleMovies = movies.filter(movie => movie.title.toLowerCase().includes(movieName.toLowerCase()))
  
  // const updateQueryString = (query) => {
  //   const nextParams = query !== "" ? { query } : {};
  //   setSearchParams(nextParams);
  // };
 
  const updateQueryString = evt => {
    const movieValue = evt.target.value;
    if (movieValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: movieValue });
  };

  
    return <div>
      <input type="text" value={movieName} onChange={updateQueryString}></input>
      <button type="submit">Search</button>
      <ul>
        {visibleMovies.map(movie => {
          return <li key={movie.id}>
<Link to={`${movie.id}`}>{ movie.title}</Link>
          </li>
        })}
      </ul>
      {/* <Toaster position="top-right"/> */}
    </div>
}