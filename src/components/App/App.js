import "./App.css";
import { useState, useEffect } from "react";
import apiClient from "../Services/apiClient";
import { Routes, Route, Link } from "react-router-dom";
import Tutorial from "../Tutorial/Tutorial";
import Login from "../Login/Login";
import Tradeview from "../Tradeview/Tradeview";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import CoinTutorial from "../CoinTutorial/CoinTutorial";
import Buy from "../Buy/Buy";
import Sell from "../Sell/Sell";
import Landing from "../Landing/Landing";
import UserContext from "../../hooks/userContext";
import { Button } from "@material-ui/core";
import Settings from "../Settings/Settings";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [coinSymbol, setCoinSymbol] = useState("");
  const [coinName, setCoinName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [tutorialName, setTutorialName] = useState("");
  const [tutorialDesc, setTutorialDesc] = useState("");
  const [tutorialId, setTutorialId] = useState();

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
        <div className="app-header">
          <div className="container">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/register" element={<Register setUser={setUser} />} />
              <Route
                path="/tutorial"
                element={
                  Object.keys(user).length === 0 ? (
                    <div>
                      <h1 style={{ textAlign: "center" }}>Not logged in</h1>
                      <div style={{ display: "flex", width: 385, justifyContent: "space-between" }}>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                          <Button variant="contained">Sign in</Button>
                        </Link>
                        <Link to="/register" style={{ textDecoration: "none" }}>
                          <Button variant="contained">Register</Button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <Tutorial
                      setVideoUrl={setVideoUrl}
                      setTutorialName={setTutorialName}
                      setTutorialDesc={setTutorialDesc}
                      setTutorialId={setTutorialId}
                    />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={
                  Object.keys(user).length === 0 ? (
                    <div>
                      <h1 style={{ textAlign: "center" }}>Not logged in</h1>
                      <div style={{ display: "flex", width: 385, justifyContent: "space-between" }}>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                          <Button variant="contained">Sign in</Button>
                        </Link>
                        <Link to="/register" style={{ textDecoration: "none" }}>
                          <Button variant="contained">Register</Button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <Dashboard setSymbol={setCoinSymbol} setName={setCoinName} />
                  )
                }
              />

              <Route
                path="/coin/:symbol"
                element={<Tradeview symbol={coinSymbol} name={coinName} setTutorialId={setTutorialId} />}
              />

              <Route path="/coin/:symbol/buy" element={<Buy symbol={coinSymbol} name={coinName} />} />
              <Route path="/coin/:symbol/sell" element={<Sell symbol={coinSymbol} name={coinName} />} />
              <Route
                path="/tutorial/:id"
                element={
                  <CoinTutorial
                    videoUrl={videoUrl}
                    name={tutorialName}
                    desc={tutorialDesc}
                    tutorialId={tutorialId}
                    setVideoUrl={setVideoUrl}
                    setTutorialName={setTutorialName}
                    setTutorialDesc={setTutorialDesc}
                  />
                }
              />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
