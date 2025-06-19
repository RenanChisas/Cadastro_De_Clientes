import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Add } from "./Pages/Add";
import { List } from "./Pages/List";
import "./styles/global.css";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
import type { Usuario } from "./types/userType";
import { Update } from "./Pages/Update";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update",
    element: <Update />,
  },
  {
    path: "/erro",
    element: <h1>Erro</h1>,
  },
]);

export function App() {
  const [list, setList] = useState<Usuario[]>([]);

  const handleSuccess = (msg: string) => {
    toast.success(msg);
  };

  function addUser(newUser: Usuario, msg: string) {
    setList((prevList) => {
      const exists = prevList.some((user) => user.id === newUser.id);

      if (exists) {
        handleSuccess(msg);
        return prevList.map((user) =>
          user.id === newUser.id ? newUser : user
        );
      } else {
        handleSuccess(msg);
        return [...prevList, newUser];
      }
    });
  }
  function deleteUser(userId: string, msg: string) {
    setList((prevList: Usuario[]) =>
      prevList.filter((user) => user.id !== userId)
    );
    handleSuccess(msg);
  }

  return (
    <UserContext.Provider value={{ deleteUser, list, addUser }}>
      <RouterProvider router={router} />;
      <ToastContainer />
    </UserContext.Provider>
  );
}
