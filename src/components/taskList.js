import Task from "./task";
import React from 'react';

var TaskList = (props) => {
    var taskComponent = [];
    for (let i = 0; i < props.list.length; i++) {
        taskComponent.push(<Task key = {i.toString()} list = {props.list[i]} markAsDone = {props.markAsDone}/>);
    }
    return (
        <div>
           {taskComponent}
        </div>
    )        
    
   
};

export default TaskList;