import React from 'react';

const CatchAllPage = async({params}) => {
    console.log(await(params));
    return (
        <div>
            Catch all routes
        </div>
    );
};

export default CatchAllPage;