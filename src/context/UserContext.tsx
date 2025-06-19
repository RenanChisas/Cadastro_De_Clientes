import { createContext } from "react";

import type { Usuario } from "../types/userType";

type UsuarioContextType = {
  list: Usuario[];
  deleteUser: (userId: string, msg: string) => void;
  addUser: (newUser: Usuario, msg: string) => void;
};

export const UserContext = createContext<UsuarioContextType>({
  list: [],
  deleteUser: () => {},
  addUser: () => {},
});
