import React, { Component } from 'react';

//Description of all rooms plus link to reservations.
//Minimum of 6-8 rooms + descriptions.

class Rooms extends Component {

    state = {
        games: []
    }

    getGames = () => {
        // List of all available games as photo links
        // Games list may come from database used for Reservations
        
    }

    displayGames = () => {
        // Display array of in state
        // Include photo, description and link to reservations
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Rooms;