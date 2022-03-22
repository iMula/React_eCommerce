import logo from "./logo.svg";
import "./App.css";
import Home from "./components/index";
import Profile from "./components/profile";
import Nav from "./components/nav";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
          <Route path="/home" element={<Profile />}></Route>
          <Route path="products" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;