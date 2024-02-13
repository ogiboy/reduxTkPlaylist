import { useSelector, useDispatch } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovie, removeMovie } from "../redux/movieSlice";
import { v4 as uuidv4 } from "uuid";

function MoviePlaylist() {
  // Yapılacaklar:
  // Filmlerin listesini al
  const { data } = useSelector((state) => state.movie);
  const moviePlaylist = data;
  const dispatch = useDispatch();

  const handleMovieAdd = () => {
    // Yapılacaklar:
    // Listeye film ekle
    const movieName = createRandomMovie();
    const randomId = uuidv4();
    dispatch(addMovie({ id: randomId, value: movieName }));
  };
  const handleMovieRemove = (movie) => {
    // Yapılacaklar:
    // Listeden şarkıyı kaldır
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie.id}>
        {movie.value}
        <button onClick={() => handleMovieRemove(movie)} className="button">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle">Film Listesi</h3>
        <div className="buttons">
          <button onClick={() => handleMovieAdd()} className="button">
            + Listeye Film Ekle
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
