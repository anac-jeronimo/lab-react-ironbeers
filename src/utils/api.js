import axios from 'axios';

class BeersService {
    constructor() {
        let service = axios.create({
            baseURL: "https://ih-beers-api2-herokuapp.com/beers"
        });
        this.service = service
    }

    getAll() {
        return axios.get('https://ih-beers-api2-herokuapp.com/beers');
    }

    getBeers(id) {
        return axios.get(`https://ih-beers-api2-herokuapp.com/beers/${id}`);
    }

    addBeers(beers) {
        return axios.get('https://ih-beers-api2-herokuapp.com/beers', beers);
    }
}
 export default BeersService;