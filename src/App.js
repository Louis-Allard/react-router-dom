import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Menu from "./Components/menu"
import PageA from "./Components/pagea"
import PageB from "./Components/pageb"
import PageC from "./Components/pagec"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Menu} />
        <Route path="/page1" Component={PageA} />
        <Route path="/page2" Component={PageB} />
        <Route path="/page3" Component={PageC} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
