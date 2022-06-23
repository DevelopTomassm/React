# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# To implement firebase in your project
First log in to your firebase account or else create one.
Click here for create account(https://firebase.google.com/)

![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/FirebaseCreateAccount.JPG)

### Steps to follow
#### Create account or sigin in firebase
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/FirebaseLogin.JPG)


#### Click on start to create a project
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/FirebaseInit.JPG)


#### Once you are logged into firebase, create a project
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/CreateProject.JPG)



#### Assign a name to the project, accept the conditions and click continue
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/CreateP2.JPG)


#### Enable Google Analytics
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/CreateP3.JPG)
This option is optional, you can choose if you are going to use google analytics or not, this can be configured later, we are going to enable it


#### Config Google Analytics
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/CreateP4.JPG)

Here we will configure google analitycs, if it is the first time you have created a firebase project, you will have to create an account choosing the area you are in, if you have created more projects this step will not work


#### Connect Your Project With Firebase
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/FirebaseConnect.JPG)

Here we will connect our application to firebase, we will have to choose if it will be a web application, android or ios, it can also be linked with unity and flutter


#### Register App
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/RegistrarApp.JPG)

Here we will have to choose a name with which we will register our application

#### Add Firebase SDK
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/Fconect.JPG)

Here we will have to copy the code fragment provided by firebase to implement it in our project and connect to our database


#### Autentication Users
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/Autentication.JPG)

We go to User Authentication to enable users to be created so that they can log in to the application


#### Sigin Method Autentication User
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/Auth.JPG)

Here we will choose the method by which users can authenticate, in our case we will use authentication with email and password and google


#### Enable Authentication With Email And Password
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/EmailPass.JPG)

Here we enable users to be authenticated with email and password


#### Enable Authentication With Google
![node](https://raw.githubusercontent.com/DevelopTomassm/capturas-readme/main/LoginRegistroFirebase/Google.JPG)

Here we enable users to be authenticated with google


# Code Explanation
## Components
### Inicio
#### This class contains the necessary code to:
##### -Get the current user who is logged in
We obtain the user with a function that we have created in the authContext.js file, this function checks that the user is not null, if it is null we get an error that there is no authentication provider, if the user is not null the function returns us returns an object with the properties of the user, name, email, id....
##### -Show a letter with information of the current user
We obtain the properties of the current user through the imported function called useAuth, once we obtain the entire user object it is easy to access its properties and thus be able to display them, we only have to implement bind functions to assign them the value of the user attribute that we want


```js
import { useAuth } from "../context/authContext";
import { Home } from "./Home";

export function Inicio() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="w-full bg-blue-200">
      <Home></Home>{" "}
      <div class="flex items-center h-screen w-full justify-center">
        <div class="max-w-xs">
          <div class="bg-white shadow-xl rounded-lg py-3">
            <div class="photo-wrapper p-2">
              <img
                class="w-32 h-32 rounded-full mx-auto"
                src={user.photoURL || "default.png"}
                alt="No se ha podido cargar la foto de perfil"
              />
            </div>
            <div class="p-2">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                {user.name || user.displayName || "El usuario no tiene nombre"}
              </h3>
              <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Creador de esta pagina</p>
              </div>
              <table class="text-xs my-3">
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">
                      Nombre
                    </td>
                    <td class="px-2 py-2">
                      {user.displayName || "El usuario no tiene nombre"}
                    </td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{user.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


```
### Home 
This file is the one that is loaded once the user logs in, it contains a navigation bar with an item called Home and a drop-down menu on the left with the user's name and their photo, when clicking on it displays and there are 2 options ,logout(ends the current session) and profile(takes you to the user's profile page)
```js
import { useAuth } from "../context/authContext";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
export function Home() {
  const { user, logout, loading } = useAuth();
  console.log(user);
  const navigation = [{ name: "Home", href: "/inicio", current: false }];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <div> Cargando... </div>;
  return (
    <Disclosure as="nav" className="w-full bg-blue-200">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start mx-auto">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto "
                    src="icono.ico"
                    alt="ETG"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="icono.ico"
                    alt="ETG"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1">
                <div className="order-1 col-span-1 pb-20 ">
                  <div className="absolute inset-y-0 right-0 mx-auto  ">
                    {/* Profile dropdown */}
                    <Menu as="div" className=" mt-2 mx-auto ">
                      <div>
                        <Menu.Button className=" flex text-sm rounded-full    ">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user.photoURL || "user.png"}
                            alt=""
                          />
                          <span className="py-2 mx-2 text-bla">
                            {user.displayName || user.email}
                          </span>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className=" right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 absolute  ">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/profile"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Perfil
                              </a>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                                onClick={handleLogout}
                              >
                                Cerrar sesion
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

```

### Registro 
This file allows the creation of new users, this functionality is provided by Firebase through a function, we just need to import this function from the authContext file and assign this function to our button to create the new user
```js 
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

```

### Login 
This file allows user authentication, we instantiate the necessary functions to achieve this functionality that we have created in the authContext.js file and we render the interface for the user to enter an email and password or log in with a google account.
All this functionality is provided by Firebase through functions already created, we import them from the authContext file and assign them to the correct elements
```js 
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
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
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-sm m-auto ">
      <h1 className="text-center text-2xl font-bold mb-4"> Login </h1>{" "}
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
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar sesion{" "}
          </button>{" "}
          <a
            href="/resetPassword"
            className="inline-block align-baseline font-bold text-sm text-blue-500 px-4"
          >
            {" "}
            ¿ Has olividado la contraseña ?{" "}
          </a>{" "}
        </div>{" "}
        <p className="text-center text-gray-500 text-xs pb-3 pt-6">
          {" "}
          ¿ No tienes cuenta ?{" "}
          <a href="/registro" className="text-blue-500">
            {" "}
            Registrarse{" "}
          </a>{" "}
        </p>{" "}
        <p className="text-center text-gray-500 text-xs pb-3 pt-2"> O</p>
        <button
          type="submit"
          onClick={handleLoginGoogle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline text-center w-full "
        >
          Iniciar sesion con google{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}

```

### ForgotPassword
This file allows us to enable a user to reset their password.
This functionality is provided by Firebase, by means of an input (email) and a button (sending the firebase function) this makes the email that we have entered receive an email with a link to reset the password

```js
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
```
### Profile
This file collects the data of the current user instance and displays them on a card in an attractive way for the user, it has a button that allows updating the data that when pressed renders the page to edit the user's profile
```js
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
```
### EditProfile
This file allows us to update the user data, change the name (if this property does not exist or is null, it creates it), email (only when the user has authenticated with email and password) and profile picture.
The functionality is provided to us by Firebase through data update functions.
Here I leave the link of the Firebase documentation in case you want to take a look

[Firebase](https://firebase.google.com/docs/auth/web/manage-users?hl=es#web-version-9_3)
```js
import { useAuth } from "../context/authContext";
import { updateProfile, updateEmail } from "firebase/auth";
import { Home } from "./Home";
import { useState } from "react";
import { storage } from "../config/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Fade } from "react-reveal";
export function EditProfile() {
  const { user } = useAuth();
  console.log(user);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  console.log(image);

  const handleSubmit = (e) => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "No se ha podido actualizar la foto");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  updateProfile(user, {
    displayName: name,
    photoURL: url,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  updateEmail(user, email)
    .then(() => {
      // Email updated
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  return (
    <div className="w-full bg-blue-200">
      <Home />{" "}
      <div class="max-w-sm pb-5 mx-auto mt-4 overflow-hidden rounded-lg shadow-lg fondo">
        <Fade top>
          <div class="h-40 bg-gradient-to-br from-blue-400 via-indigo-500 fondo">
            <div class="flex justify-center">
              <span class="mt-10 text-xl font-extrabold text-white">
                {user.displayName || user.email}
              </span>
            </div>
            <div class="w-full p-8 mx-2 flex justify-center">
              <img
                src={user.photoURL}
                class="rounded-full w-32"
                alt="Avatar"
                onClick={handleImageChange}
              />
            </div>
            <div class="w-full  mx-2 flex justify-center">
              <input
                type="file"
                id="customFile"
                name="file"
                hidden=""
                src={user.photoURL}
                className=""
                onChange={handleImageChange}
              ></input>
            </div>
          </div>
          <Fade left>
            <div class="px-6 py-4">
              <div class="flex justify-center mt-10 mb-4 text-xl font-medium">
                Datos personales
              </div>
              <div class="flex my-1 ml-10 text-black mr-10">
                <img
                  class="object-cover w-8 h-8 mt-4 border-4 border-blue-600 rounded-full"
                  src="account.png"
                  alt=""
                />
                <span className="mx-5 py-4">
                  <input
                    id="username"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    placeholder="Introduce el nombre nuevo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </span>
              </div>

              <div class="flex my-1 ml-10 text-black mr-10">
                <img
                  class="object-cover w-8 h-8 mt-4 border-4 border-blue-600 rounded-full"
                  src="email.png"
                  alt=""
                />
                <span className="mx-5 py-4">
                  <input
                    id="email"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="email"
                    placeholder="Introduce el email nuevo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
              </div>

              <div class="flex my-1 mt-2 ml-32 ">
                <button
                  type="button"
                  class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  onClick={updateProfile && handleSubmit}
                >
                  Actualizar
                </button>
              </div>
            </div>
          </Fade>
        </Fade>
      </div>
    </div>
  );
}
```
### Alert
This file allows you to display a message to the user for validations and errors that may cause some actions
```js 
export function Alert({ message }) {
  return (
    <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative mb-2 text-center">
      <span className="sm: inline block"> {message} </span>
    </div>
  );
}
```
### ProtectedRoutes  
We will use this file to be able to protect all our routes so that they cannot be seen by non-logged in users, it will suffice to put this component in front of the declaration of the route.
To understand it better, please take a look at the App.js file
```js 
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (loading) return <div> Cargando... </div>;
  return <> {children} </>;
}
```
## Config
### firebase.config.js
This file connects our application to the firebase database, it contains the necessary information to connect to the database, in it we declare the instances, RealTimeDatabase, Firestore, Storage.....
This depends on what you want to use, in our case we will only need to instantiate the database and storage.
We import the functions that Firebase provides us and we would already have the database connected to our project
```js 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHedvBUMNSJQulVNAj8BQnLufTeWyy4Ks",
  authDomain: "loginregistro-e3b56.firebaseapp.com",
  projectId: "loginregistro-e3b56",
  storageBucket: "loginregistro-e3b56.appspot.com",
  messagingSenderId: "1076610226563",
  appId: "1:1076610226563:web:a24ca8e6d162eb5fcd3eb6",
  measurementId: "G-2Q2BKNTG9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { app, analytics, auth, storage };

```
## Context
### authContext.js
This file contains the application context and all the functions that we are going to need in our application, we declare these functions in this file to have accessibility to them in any component and when we need it, keep in mind that we have to export the functions to be able to access them
```js 
  import { createContext, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useState } from "react";
export const authContext = createContext();
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("No hay proveedor de autenticacion");
  }

  return context;
};
export function AuthProvider({ children }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      console.log("auth provider load");
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {" "}
      {children}{" "}
    </authContext.Provider>
  );
}

```
## App.js
In this file all the routes of the project and the file that contains the context are declared, this is the file that is executed when starting the server
```js
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
```
## package.json
In this file all the dependencies necessary for the project to work are saved, it serves so that we do not have to install dependency by dependency, but rather we execute npm i or npm install and it installs them at the same time
```js 
{
  "name": "login-registro-firebase",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@headlessui/react": "^1.6.5",
    "@heroicons/react": "^1.0.6",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "firebase": "^9.8.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-reveal": "^1.2.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.4.7",
    "postcss": "^8.4.14",
    "tailwindcss": "^3.1.4"
  }
}

```
## postcss.config.js
This file is generated only with the following command:<br><br>
npx tailwindcss init -p <br><br>
No need to do any additional configuration<br><br>
```js 
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
## tailwind.config.js
This file is generated only with the following command:<br><br>
-npx tailwindcss init<br><br>
Inside this file add the paths to all your template files<br><br>
```js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```


#### To run this app in your pc
- [Download Node](https://nodejs.org/en/)<br><br>

git clone https://github.com/DevelopTomassm/React.git
<br><br>
cd to project location and cd LoginRegistroFirebase folder<br><br>
Open a terminal and run: npm install,this commmand install dependencies project<br><br>
to run our server : npm start

### Live Demo

![caption](https://github.com/DevelopTomassm/DevelopTomassm/blob/main/video1117522395.gif)
