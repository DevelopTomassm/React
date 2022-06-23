import { useAuth } from "../context/authContext";

export function Home() {
  const { user, logout, loading } = useAuth();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <div> Cargando... </div>;
  return (
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
                  <td class="px-2 py-2 text-gray-500 font-semibold">Nombre</td>
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

            <div class="text-center my-3">
              <a
                class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="/#"
                onClick={handleLogout}
              >
                Cerrar sesion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
