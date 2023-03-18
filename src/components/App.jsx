import { lazy, Suspense} from 'react';


import { Routes, Route, Link } from "react-router-dom";
import { Cast } from "./Cast";
import { Item, Nav } from "./styles/Nav.styled";
import { Reviews } from "./Reviews";


const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};
