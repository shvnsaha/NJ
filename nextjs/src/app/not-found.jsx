import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <h1>400 Not Found</h1>
            <Link href={"/"}>Go Back Home</Link>
        </div>
    );
};

export default NotFoundPage;