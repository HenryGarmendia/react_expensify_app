import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        ⚠️ 404 Page Not Found... <Link className="link" to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;