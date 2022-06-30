import logo from './logo.svg';
import './App.css';
import { Routes, Route, useParams } from "react-router-dom";

import Home from './Home'

function App() {
  return (
    <div className="App container">
      <h1>App Page</h1>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
