import React from 'react';

var Task = (props) => {
    return (<div className = 'task' isDone = {props.isDone} onClick = {(e) => props.markAsDone(e,props.list)}> {props.list.label}</div>);
};
export default Task;