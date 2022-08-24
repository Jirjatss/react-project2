import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import RouteDynamic from "./pages/DynamicRoute/DynamicRoute";

function App() {
  return (
    <>
      <form>
        <h1>Daftar Artis Fav</h1>
        <button>
          <Link to="/DynamicRoute/Angelina-Jolie"> Angelina Jolie</Link>
        </button>
        <button>
          <Link to="/DynamicRoute/Brad-Pitt">Brad Pitt</Link>
        </button>
        <button>
          <Link to="/DynamicRoute/Melody-Laksani">Melody Laksani</Link>
        </button>
        <button>
          <Link to="/DynamicRoute/Cristiano-Messi">Cristiano Messi</Link>
        </button>
        <button>
          <Link to="/DynamicRoute/Ariel-Noah">Ariel Noah</Link>
        </button>
        <button>
          <Link to="/DynamicRoute/Reka_Alamsyah">Reka Alamsyah</Link>
        </button>
        <button>
          <Link to="/DynamicRoute/Joe-Salim">Joe Salim</Link>
        </button>
        <button>
          <Link to="/DynamicRoute/Sule">Sule</Link>
        </button>
        <button>
          <Link to="/DynamicRoute/Vincent-Rompies">Vincent Rompies</Link>
        </button>
        <button>
          <Link to="/DynamicRoute/Muhammad-Haikal">Muhammad Haikal</Link>
        </button>
      </form>
      <Routes>
        <Route path="/DynamicRoute/:nama_artis" element={<RouteDynamic />} />
      </Routes>
    </>
  );
}

export default App;
