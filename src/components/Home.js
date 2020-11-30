import React from 'react';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <nav>
            <ul>
                <li><Link activeStyle={{color: "orange"}} exact to="/beers">All beers</Link></li>
                <li><Link activeStyle={{color: "orange"}} exact to="/randombeer">Random Beer</Link></li>
                <li><Link activeStyle={{color: "orange"}} exact to="/newbeer">New Beer</Link></li>
            </ul>
        </nav>
    )
}

export default Home;