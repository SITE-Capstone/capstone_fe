import "./App.css";
import Tutorial from "../Tutorial/Tutorial";
import Navbar from "../Navbar/Navbar";
import Chart from "../Chart/Chart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <Navbar />
        </div>
        <div className="container">
          <h1>Crypto Capstone</h1>
          <Chart />
          <Tutorial />
        </div>
      </header>
    </div>
  );
}

export default App;
