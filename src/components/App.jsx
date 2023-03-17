
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";

import { Routes, Route, Link } from "react-router-dom";
import { Cast } from "./Cast";
import { Item, Nav } from "./Nav.styled";
import { Reviews } from "./Reviews";




export const App = () => {
  return (
    <div>
      <nav>
        <Nav>
          <Item><Link to="/" style={{ color: "white", textDecoration: "none"}}>Home</Link></Item>
        <Item><Link to="/movies" style={{ color: "white", textDecoration: "none" }}>Movies</Link></Item>
          </Nav>
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
