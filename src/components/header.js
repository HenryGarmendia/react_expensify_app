import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>    
        <h1>Expensify Web-App</h1>
        <NavLink activeClassName="is_active link" exact={true} to="/">Dashboard</NavLink>
        <NavLink activeClassName="is_active link" to="/create">Create Expense</NavLink>
    </header>
);

export default Header;