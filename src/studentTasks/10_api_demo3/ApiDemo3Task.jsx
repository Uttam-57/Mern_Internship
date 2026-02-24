import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../tasks.css";

export const ApiDemo3Task = () => {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");

  const submitHandler = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      age: Number(data.age),
      isActive: data.isActive === "true",
      password: data.password,
    };

    try {
      const res = await axios.post("https://node5.onrender.com/user/user/", payload);
      setMessage(res.data.message || "user added");
      reset();
    } catch (error) {
      setMessage("error while calling api");
    }
  };

  return (
    <div className="task-page">
      <h1>ApiDemo3 Task</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="task-form-row">
          <input placeholder="name" {...register("name")} />
        </div>
        <div className="task-form-row">
          <input placeholder="email" {...register("email")} />
        </div>
        <div className="task-form-row">
          <input placeholder="age" {...register("age")} />
        </div>
        <div className="task-form-row">
          <select {...register("isActive")}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
        <div className="task-form-row">
          <input placeholder="password" type="password" {...register("password")} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>{message}</h3>
    </div>
  );
};
