import React, {useState} from 'react';
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = 'All' | 'Active' | 'Completed'

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    taskFilter: (FilterValue: FilterValueType) => void
}

export function Todolist(props: PropsType) {


    const [filter, setFilter] = useState<FilterValueType>('All');

    let taskForTodoList = props.tasks;

    if (filter === 'All') {
        taskForTodoList = taskForTodoList.filter((item: TaskType) => true);
    }

    if(filter === 'Active') {
        taskForTodoList = taskForTodoList.filter((item: TaskType) => item.isDone === false);
    }

    if(filter === 'Completed') {
        taskForTodoList = taskForTodoList.filter((item: TaskType) => item.isDone === true);
    }


    const taskFilter = (value: FilterValueType) => {
        setFilter(value);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((item: TaskType) => {
                return (
                    <li key={item.id}>
                        <button onClick={() => {props.removeTask(item.id)}}>x</button>
                        <input type="checkbox" checked={item.isDone}/>
                        <span>{item.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={() => props.taskFilter('All')}>All</button>
            <button onClick={() => props.taskFilter('Active')}>Active</button>
            <button onClick={() => props.taskFilter('Completed')}>Completed</button>
        </div>
    </div>
}
