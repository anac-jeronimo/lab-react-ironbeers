import React from 'react';
import BeersService from "../utils/api";
import queryString from 'query-string';

class BeerDetail extends React.Component {
    state = {
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: '',
        description: '',
        contributed_by: ''
    };

    componentDidMount() {
        const beerService = new BeersService();
        const values = queryString.parse(this.props.location.search)
        const id = this.props.match.params.id;
        beerService.getBeers(id)
        .then((response) => {
            this.setState({
                name: response.data.name,
                tagline: response.data.tagline,
                first_brewed: response.data.first_brewed,
                attenuation_level: response.data.attenuation_level,
                description: response.data.description,
                contributed_by: response.data.contributed_by
            })
        });
    }

    render() {
        return (
            <div>
                <h2> {this.state.name} </h2>
                <h3> Tagline: {this.state.tagline} </h3>
                <h4> First Brewed: {this.state.first_brewed} </h4>
                <h3> Attenuation Level: {this.state.attenuation_level} </h3>
                <p> Description: {this.state.description} </p>
                <p> Contibuted by: {this.state.contributed_by} </p>
            </div>
        );
    }
}

export default BeerDetail;