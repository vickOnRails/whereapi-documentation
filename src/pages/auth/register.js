import React, { useReducer } from "react";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
};

export const formReducer = (state, action) => {
  return { ...state, [action.type]: action.payload };
};

const register = () => {
  const [state, dispatch] = useReducer(formReducer, initialValues);

  const handleOnChange = (e) => {
    dispatch({ type: [e.target.name], payload: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth-card">
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>
            <span className="form-item__span">Fullname</span>
            <input
              className="form-item form-item--block"
              placeholder="Enter your name"
              type="text"
              value={state.fullname}
              onChange={handleOnChange}
              name="fullname"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="form-item__span">Email Address</span>
            <input
              className="form-item form-item--block"
              placeholder="Enter your email"
              type="email"
              value={state.email}
              onChange={handleOnChange}
              name="email"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="form-item__span">Password</span>
            <input
              className="form-item form-item--block"
              placeholder="Choose a password"
              type="password"
              value={state.password}
              onChange={handleOnChange}
              name="password"
            />
          </label>
        </div>

        <button className="button button--primary button--block">
          Register
        </button>
      </form>
    </div>
  );
};

export default register;
