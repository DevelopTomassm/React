import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
export function Registro() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      <h1 className="text-center text-2xl font-bold mb-4"> Registro </h1>{" "}
      {error && <Alert message={error} />}{" "}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email{" "}
        </label>{" "}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />{" "}
        <label
          className="block text-gray-700 text-sm font-bold mb-2 py-2"
          htmlFor="password"
        >
          Contraseña{" "}
        </label>{" "}
        <input
          type="password"
          name="password"
          placeholder="******"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />{" "}
        <p className="text-center text-gray-500 text-xs pb-3">
          {" "}
          ¿ Ya tienes cuenta ?{" "}
          <a href="/login" className="text-blue-500">
            Iniciar sesion{" "}
          </a>{" "}
        </p>{" "}
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline "
            type="submit"
          >
            Registrarse{" "}
          </button>{" "}
        </div>
      </form>{" "}
    </div>
  );
}
