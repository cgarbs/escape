import React, { Component } from 'react';

class Reservations extends Component {

    state = {
        bookings: []
    }

    // Bookings to be based on list of games in DB
    // Games will include title, photo, description, player limits
    // Pages will also include, alongside the brief summary, reviews, room media and group photos (completed games)

    render() {
        return (
            <div className="reservations">
                Bookeo?
            </div>
        );
    }
}

export default Reservations;

// Create new booking/reservation system?
// MongoDB?
// Or use bookeo?
// Or Xola?
// Do either include comprehensive checkout system?
// Do either have integration into react sites?

// Original application will require:
    // Calendar system which includes all possible reservations as booked or available
    // Live-updated record of all bookings in both front and backend
    // Checkout system with all payment methods usable
    // Business-side portal for employees and management
    // Statistcal details for record-keeping, stats and relevant data

