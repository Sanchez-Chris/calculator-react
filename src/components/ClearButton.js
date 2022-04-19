import React from 'react';
import './ClearButton.css';

function ClearButton({action}) {

    return(
        <div>
            <button
                className='clear-button'
                onClick={action}
            >
            clear
            </button>
        </div>
    )
}

export default ClearButton;