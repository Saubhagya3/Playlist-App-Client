import './App.css';
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Playlists from "./components/Playlists";
import Videos from "./components/Videos";

function App() {
  return (
    <HashRouter>
      <div>
          <h1>Video Playlist Manager</h1>
          <ul className="header">
            <li><NavLink exact to="/">Videos</NavLink></li>
            <li><NavLink to="/playlists">Playlists</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" exact element={<Videos />}/>
              <Route path="/playlists" element={<Playlists />}/>
            </Routes>
          </div>
        </div>
    </HashRouter>
  );
}

export default App;
