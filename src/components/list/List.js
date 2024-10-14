import React from 'react';
import arr from "../../pages/MainPage";
const List = ({ tasks }) => {
    return (
        <ul>
            {arr.map(task => (
                <li key={task.id}>
                    {task.title} {task.completed ? '(Completed)' : '(Not Completed)'}
                </li>
            ))}
        </ul>
    );
};

export default List;