
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrowBlue from "../assets/arrow-blue.png";
import axios from "axios";
import deleteIcon from "../assets/delete-icon.png";
import updateIcon from "../assets/update-icon.png";

export default function TaskDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "normal",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/tasks/${id}`)
      .then(({ data }) => setTask(data))
      .catch((err) => console.log(err.message));
  }, [id]);

  const startEditing = () => {
    setFormData({
      title: task.title,
      description: task.description,
      priority: task.priority,
    });
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateTask = () => {
    axios
      .put(`http://localhost:8000/tasks/${id}`, {
        ...task,
        ...formData,
      })
      .then(({ data }) => {
        setTask(data);
        setIsEditing(false);
      })
      .catch((err) => console.log(err.message));
  };

  const deleteTask = () => {
    axios
      .delete(`http://localhost:8000/tasks/${id}`)
      .then(() => navigate("/"))
      .catch((err) => console.log(err.message));
  };

  if (!task) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="taskDetail">
      <p className="close" onClick={() => navigate(-1)}>
        <img src={arrowBlue} alt="Назад" /> Назад
      </p>

      <div className="detail">
        <div className="detail-text">
          {isEditing ? (
            <>
              <p>Название</p>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />

              <p>Описание</p>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <p className="detail-card-title">
                №{task.id} <span>{task.title}</span>
              </p>

              <p className="detail-card-description">
                {task.description}
              </p>
            </>
          )}
        </div>

        {isEditing ? (
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="normal">Normal</option>
            <option value="middle">Middle</option>
            <option value="high">High</option>
          </select>
        ) : (
          task.priority === "normal" ? (
            <p className="detail-card-priority detail-card-priority-normal">
              Normal
            </p>
          ) : task.priority === "high" ? (
            <p className="detail-card-priority detail-card-priority-high">
              High
            </p>
          ) : (
            <p className="detail-card-priority detail-card-priority-middle">
              Middle
            </p>
          )
        )}
      </div>

      <div className="detail-card-buttons">
        {isEditing ? (
          <>
            <button onClick={updateTask}>Сохранить</button>
            <button onClick={() => setIsEditing(false)}>
              Отмена
            </button>
          </>
        ) : (
          <>
            <div
              className="detail-delete-btn"
              onClick={deleteTask}
            >
              <img src={deleteIcon} alt="Удалить" />
            </div>

            <div
              className="detail-update-btn"
              onClick={startEditing}
            >
              <img src={updateIcon} alt="Изменить" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}