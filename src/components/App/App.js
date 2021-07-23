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
import Buy from "../Buy/Buy";
import Sell from "../Sell/Sell";
import Landing from "../Landing/Landing"
import UserContext from "../../hooks/userContext";
import Navbar from "../Navbar/Navbar";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [coinSymbol, setCoinSymbol] = useState("");
  const [coinName, setCoinName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [tutorialName, setTutorialName] = useState("");
  const [tutorialDesc, setTutorialDesc] = useState("");

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
    <UserContext.Provider value={user}>
      <div className="App">
      <Routes>
            <Route path="/" element={<Landing/>} />
          </Routes>
        <div className="app-header">
          <div className="hasNav">
            <Routes>
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/register" element={<Register setUser={setUser} />} />
              <Route
                path="/tutorial"
                element={
                  Object.keys(user).length === 0 ? (
                    <h1 style={{ textAlign: "center" }}>Not logged in</h1>
                  ) : (
                    <Tutorial
                      setVideoUrl={setVideoUrl}
                      setTutorialName={setTutorialName}
                      setTutorialDesc={setTutorialDesc}
                    />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={
                  Object.keys(user).length === 0 ? (
                    <h1 style={{ textAlign: "center" }}>Not logged in</h1>
                  ) : (
                    <Dashboard setSymbol={setCoinSymbol} setName={setCoinName} />
                  )
                }
              />

              <Route path="/coin/:symbol" element={<Tradeview symbol={coinSymbol} name={coinName} />} />

              <Route path="/coin/:symbol/buy" element={<Buy symbol={coinSymbol} name={coinName} />} />
              <Route path="/coin/:symbol/sell" element={<Sell symbol={coinSymbol} name={coinName} />} />
              <Route
                path="/tutorial/:id"
                element={<CoinTutorial videoUrl={videoUrl} name={tutorialName} desc={tutorialDesc} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
