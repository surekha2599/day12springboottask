import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AuthForm.css";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        name, email, userName, password, roleNames: [role]
      });
      alert("Employee Added");
      navigate("/");
    } catch (err) {
      alert("Failed to add employee");
    }
  };

  return (
     <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Username</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <label>Role</label><br />
          <label>
            <input type="radio" name="role" value="ROLE_ADMIN" checked={role === "ROLE_ADMIN"} onChange={(e) => setRole(e.target.value)} required />
            Admin
          </label><br />
          <label>
            <input type="radio" name="role" value="ROLE_USER" checked={role === "ROLE_USER"} onChange={(e) => setRole(e.target.value)} />
            User
          </label>
          <br /><br />
          <button type="submit">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;


