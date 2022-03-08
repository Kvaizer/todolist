import React, {useState} from 'react';
import './App.css';
import {FilterValueType, TaskType, Todolist} from './Todolist';

function App() {

    const [tasks1, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}
    ])
    // let taskForTodoList = tasks1;
    //
    // if (filter === 'All') {
    //     taskForTodoList = taskForTodoList.filter((item: TaskType) => true);
    //     }
    //
    // if(filter === 'Active') {
    //     taskForTodoList = taskForTodoList.filter((item: TaskType) => item.isDone === false);
    // }
    //
    // if(filter === 'Completed') {
    //     taskForTodoList = taskForTodoList.filter((item: TaskType) => item.isDone === true);
    // }



    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={taskForTodoList}
                removeTask={removeTask}
                taskFilter={taskFilter}/>
        </div>
    );
}

export default App;
