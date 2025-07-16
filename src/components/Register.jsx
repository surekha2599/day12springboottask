

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../styles/AuthForm.css";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   const navigate = useNavigate();

//   const handleRegister = async (event) => {
//     event.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8080/api/auth/register", {
//         name,
//         email,
//         userName,
//         password,
//         roleNames: [role],
//       });
//       console.log(res.data);
//       alert("Registered Successfully");
//       navigate("/login");
//     } catch (err) {
//       console.error("Register Error", err);
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Register</h2>
//         <form onSubmit={handleRegister}>
//           <label htmlFor="name">Name</label>
//           <input
//             id="name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label htmlFor="userName">Username</label>
//           <input
//             id="userName"
//             type="text"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             required
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <label>Role</label>
//           <div className="role-options">
//             <label>
//               <input
//                 type="radio"
//                 name="role"
//                 value="ROLE_ADMIN"
//                 checked={role === "ROLE_ADMIN"}
//                 onChange={(e) => setRole(e.target.value)}
//                 required
//               />
//               Admin
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="role"
//                 value="ROLE_USER"
//                 checked={role === "ROLE_USER"}
//                 onChange={(e) => setRole(e.target.value)}
//               />
//               User
//             </label>
//           </div>

//           <button type="submit">Register</button>
//         </form>
//         <div className="auth-switch">
//           Already have an account? <a href="/login">Login</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/AuthForm.css';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/register", {
        name, email, userName, password, roleNames: [role]
      });
      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
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
          <button type="submit">Register</button>
        </form>

        <div className="auth-switch">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
