import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function TaskForm({getTask}) {
    const {register, handleSubmit, reset, formState: {errors}} = useForm()
    const createTask = (data) => {
        axios.post("http://localhost:8000/tasks", data)
        .then(() => {
            getTask()
            reset()
        })
        .catch(err => console.log(err)
        )
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(createTask)}>
                <input type="text" placeholder='Название' {...register("title")}/>
                <input type="text" placeholder='Описание' {...register('discription')}/>
                <div className="priority-selector">
                    <span className="title">Приоритет</span>
                    <input type="radio" id="normal" name="priority" value="normal" {...register("priority")}/>
                    <label htmlFor="normal" className="btn normal">Normal</label>
                    <input type="radio" id="middle" name="priority" value="middle" {...register("priority")}/>
                    <label htmlFor="middle" className="btn middle">Middle</label>
                    <input type="radio" id="high" name="priority" value="high" {...register("priority")}/>
                    <label htmlFor="high" className="btn high">High</label>
                </div>
                <button>Создать задачу</button>
            </form>
        </div>
    )
}
