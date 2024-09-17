import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowProfile = () => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    setUser(storedUser);
    setNewUsername(storedUser.username || "");
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const checkPasswordStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /[0-9]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (
      lengthCriteria &&
      numberCriteria &&
      lowercaseCriteria &&
      uppercaseCriteria &&
      specialCharCriteria
    ) {
      return "Mạnh";
    } else if (
      lengthCriteria &&
      (numberCriteria || lowercaseCriteria || uppercaseCriteria)
    ) {
      return "Trung bình";
    } else {
      return "Yếu";
    }
  };

  const handlePasswordChange = (e) => {
    const newPass = e.target.value;
    setNewPassword(newPass);
    setPasswordStrength(checkPasswordStrength(newPass));
  };

  const handleSave = () => {
    const storedPassword = user.password;

    if (newUsername && oldPassword && newPassword) {
      if (oldPassword !== storedPassword) {
        toast.error("Mật khẩu cũ không đúng!");
        return;
      }
      if (passwordStrength === "Yếu") {
        toast.error("Mật khẩu mới quá yếu!");
        return;
      }
      const updatedUser = {
        ...user,
        username: newUsername,
        password: newPassword,
      };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setIsEditing(false);
      toast.success("Thông tin đã được cập nhật thành công!");
    } else if (newUsername) {
      const updatedUser = { ...user, username: newUsername };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setIsEditing(false);
      toast.success("Tên người dùng đã được cập nhật thành công!");
    } else if (oldPassword && newPassword) {
      if (oldPassword !== storedPassword) {
        toast.error("Mật khẩu cũ không đúng!");
        return;
      }
      if (passwordStrength === "Yếu") {
        toast.error("Mật khẩu mới quá yếu!");
        return;
      }
      const updatedUser = { ...user, password: newPassword };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setIsEditing(false);
      toast.success("Mật khẩu đã được cập nhật thành công!");
    } else {
      toast.error("Vui lòng điền thông tin cần thiết!");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewUsername(user.username || "");
    setOldPassword("");
    setNewPassword("");
  };

  return (
    <div className="profile-container">
      <h1>Thông Tin Cá Nhân</h1>
      <div className="profile-info">
        <div className="info-item">
          <label>Email: </label>
          <span>{user.email || "N/A"}</span>
        </div>
        <div className="info-item">
          <label>Username: </label>
          {isEditing ? (
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          ) : (
            <span>{user.username || "N/A"}</span>
          )}
        </div>
        <div className="info-item">
          <label>Password: </label>
          {isEditing ? (
            <div className="inpEdit">
              <input
                type={showPassword ? "text" : "password"}
                value={oldPassword}
                placeholder="Nhập mật khẩu cũ"
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                placeholder="Nhập mật khẩu mới"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          ) : (
            <span>*******</span>
          )}
        </div>
      </div>
      <div className="profile-actions">
        {isEditing ? (
          <>
            <button id="save" onClick={handleSave}>
              Lưu
            </button>
            <button id="cancel" onClick={handleCancel}>
              Hủy
            </button>
          </>
        ) : (
          <button id="edit" onClick={handleEditClick}>
            Chỉnh sửa
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShowProfile;
