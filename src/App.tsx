// src/AppRoute.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import WhyJoinLancrr from "./components/Why-Join-Lancrr";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/why-join-lancrr" element={<WhyJoinLancrr />} />
    </Routes>
  );
};

export default App;
