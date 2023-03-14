import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export const Movies = () => {
  const [cards, setCards] = useState([]);
  // const [page, setPage] = useState(1);
  const [textSearch, setTextSearch] = useState("");

  // const [error, setError] = useState("");


  useEffect(() => {
    if (textSearch !== "") {
      async function fetchFilms(textSearch) {
        try {
          const url = 'https://api.themoviedb.org/3/search/movie?';
          const key = '6bf6ef2ab5ece9f25b4bdae1dc149130';
          const response = await axios.get(`${url}api_key=${key}&query=${textSearch}`);
          setCards([...response.data.results]);
          console.log(response.data.results)
        } catch (error) {
          console.log(error.message);
        }
      }
      fetchFilms();
    }
  }, [textSearch])

  const handleChange = (event) => {
    setTextSearch(event.target.value) 
    
  }

  const handleSubmit = (e, textSearch) => {
    e.preventDefault()
    if (!textSearch) {
      return toast.error('Sorry, the search field is empty 😒')
    }
    setTextSearch(textSearch);
    setCards([]);
  }
  
    return <div>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" value={textSearch} onChange={handleChange}></input>
        <button type="submit"></button>
        <ul>{cards.map(card => (<li key={card.id}><p>{ card.original_title}</p></li>))}</ul>
      </form>
      <Toaster position="top-right"/>
    </div>
}