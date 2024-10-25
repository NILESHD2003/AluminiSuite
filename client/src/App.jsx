import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import "./App.css";
import Login from "./pages/Login";
import ManageNetwork from "./pages/ManageNetwork";
import AddStudent from "./pages/AddStudent";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manageNetworks" element={<ManageNetwork />} />
          <Route path="/AddStudent" element={<AddStudent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
