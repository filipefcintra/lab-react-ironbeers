import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function Home() {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <Link className="me-2" to={'/beers'}>
          <img src={beers} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <p className="card-text">
            Exciting times call for exciting beer. Whether you're joining us in
            one of our bars or watching at home, make sure you're game ready
            with beer that delivers a great result every time.
          </p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <Link className="me-2" to={'/random-beer'}>
          <img src={randomBeer} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <p className="card-text">
            Exciting times call for exciting beer. Whether you're joining us in
            one of our bars or watching at home, make sure you're game ready
            with beer that delivers a great result every time.
          </p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <Link className="me-2" to={'/new-beer'}>
          <img src={newBeer} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <p className="card-text">
            Exciting times call for exciting beer. Whether you're joining us in
            one of our bars or watching at home, make sure you're game ready
            with beer that delivers a great result every time.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
