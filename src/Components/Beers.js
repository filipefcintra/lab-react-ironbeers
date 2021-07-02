import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class Beers extends Component {
  state = {
    beers: [],
    name: '',
    image_url: '',
    contributed_by: '',
    tagline: '',
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      console.log(response);

      this.setState({ beers: [...response.data] });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        {this.state.beers.map((beer) => {
          return (
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    width="30px"
                    src={beer.image_url}
                    className="img-fluid rounded-start"
                  />
                  <h5 className="card-title">{beer.name}</h5>
                  <p className="card-text">{beer.tagline}</p>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">
                        <small className="text-muted">
                          {beer.contributed_by}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
