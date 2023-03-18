import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReviewsContent, ReviewsList, ReviewsTitle } from './styles/Reviews.styled';

const Reviews = () => {
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

    return <div> {reviews.length > 0
        ? <ReviewsList>{reviews.map(review => <li key={review.id}>
        <ReviewsTitle>Author: {review.author}</ReviewsTitle>
        <ReviewsContent>{review.content}</ReviewsContent>
        </li>)}</ReviewsList>
        : (<p>We don't have any reviews for this movie</p>)}
        </div>
}

export default Reviews;