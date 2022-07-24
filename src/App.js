
import Homepage from "./pages/Homepage";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import ParisPage from "./pages/Paris.js"
import MilanPage from "./pages/Milan.js"




import './App.css';

function App() {
  return (
      <div className="App">
          <NavBar />
          <Routes>
              <Route path="/" element={ <Homepage/> } />
              <Route path="/paris" element={ <ParisPage/> } />
              <Route path="/milan" element={ <MilanPage/> } />
          </Routes>
      </div>
  );
}

export default App;
