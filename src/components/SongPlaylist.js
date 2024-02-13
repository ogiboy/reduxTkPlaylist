import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addMusic, removeMusic } from "../redux/songSlice";
import { v4 as uuidv4 } from "uuid";

function SongPlaylist() {
  // Yapılacaklar:
  // Şarkıların listesini al
  const { data } = useSelector((state) => state.song);
  const songPlaylist = data;
  const dispatch = useDispatch();

  const handleSongAdd = () => {
    // Yapılacaklar:
    // Listeye şarkı ekle
    const songName = createRandomSong();
    const randomId = uuidv4();
    dispatch(addMusic({ id: randomId, value: songName }));
  };
  const handleSongRemove = (song) => {
    // Yapılacaklar:
    // Listeden şarkıyı kaldır
    dispatch(removeMusic(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song.id}>
        {song.value}
        <button onClick={() => handleSongRemove(song)} className="button">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle">Şarkı Listesi</h3>
        <div className="buttons">
          <button onClick={() => handleSongAdd()} className="button">
            + Listeye Şarkı Ekle
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
