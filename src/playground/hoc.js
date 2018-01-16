// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)};

const widthAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && 'This is private info. Please don\'t share!' }
            <WrappedComponent {...props} />
        </div>
    );
};

// requireAuthentication 
const requireAuthentication = (WrappedComponent) => {
    const isAuthenticated = true;
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view the info</p>
            )}
        </div>
    );
};

const AdminInfo = widthAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This are the detail" />, document.getElementById('react_container'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This are the detail" />, document.getElementById('react_container'));