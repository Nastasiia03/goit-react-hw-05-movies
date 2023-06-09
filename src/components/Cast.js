import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActorItem, ActorsList, Character } from './styles/Cast.styled';

const Cast = () => {
    const [actors, setActors] = useState([]);
    const { movieId } = useParams(); 

    useEffect(() => {
        async function fetchData(movieId) {
            try {
                const url = 'https://api.themoviedb.org/3/movie/';
                const key = '6bf6ef2ab5ece9f25b4bdae1dc149130';
                const response = await axios.get(`${url}${movieId}/credits?api_key=${key}`);
                
               setActors(response.data.cast);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData(movieId);
    
    }, [movieId]);

    
    return <ActorsList>{actors.map(actor => <ActorItem key={actor.cast_id}>
        {actor.profile_path
            ? <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt="" />
            : <img src="http://tinleychamber.org/wp-content/uploads/2019/01/no-image-available.png" alt="" width="200" height="300"/>}
        <h4>{actor.name}</h4>
        <Character>Character: {actor.character}</Character></ActorItem>)}</ActorsList>
}

export default Cast; 