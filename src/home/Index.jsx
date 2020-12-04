import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Link to="users">Manage People</Link>
        </>
    );
}

export { Home };