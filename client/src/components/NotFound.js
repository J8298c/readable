import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ location }) => (
    <div>
        <h1>Sorry Not Found click <Link to='/'>Here</Link> to go home</h1>
    </div>
)

export default NotFound;