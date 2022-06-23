import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Registro } from "./components/Registro";
import { Profile } from "./components/Profile";
import { EditProfile } from "./components/EditProfile";
import { ResetPassword } from "./components/ForgotPassword";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/authContext";
import { Inicio } from "./components/Inicio";

function App() {
  return (
    <div className="bg-blue-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/registro" element={<Registro />} />{" "}
          <Route path="/resetPassword" element={<ResetPassword />} />{" "}
          <Route path="/profile" element={<Profile />} />{" "}
          <Route path="/editProfile" element={<EditProfile />} />{" "}
          <Route path="/inicio" element={<Inicio />} />{" "}
        </Routes>{" "}
      </AuthProvider>{" "}
    </div>
  );
}

export default App;
