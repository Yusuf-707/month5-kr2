import React, { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskCard from '../components/TaskCard'
import axios from 'axios'

export default function HomePage() {
    const [task, setTask] = useState([])

    const getTask = () => {
        axios.get("http://localhost:8000/tasks")
            .then(({ data }) => setTask(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getTask()
    }, [])
    return (
        <div>
            <TaskForm getTask={getTask} />
            <TaskCard tasks={task} />
        </div>
    )
}
