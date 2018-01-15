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
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = widthAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="This are the detail" />, document.getElementById('react_container'));