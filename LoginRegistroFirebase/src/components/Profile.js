import { Home } from "./Home";
import { useAuth } from "../context/authContext";
import { Fade } from "react-reveal";
export function Profile() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="w-full bg-blue-200">
      <Home />{" "}
      <div class="max-w-screen-sm pb-5 mx-auto mt-4 overflow-hidden rounded-lg shadow-lg fondo">
        <Fade left>
          <div class="h-40 bg-gradient-to-br from-blue-400 via-indigo-500 fondo">
            <div class="flex justify-center">
              <span class="mt-10 text-xl font-extrabold text-white">
                {user.displayName || user.email}
              </span>
            </div>
            <div class="flex justify-center">
              <img
                class="object-cover w-24 h-24 mt-4 border-4 border-blue-600 rounded-full"
                src={user.photoURL || "default.png"}
                alt=""
              />
            </div>
          </div>
          <div class="px-6 py-4">
            <div class="flex justify-center mt-10 mb-4 text-xl font-medium">
              Datos personales
            </div>
            <div class="flex my-1  text-black justify-center">
              <img
                class="object-cover w-8 h-8 mt-4 border-4 border-blue-600 rounded-full"
                src="account.png"
                alt=""
              />
              <span className="mx-5 py-4">
                {user.displayName || user.email}
              </span>
            </div>

            <div class="flex my-1 text-black justify-center">
              <img
                class="object-cover w-8 h-8 mt-4 border-4 border-blue-600 rounded-full"
                src="email.png"
                alt=""
              />
              <span className="mx-5 py-4">{user.email}</span>
            </div>

            <div class="flex my-1 mt-2 justify-center ">
              <button
                type="button"
                class="inline-flex  px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              >
                <a href="/editProfile" class="text-white">
                  {" "}
                  Editar perfil
                </a>
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
