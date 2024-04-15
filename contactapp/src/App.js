import "./App.css";
import Header from "./components/header";
import { Footer } from "./components/footer";
import Home from "./components/pages/home";
import Create from "./components/pages/create";
import {BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <div className="mesure">
       
        
       
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        </BrowserRouter>
        
        <Footer />
      </div>
    </div>
  );
}
