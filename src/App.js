import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import Navigation from './Components/Navigation/Navigation';
import {moviesData} from './Data'
import AddMovie from './Components/AddMovie/AddMovie';
import Details from './Components/Details/Details';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [inputStars, setInputStars] = useState(0);

  const Add= (newmovie) =>{
    setMovies([...movies, newmovie])
  }
  return (
    <div className="App">
      <Navigation inputSearch={inputSearch} setInputSearch={setInputSearch} setInputStars={setInputStars}/>
      <AddMovie Add={Add}/>
      <Routes>
        <Route path='/movies' element={movies &&<MovieList movies={movies}
              inputSearch={inputSearch}
              selectedRate={inputStars} />} />
        <Route path='/movie/:id' element={<Details/>}  />    
    </Routes>
    </div>
  );
}
export default App 
