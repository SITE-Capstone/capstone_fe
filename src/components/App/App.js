import "./App.css";
import { useState, useEffect } from "react";
import apiClient from "../Services/apiClient";
import { Routes, Route } from "react-router-dom";
import Tutorial from "../Tutorial/Tutorial";
import Navbar from "../Navbar/Navbar";
import Chart from "../Chart/Chart";
import Login from "../Login/Login";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("fitness_tracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <Navbar />
        </div>
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login user={user} setUser={setUser} />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/coininfo" element={<Chart />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
