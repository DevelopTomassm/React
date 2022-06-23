import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Registro } from "./components/Registro";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/authContext";

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
        </Routes>{" "}
      </AuthProvider>{" "}
    </div>
  );
}

export default App;
