

// import { useState } from "react";
// import axios from "axios";
// import "../styles/AuthForm.css";

// const Login = () => {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8080/api/auth/login", {
//         userName,
//         password,
//       });
//       console.log(res.data);
//       alert("Login Successful");
//     } catch (err) {
//       console.error("Login Error", err);
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
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

//           <button type="submit">Login</button>
//         </form>
//         <div className="auth-switch">
//           Don't have an account? <a href="/register">Register</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import { useState } from "react";
import axios from "axios";
import '../styles/AuthForm.css';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        userName,
        password,
      });
      alert("Login Successful");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <div className="auth-switch">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
