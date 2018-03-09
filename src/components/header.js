import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>    
        <h1>Expensify Web-App</h1>
        <NavLink activeClassName="is_active link" exact={true} to="/">Dashboard</NavLink>
        <NavLink activeClassName="is_active link" to="/create">Create Expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);