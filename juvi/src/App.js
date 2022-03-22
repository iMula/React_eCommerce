import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import Products from "./products";
import Contact from "./contact";
import Nav from "./components/navBar";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
 

    <Router>
       <Nav />
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;