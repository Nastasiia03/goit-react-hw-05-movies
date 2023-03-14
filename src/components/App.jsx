
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";

import { Routes, Route, Link } from "react-router-dom";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";




export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Routes>
    </div>
  );
};
