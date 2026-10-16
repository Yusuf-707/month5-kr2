import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskCard({ tasks }) {
    const navigate = useNavigate()

  const [filter, setFiltered] = useState(null);

  const taskFilter = (e) => {
    const element = e.target.value;
    if (element == "") {
      setFiltered(null);
      return;
    }

    const filteredItem = tasks.filter((task) => task.priority == element);
    if (filteredItem) {
      setFiltered(filteredItem);
    }
  };
  const displayedTasks = filter ?? tasks;

  const deleteCard = (id) => {
    axios.delete(`http://localhost:8000/tasks/${id}`)
    .then(() => taskFilter())
    .catch(err => console.log(err))
  }
  return (
    <div className="taskCard">
      <div className="taskCard-header">
        <h1 className="taskCard-header-text">Список задач</h1>
        <select
          name="status"
          id="status"
          onChange={taskFilter}
          className="statusCards"
        >
          <option value="">Все</option>
          <hr />
          <option value="normal">Normal</option>
          <hr />
          <option value="middle">Middle</option>
          <hr />
          <option value="high">High</option>
        </select>
      </div>
      <div className="cards">
        {displayedTasks.map((task, index) => (
          <div className="card" key={index}>
            {task.priority == "normal" ? (
              <p className="card-priority card-priority-normal">
                {task.priority}
              </p>
            ) : task.priority == "high" ? (
              <p className="card-priority card-priority-high">
                {task.priority}
              </p>
            ) : (
              <p className="card-priority card-priority-middle">
                {task.priority}
              </p>
            )}

            <p className="card-title">
              №{task.id}
              {task.title}
            </p>
            <p className="card-description">{task.description}</p>
            <div className="card-buttons">
              <button onClick={() => navigate(`/tasks/${task.id}`)}className="card-open-btn card-btn">Открыть</button>
              <button onClick={() => deleteCard(task.id)} className="card-delete-btn card-btn">Удалить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
