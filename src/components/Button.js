import React from 'react';
import './Button.css';

function Button( props ) {

    const isOperator = digit => {
        return isNaN(digit) && (digit != '.') && (digit != '=');
      };

    return(
        <div>
            <button
                className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
                onClick={() => props.action(props.children)}
            >
            {props.children}
            </button>
        </div>
    )
}

export default Button;