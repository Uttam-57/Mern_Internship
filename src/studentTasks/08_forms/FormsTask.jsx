import React from "react";
import { useForm } from "react-hook-form";
import "../tasks.css";

const BasicForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("basic form", data);
    alert("Basic form submitted");
  };

  return (
    <div className="task-box">
      <h3>Form 1 (5 fields - basic)</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <input placeholder="city" {...register("city")} />
        </div>
        <div className="task-form-row">
          <input placeholder="password" type="password" {...register("password")} />
        </div>
        <button type="submit">Submit Form 1</button>
      </form>
    </div>
  );
};

const ValidationForm1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("validation form 1", data);
    alert("Validation Form 1 submitted");
  };

  return (
    <div className="task-box">
      <h3>Form 2 (validation)</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="task-form-row">
          <input placeholder="name" {...register("name", { required: "name required" })} />
          <p>{errors.name?.message}</p>
        </div>
        <div className="task-form-row">
          <input
            placeholder="email"
            {...register("email", {
              required: "email required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "invalid email" },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="task-form-row">
          <input
            placeholder="age"
            {...register("age", {
              required: "age required",
              min: { value: 18, message: "min age 18" },
            })}
          />
          <p>{errors.age?.message}</p>
        </div>
        <div className="task-form-row">
          <input placeholder="city" {...register("city", { required: "city required" })} />
          <p>{errors.city?.message}</p>
        </div>
        <div className="task-form-row">
          <input
            placeholder="password"
            type="password"
            {...register("password", {
              required: "password required",
              minLength: { value: 6, message: "min 6 chars" },
            })}
          />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Submit Form 2</button>
      </form>
    </div>
  );
};

const ValidationForm2 = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("validation form 2", data);
    alert("Validation Form 2 submitted");
  };

  return (
    <div className="task-box">
      <h3>Form 3 (validation)</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="task-form-row">
          <input placeholder="name" {...register("name", { required: "name required" })} />
          <p>{errors.name?.message}</p>
        </div>
        <div className="task-form-row">
          <input
            placeholder="email"
            {...register("email", {
              required: "email required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "invalid email" },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="task-form-row">
          <input
            placeholder="age"
            {...register("age", {
              required: "age required",
              min: { value: 18, message: "min age 18" },
            })}
          />
          <p>{errors.age?.message}</p>
        </div>
        <div className="task-form-row">
          <input
            placeholder="password"
            type="password"
            {...register("password", { required: "password required" })}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div className="task-form-row">
          <input
            placeholder="confirm password"
            type="password"
            {...register("confirmPassword", {
              required: "confirm password required",
              validate: (value) => value === password || "password not match",
            })}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <button type="submit">Submit Form 3</button>
      </form>
    </div>
  );
};

export const FormsTask = () => {
  return (
    <div className="task-page">
      <h1>Forms Task (react-hook-form)</h1>
      <BasicForm />
      <ValidationForm1 />
      <ValidationForm2 />
      <p>Formik topic noted, but current project already uses react-hook-form package.</p>
    </div>
  );
};
