import React, { useReducer } from "react";

import { formReducer } from "./register";

const initialValues = {
  email: "",
  password: "",
};

const login = () => {
  const [state, dispatch] = useReducer(formReducer, initialValues);

  const handleOnChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth-card">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <span className="form-item__span">Email Address</span>
            <input
              className="form-item form-item--block"
              placeholder="enter your email"
              type="email"
              onChange={handleOnChange}
              value={state.email}
              name="email"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="form-item__span">Password</span>
            <input
              className="form-item form-item--block"
              placeholder="choose a password"
              type="password"
              onChange={handleOnChange}
              value={state.password}
              name="password"
            />
          </label>
        </div>

        <button className="button button--primary button--block">Login</button>
      </form>
    </div>
  );
};

export default login;
