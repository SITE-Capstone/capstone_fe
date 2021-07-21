import "./App.css";
import { useState, useEffect } from "react";
import apiClient from "../Services/apiClient";
import { Routes, Route } from "react-router-dom";
import Tutorial from "../Tutorial/Tutorial";
import Login from "../Login/Login";
import Tradeview from "../Tradeview/Tradeview";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import CoinTutorial from "../CoinTutorial/CoinTutorial";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [coinSymbol, setCoinSymbol] = useState("");
  const [coinName, setCoinName] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("kurios_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);

  return (
    <div className="App">
      <div className="app-header">
        <div className="hasNav">
          <Routes>
            <Route path="/login" element={<Login user={user} setUser={setUser} />} />
            <Route path="/register" element={<Register user={user} setUser={setUser} />} />
            <Route
              path="/tutorial"
              element={
                Object.keys(user).length === 0 ? <h1 style={{ textAlign: "center" }}>Not logged in</h1> : <Tutorial />
              }
            />
            <Route
              path="/dashboard"
              element={
                Object.keys(user).length === 0 ? (
                  <h1 style={{ textAlign: "center" }}>Not logged in</h1>
                ) : (
                  <Dashboard user={user} setSymbol={setCoinSymbol} setName={setCoinName} />
                )
              }
            />

            <Route path="/coin/:symbol" element={<Tradeview symbol={coinSymbol} name={coinName} />} />
            <Route path="/tutorial/:name" element={<CoinTutorial />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
