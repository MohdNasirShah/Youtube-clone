import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import Video from "./Video";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* My React App
      <Home></Home> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/video" element={<Video />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
