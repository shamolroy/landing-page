import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className="notfound-area">
                <h2>Page Not Found</h2>
                <Link to="/">Go Back</Link>
            </div>
        </div>
    );
};

export default NotFound;