import React from 'react';
import './Display.css';

function Display({output}) {

    return (
        <div>
            <p  className='display'>{output}</p>
        </div>
    )
}

export default Display;