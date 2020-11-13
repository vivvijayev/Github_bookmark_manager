import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LocalRepos from "./components/LocalRepos";
import SearchRepos from "./components/SearchRepos";
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
function App() {
  return (
       <div className="App">
         <Router>
           <div >
            <Navbar bg="light" expand="lg" className="nav-bar">
                <Navbar.Brand>GitHub Bookmark Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link ><Link to="/" className="nav-links">Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/add-repository" className="nav-links">Add Repository</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
           </div>
            <div className="main-container">
              <Route exact path="/" component={LocalRepos} />
              <Route exact path="/add-repository" component={SearchRepos} />
            </div>
         </Router>
    </div>
  );
}
export default App;