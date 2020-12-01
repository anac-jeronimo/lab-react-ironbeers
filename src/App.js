import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AddBeers from './components/AddBeers';
import ListBeers from './components/ListBeers';
import { Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Navbar />
       <Switch> 
       <Route exact path='/beers' component={ListBeers} />
       <Route exact path='/beers/add' component={AddBeers} />
       <Route exact path='/beers/random' component={RandomBeer} />
       <Route exact path='/beers/:id' component={BeerDetails} />
       </Switch>

    </div>
  );
}

export default App;
