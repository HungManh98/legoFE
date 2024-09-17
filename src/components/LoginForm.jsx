import { Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveLoggedInUser = (user) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };



  const handleSubmit = async (e) => {
    console.log("handleSubmit!!!!");
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      saveLoggedInUser(storedUser);
      toast.success("Đăng nhập thành công!");
      navigate("/");
    } else {
      toast.error("Email hoặc mật khẩu không đúng!");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} id="loginForm">
        <h3>ĐĂNG NHẬP</h3>
        <h4>Email</h4>
        <div id="inputEmail">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <h4>Mật khẩu</h4>
          <input
            id="input_password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
          <button id="btn_signIn" type="submit">
            Đăng nhập
          </button>
        </div>
        <NavLink to="/register">
          <div>
            <button id="btn_signUp">
              Đăng kí
            </button>
          </div>
        </NavLink>
        <NavLink>Forgot your password?</NavLink>
        <p id="or">or</p>
        <div>
          <NavLink>
            <Button className="signWith">Sign in with Facebook</Button>
          </NavLink>
        </div>
        <div>
          <NavLink>
            <Button className="signWith">Sign in with Google</Button>
          </NavLink>
        </div>
        <div>
          <NavLink>
            <Button className="signWith">Sign in with Apple</Button>
          </NavLink>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default LoginForm;
