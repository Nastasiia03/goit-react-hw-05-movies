import axios from 'axios';
import { Layout } from 'components/Layout';
import { MovieItem } from 'components/styles/MovieList.styled';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";


const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation(); 

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
    

    return <Layout>
        <h2>Trending today 📽️</h2>
        <ul>{films.map(film => (<MovieItem key={film.id}><Link to={`movies/${film.id}`} state={{from: location}} style={{ color: "black", textDecoration: "none"}}>{ film.title}</Link></MovieItem>))}</ul>
    </Layout>
}

export default Home;