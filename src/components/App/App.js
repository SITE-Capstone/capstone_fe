import "./App.css";
import Tutorial from "../Tutorial/Tutorial";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <Navbar />
        </div>
        <div className="container">
          <h1>Crypto Capstone</h1>
          <Tutorial />
        </div>
      </header>
    </div>
  );
}

export default App;
