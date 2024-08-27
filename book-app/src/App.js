import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Create";
 import ReadBook from "./components/SingleBook";
 import UpdateBook from "./components/UpdateBook";
 import ReadAll from "./components/Read";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/read/all" element={<ReadAll />} />
      <Route path="/readbook/:id" element={<ReadBook />} />
      <Route path="/updatebook/:id" element={<UpdateBook />} />
    </Routes>
  </div>
  );
}

export default App;
