import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import "./App.css";
import Login from "./pages/Login";
import ManageNetwork from "./pages/ManageNetwork";
import AddStudent from "./pages/AddStudent";
import NotFound from "./pages/NotFound";
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from "../protectedRoute/ProtectedRoute"

function App() {
  return (
    <AuthProvider>

      <Router>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manageNetworks" element={
            <ProtectedRoute>

              <ManageNetwork />
            </ProtectedRoute>

          }

          />
          <Route path="/AddStudent" element={
            <ProtectedRoute>


              <AddStudent />
            </ProtectedRoute>

          } />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>
    </AuthProvider>
  );
}

export default App;
