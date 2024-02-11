import "./App.css";
import Header from "./Header";
import AboutPage from "./views/AboutPage";
import HomePage from "./views/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="about.html" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
