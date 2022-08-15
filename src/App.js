import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CountryDetails from "./CountryDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/:country" element={<CountryDetails />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
