import "./App.css";
import Header from "./components/header";
import Home from "./components/pages/home";
import Create from "./components/pages/create";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <div class="mesure">
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<create />} />
        </Routes>
        <Create/>
      </div>
      
    </div>
  );
}
