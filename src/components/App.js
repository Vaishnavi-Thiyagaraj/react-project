import React from 'react';
import TaskList from './taskList';

var exTaskListArray = [{set : false,label : 'first task'},{set : false,label : 'second task'},{set : false,label : 'third task'}];
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskListArray : exTaskListArray,
            doneCount : 0
        };
        this.markTaskAsDone = this.markTaskAsDone.bind(this);
    }
    markTaskAsDone(e,list) {
        $(e.target).toggleClass('task-done');
        list.set = !list.set;
        this.setState((prevState,) => {
            var count = prevState.taskListArray.reduce((acc, cv) => {
                return (cv.set) ? acc+1 : acc;       
            }, 0);
            return {doneCount : count}
        });    
    }
    addTask() {
        this.setState((prevState) => {
            var obj = {
                set : false,
                label : `${prevState.taskListArray.length} task`
            };
            var arr = prevState.taskListArray.slice();
            arr.push(obj);
            return { taskListArray : arr};
        });
    }
    render() {
        return (
            <div>
                <div className = 'count'>Task Done: {this.state.doneCount} </div>
                <TaskList list = {this.state.taskListArray} markAsDone = {this.markTaskAsDone}/>
                <button onClick = {this.addTask.bind(this)}>Add Task</button>
            </div>
        );
    }

};
export default App;