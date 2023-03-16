import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams(); 
    
    useEffect(() => {
        async function fetchReviews(movieId) {
            try {
                const url = 'https://api.themoviedb.org/3/movie/';
                const key = '6bf6ef2ab5ece9f25b4bdae1dc149130';
                const response = await axios.get(`${url}${movieId}/reviews?api_key=${key}`);
                console.log(response.data.results)
                
               setReviews(response.data.results);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchReviews(movieId);
    
    }, [movieId]);

    return <ul>{reviews.map(review => <li key={review.id}>
        <h4>Author: {review.author}</h4>
        <p>{review.content}</p>
    </li>)}
        </ul>
}