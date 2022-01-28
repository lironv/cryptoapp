import React from "react";
import  ReactDOM  from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { Switch,Route,Link } from 'react-router-dom';


import App from './App';
import store from './App/store';
import 'antd/dist/antd.css';



ReactDOM.render(
    <Router>
         <Provider store = {store}>
         <ul>
          <li>
            <Link to="/">Cryptocurrencies</Link>
          </li>
          <li>
            <Link to="/exchanges">Exchanges</Link>
          </li>
          <li>
            <Link to="/cryptocurrencies">Homepage</Link>
          </li>
        </ul>
             <div>
         <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/exchanges">
            <Exchanges />
          </Route>
          <Route path="/cryptocurrencies">
            <Cryptocurrencies />
          </Route>
        </Switch>
        </div>
        <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);

function Homepage (){
return () =>{
    <div></div>
}
};
function Exchanges (){
    return () =>{
        <div></div>
    }
    };

    
    function Cryptocurrencies (){
        return () =>{
            <div></div>
        }
        };
        