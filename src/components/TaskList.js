import React from "react";

const TaskList = ({ tasks, removeTask, addCategory, changeTaskDone}) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.text}>
                    <span className={task.completed ? "complete" : null}
                        onClick={() => {changeTaskDone(task)}}>{"|    Task ->      "+task.text} {'|   Category ->    ' + task.category} 
                    </span>
                    {/* <button onClick={() => addCategory(task)}>Add Category To Task</button> */}
                    <button onClick={() => removeTask(task)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
