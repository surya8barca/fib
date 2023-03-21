
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Sidenav from './layouts/sidenav/sidenav';
import NavBar from "./layouts/navbar/Navbar"

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Sidenav></Sidenav>
    </div>
  );
}

export default App;
