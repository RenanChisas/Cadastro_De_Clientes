import styles from "./styles.module.css";
import type { Usuario } from "../../types/userType";
import { useUserContext } from "../../hook/useUserContext";
import { useNavigate } from "react-router-dom";

export function TableList() {
  const { list, deleteUser } = useUserContext();
  const navigate = useNavigate();
  function onUpdate(id: string) {
    navigate(`/update?id=${id}`);
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>descrição</th>
          <th>numero</th>
          <th>Acão</th>
        </tr>
      </thead>
      <tbody>
        {list.length === 0 && (
          <tr className={styles.semcliente}>
            <td colSpan={5}>Sem Clientes Cadastrados</td>
          </tr>
        )}
        {list.map((user: Usuario) => (
          <tr key={user.id}>
            <td>{user.nome}</td>
            <td>{user.email}</td>
            <td>{user.descricao}</td>
            <td>{user.numero}</td>
            <td className={styles.buttonlist}>
              <button
                onClick={() =>
                  deleteUser(user.id, "Cliente Deletado Com Sucesso")
                }
              >
                apagar
              </button>
              <button onClick={() => onUpdate(user.id)}>atualizar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
