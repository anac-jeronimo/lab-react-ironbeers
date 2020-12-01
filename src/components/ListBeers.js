import React from "react";
import BeersService from "../utils/api";
import { Link } from 'react-router-dom';
 
 
class ListBeers extends React.Component {
    state = {
        beers: []
    }

    componentDidMount() {
        const beersService = new BeersService();
        beersService.getAll()
        .then((response) => {
            console.log(response); 
            this.setState({
                beers: response.data
            });
        });
    }

    render() {
        return(
            <div>
              {this.state.beers.map((beer, index) => {
                return (
                    <div key={index}>
                    <Link to={`/beers/${beer.id}`} >{beer.name}</Link>
                    </div>
                )
              } )}
              </div>
        )
    }
}


export default ListBeers;