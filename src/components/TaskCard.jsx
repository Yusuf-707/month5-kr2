import React from 'react'

export default function TaskCard({tasks}) {

  return (
    <div>
        <div>
            <h1>Список задач</h1>
            <select name="status" id="status" >
                <option value="">Все</option>
                <option value="">Активные</option>
                <option value="">Выполненные</option>
            </select>
            <div className="cards">
                {tasks.map((task, index) => (
                    <div key={index}>
                        <p className="priority">№{task.id}{task.priority}</p>
                        <p className="title">{task.title}</p>
                        <p className="discription">{task.discription}</p>
                        <div className="buttons">
                            <button className="open">Открыть</button>
                            <button className="delete">Удалить</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
