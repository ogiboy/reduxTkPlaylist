import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { removeAllMovie } from "./redux/movieSlice";
import { removeAllSong } from "./redux/songSlice";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    //
    dispatch(removeAllMovie());
    dispatch(removeAllSong());
  };

  return (
    <div className="container">
      <button onClick={() => handleResetClick()} className="button">
        Listeleri Sil
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
