import { useState } from "react";
import { useAuth } from "../context/authContext";

import { Alert } from "./Alert";
import { Fade } from "react-reveal";
export function ResetPassword() {
  const [user, setUser] = useState({
    email: "",
  });
  const [error, setError] = useState();
  const { resetPassword } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(user.email);
      setError("Check your email to reset your password");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <section class="w-full gradient-form bg-gray-200 md:h-screen">
      <div className="h-screen bg-blue-200">
        <div class="container py-3   ml-auto mr-auto ">
          <div class="flex justify-center flex-wrap h-full g-6 text-gray-800 ">
            <div class="block bg-white shadow-lg rounded-lg ">
              {" "}
              <Fade bottom>
                <div class="lg:flex lg:flex-wrap g-0">
                  <div class="lg:w-6/12 px-4 md:px-0">
                    <div class="md:p-12 md:mx-6 ">
                      <div class="text-center ">
                        <img
                          class="w-48 animate-bounce"
                          src="icono.png"
                          alt="logo"
                        />
                        <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                          RESTABLECER CONTRASEÑA
                        </h4>{" "}
                        {error && <Alert message={error} />}{" "}
                      </div>

                      <form onSubmit={handleResetPassword}>
                        <div class="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                          >
                            Email{" "}
                          </label>{" "}
                          <input
                            type="email"
                            name="email"
                            class="shadow appearance-none border rounded w-full-screen-xl py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Introduce tu email"
                            onChange={handleChange}
                          />
                        </div>

                        <div class="text-center pt-1 mb-12 pb-1">
                          <button
                            class=" text-black group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 login"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Restablecer contraseña
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
}
