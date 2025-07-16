


import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <header className="landing-header">
        <h1>
          <span className="highlight">EMS</span> - Smart Employee Management
        </h1>
        <div className="header-buttons">
           <button onClick={() => window.location.href = "/employee-list"}>Employee List</button>
           <button onClick={() => window.location.href = "/add-employee"}>Add Employee</button>
        </div>
      </header>

     
      <main className="landing-main">
        <div className="landing-content">
          <h2>Welcome to EMS</h2>
          <p>Empower your organization with intelligent employee management.</p>
          <div className="landing-buttons">
            <button onClick={() => navigate("/register")}>Register</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        </div>
      </main>

      <footer className="landing-footer">
        &copy; 2025 EMS. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
