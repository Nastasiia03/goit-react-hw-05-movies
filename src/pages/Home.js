import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
      async function fetchData() {
      try {
          const url = 'https://api.themoviedb.org/3/trending/movie/day?';
          const key = '6bf6ef2ab5ece9f25b4bdae1dc149130';
          const response = await axios.get(`${url}api_key=${key}`);
        setFilms([...response.data.results]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
    
    }, [])
    

    return <div>
        <h2>Trending today</h2>
        <ul>{films.map(film => (<li key={film.id}><Link to={`movies/${film.id}`}>{ film.title}</Link></li>))}</ul>
    </div>
}