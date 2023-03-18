import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import { Layout } from 'components/Layout';
import { GoBackButton, InfoButtons, InfoDiv, Movie, MovieTitle, Poster } from 'components/styles/MovieDetails.styled';


const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const { movieId } = useParams(); 
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? "/")

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
  
    
    return <Layout>
        <GoBackButton type="button"><Link to={backLinkRef.current} style={{ color: "white", textDecoration: "none"}}>Go back</Link></GoBackButton>
        <Movie>
            <div>
        {poster_path
            ? <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width="350" />
                    : <Poster src="https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d" alt="" width="350" />}
            </div>
            <div>
        <MovieTitle>{title}</MovieTitle>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres && <ul>{genres.map(genre => (<li key={genre.id}>{genre.name}</li>))}</ul>}
            </div>
        </Movie>
        <InfoDiv>
        <InfoButtons><Link to="cast" style={{ color: "white", textDecoration: "none"}}>Cast</Link></InfoButtons>
        <InfoButtons><Link to="reviews" style={{ color: "white", textDecoration: "none"}}>Reviews</Link></InfoButtons>
        </InfoDiv>
        <Outlet />
            
    </Layout>
}

export default MovieDetails;