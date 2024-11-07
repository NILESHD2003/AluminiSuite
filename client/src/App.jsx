import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import "./App.css";
import ManageNetwork from "./pages/ManageNetwork";
import AddStudent from "./pages/AddStudent";
import NotFound from "./pages/NotFound";
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from "../protectedRoute/ProtectedRoute"
import DashBoard from "./pages/DashBoard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Toaster } from "@/components/ui/sonner"
import OnboardingPage from "./pages/OnboardingPage";
import Invite from "./pages/Invite";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (

    <Router>
      <AuthProvider>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
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
          <Route path="/DashBoard" element={
            <ProtectedRoute>


              <DashBoard />
            </ProtectedRoute>

          } />
          <Route path="/OnboardingPage/:token" element={
            <ProtectedRoute>


              <OnboardingPage />
            </ProtectedRoute>

          } />
          <Route path="/Invite" element={
            <ProtectedRoute>


              <Invite />
            </ProtectedRoute>

          } />
          <Route path="/Profile" element={
            <ProtectedRoute>


              <ProfilePage />
            </ProtectedRoute>

          } />

          <Route path="*" element={<NotFound />} />
        </Routes>

      </AuthProvider>
      <Toaster />
    </Router>
  );
}

export default App;
