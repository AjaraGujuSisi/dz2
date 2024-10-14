import React from 'react';
import Button from '../button/Button';

const Modal = ({ handleShow, handleChange, handleAdd, handleEdit, inputValue }) => {
    return (
        <div>
            <h2>{inputValue ? 'Edit Task' : 'Add Task'}</h2>
            <input type="text" value={inputValue} onChange={handleChange} />
            <div>
                <Button title="Save" action={inputValue ? handleEdit : handleAdd} />

                <Button title="Cancel" action={handleShow} /> {/* Закрытие модалки без сохранения */}
            </div>
        </div>
    );
};

export default Modal;
