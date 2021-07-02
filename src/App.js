import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Beers from './Components/Beers';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import Home from './Components/Home';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
