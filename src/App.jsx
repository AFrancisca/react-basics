import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content max-w-[600px] my-[40px] mx-auto p-[20px]">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
