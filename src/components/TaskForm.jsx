import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../services/api";

export default function TaskForm({ getTask }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(api),
    defaultValues: {
      title: "",
      description: "",
      priority: "",
    },
  });
  const createTask = (data) => {
    axios
      .post("http://localhost:8000/tasks", data)
      .then(() => {
        getTask();
        reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="taskForm">
      <h1 className="taskForm-text tft-1">Задачи</h1>
      <h1 className="taskForm-text tft-2">Форма добавления</h1>
      <form action="" onSubmit={handleSubmit(createTask)}>
        <input type="text" placeholder="Название" {...register("title")} />
        <input
          type="text"
          placeholder="Описание"
          {...register("description")}
        />
        <div className="priority-selector">
          <p className="title">Приоритет</p>
          <div>
            <input
              type="radio"
              id="normal"
              name="priority"
              value="normal"
              {...register("priority")}
            />
            <label htmlFor="normal" className="btn normal">
              Normal
            </label>
            <input
              type="radio"
              id="middle"
              name="priority"
              value="middle"
              {...register("priority")}
            />
            <label htmlFor="middle" className="btn middle">
              Middle
            </label>
            <input
              type="radio"
              id="high"
              name="priority"
              value="high"
              {...register("priority")}
            />
            <label htmlFor="high" className="btn high">
              High
            </label>
          </div>
        </div>
        {errors.title && <p className="errorMessage">{errors.title.message}</p>}
        {errors.description && <p className="errorMessage">{errors.description.message}</p>}
        {errors.priority && <p className="errorMessage">{errors.priority.message}</p>}
        <button className="taskForm-button">Создать задачу</button>
      </form>
    </div>
  );
}
