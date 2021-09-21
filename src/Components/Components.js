import React from 'react';

const Components = (props) => {
    return (
        <div>
            <h1>Country Name:{props.name}</h1>
            <p>Country Capital:{props.cap }</p>
        </div>
    );
};

export default Components;