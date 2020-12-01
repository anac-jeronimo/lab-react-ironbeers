import React from 'react';
import BeersService from "../utils/api";
import { withRouter } from 'react-router-dom';

class AddBeers extends React.Component {
    // sets an empty state, that is all that our character needs, it's iqual to the object (json file)
    state = {
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: '',
        description: '',
        contributed_by: ''
        }

    handleChange = (event) => {
        let  { name, value, type } = event.target;


        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const beerService = new BeersService();
        beerService.addBeers(this.state).then(() => {
            this.props.history.push('/beers');
        });
    }

    render() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <label>Name </label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name}></input>

                <label>Tagline </label>
                <input type="text" name="tagline" onChange={this.handleChange} value={this.state.tagline}></input>

                <label> Description </label>
                <input type="text" name="description" onChange={this.handleChange} value={this.state.description}></input>

                <label>First Brewed </label>
                <input type="text" name="firstBrewed" onChange={this.handleChange} value={this.state.firstBrewed}></input>

                <label>Atennuation level </label>
                <input type="number" name="atennuationLevel" onChange={this.handleChange} value={this.state.atennuationLevel}></input>

                <label>Contributed_by </label>
                <input type="text" name="contributed" onChange={this.handleChange} value={this.state.contributed_by}></input>

                <button> Create </button>
            </form>
        )
    }
}

export default withRouter(AddBeers);