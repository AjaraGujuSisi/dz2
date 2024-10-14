// Button.js
import React from 'react';

const Button = ({ handleShow, showTasks }) => {
    return (
        <button onClick={handleShow}>
            {showTasks ? 'ЗАКРЫТЬ' : 'ОТКРЫТЬ'}
        </button>
    );
};

export default Button;
