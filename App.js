//react App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
//pages and components
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/exercise" element={<Exercise />} />
            <Route path="/stats" element={<Stats />} />*/}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
