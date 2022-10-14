import "./App.css";
import Player from "./components/player/player";
import music from "./assets/music.mp3";
import album from "./assets/album.png";

function App() {
  return (
    <div className="App">
      <Player
        source={music}
        meta={{
          name: "Music Test",
          artist: "Mini Vandals",
          image: album,
        }}
      />
    </div>
  );
}

export default App;
