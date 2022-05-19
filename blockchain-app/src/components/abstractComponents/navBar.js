import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import Home from '../../Composit Components/Home/Home';
// import AddProducts from '../AddProducts/AddProducts';
// import Cart from '../CartComponent/Cart';
// import ProductCard from '../ProductCard/ProductCard';
import RegisterUser from '../compositComponents/registerUser/registerUser';
import Login from '../compositComponents/login/login';
import AdminLogin from '../compositComponents/adminLogin/adminLogin';
import Dashboard from '../compositComponents/admindashboard/admindashboard';
import Playerdashboard from './playerdashboard/Playerdashboard';
export default function Navbar() {
  return <div>
  <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">DAPP</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                      <ul className="navbar-nav" >
                            <li className="nav-item">
                              <Link className="nav-link" aria-current="page" to="/">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Log in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            
                      </ul>
                 </div>
            </div>
      </nav>
       <Switch>
            <Route exact path="/">
                <RegisterUser/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/admin-login">
            <AdminLogin/>
            </Route>
            <Route exact path="/admin-dashboard">
                <Dashboard/>
            </Route>
            <Route exact path="/player-dashboard">
                <Playerdashboard/>
            </Route>
      </Switch>
  </Router>
</div>;
}
