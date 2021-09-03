import React, { Component } from 'react';

class Home extends Component {

    state = {
        games: []
    }

    getGames = () => {
        // List of all available games as photo links
        // Games list may come from database used for Reservations
        
    }

    displayGames = () => {
        // Display array of state games
    }

    render() {
        return (
            <div className="home">
                HOME
                {/* Call functions here */}
            </div>
        );
    }
}

export default Home;