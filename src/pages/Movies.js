import { useSearchParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import { MovieItem } from "components/styles/MovieList.styled";
import { Layout } from "components/Layout";
import { AiOutlineSearch } from 'react-icons/ai';
import { Form, Input, SearchButton } from "components/styles/Search.styled";
import toast, { Toaster } from 'react-hot-toast';


  const Movies = () => {
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

    
const visibleMovies = movies.filter(movie => movie.title.toLowerCase().includes(movieName.toLowerCase()))
  
const handleSubmit = e => {
    e.preventDefault();
  const form = e.currentTarget;
  if (form.elements.movieName.value !== "") {
    setSearchParams({ query: form.elements.movieName.value });
  } else {
    return toast.error('Sorry, the search field is empty 😒')
  };
    form.reset();
  };

  
  return <Layout>
      <Form onSubmit ={handleSubmit}>
      <Input type="text" name="movieName" placeholder="Search movie..."></Input>
      <SearchButton type="submit"><AiOutlineSearch size='17' /></SearchButton>
      </Form>
    <ul>
      {visibleMovies.map(movie => {
        return <MovieItem key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }} style={{ color: "black", textDecoration: "none" }}>{movie.title}</Link>
        </MovieItem>
      })} 
    </ul> 
      <Toaster position="top-right"/>
    </Layout>
}

export default Movies;