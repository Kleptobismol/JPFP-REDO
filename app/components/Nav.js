import React from 'react';
import { Link } from 'react-router-dom';

// This component is the Navbar, containing links to our Routes
export default function Nav () {
    return (
        <nav>
            <Link to='/'>
                Home
            </Link>
            <Link to='/campuses'>
                Campuses
            </Link>
            <Link to='/students'>
                Students
            </Link>
        </nav>
    )
}