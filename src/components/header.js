import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1><i className="fas fa-list"></i> Expensify App</h1>
                </Link>
                <button className="button button--link" onClick={startLogout}><i className="fas fa-sign-out-alt"></i> Logout</button>
            </div>
        </div>    
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);