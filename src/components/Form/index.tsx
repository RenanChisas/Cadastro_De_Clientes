import { useUserContext } from "../../hook/useUserContext";
import type { Usuario } from "../../types/userType";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";
import validator from "validator";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

type FormProps = {
  id?: string | null;
  user?: Usuario;
  msg: string;
};
export function Form({ id = null, user, msg }: FormProps) {
  const { addUser } = useUserContext();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Usuario>();
  useEffect(() => {
    if (user) reset(user);
  }, [user, reset]);

  const onSubmit = (data: Usuario) => {
    const newUser: Usuario = {
      ...data,
      id: id || uuidv4(),
    };

    addUser(newUser, msg);
  };
  return (
    <div className={styles.form}>
      <div className={styles.formitem}>
        <label>Nome:</label>
        <input
          className={errors?.nome && styles.errorInput}
          defaultValue={user?.nome ? user.nome : ""}
          type="text"
          placeholder="Digite o seu nome"
          {...register("nome", { required: true })}
        />
        {errors?.nome?.type === "required" && (
          <p className={styles.errorM}>Você esquece de colocar seu nome</p>
        )}
      </div>
      <div className={styles.formitem}>
        <label>Email:</label>
        <input
          className={errors?.email && styles.errorInput}
          defaultValue={user?.email ? user.email : ""}
          type="text"
          placeholder="Digite o seu email"
          {...register("email", {
            required: true,
            validate: (value) => validator.isEmail(value),
          })}
        />
        {errors?.email?.type === "required" && (
          <p className={styles.errorM}>Você esquece de colocar seu email</p>
        )}
        {errors?.email?.type === "validate" && (
          <p className={styles.errorM}>Seu email não é valido</p>
        )}
      </div>
      <div className={styles.formitem}>
        <label>Descrição:</label>
        <input
          className={errors?.descricao && styles.errorInput}
          defaultValue={user?.descricao ? user.descricao : ""}
          type="text"
          placeholder="Digite algo sobre você"
          {...register("descricao", { required: true })}
        />
        {errors?.descricao?.type === "required" && (
          <p className={styles.errorM}>Você esquece de colocar sua descrição</p>
        )}
      </div>
      <div className={styles.formitem}>
        <label>Numero de telefone:</label>
        <input
          className={errors?.numero && styles.errorInput}
          defaultValue={user?.numero ? user.numero : ""}
          maxLength={15}
          type="text"
          placeholder="(55) 9 9999 999"
          {...register("numero", {
            required: true,
            minLength: 15,
            onChange: (e) => {
              const raw = e.target.value.replace(/\D/g, "");
              const masked = raw
                .replace(/^(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{5})(\d)/, "$1 $2")
                .substring(0, 16);

              e.target.value = masked;
            },
          })}
        />
        {errors?.numero?.type === "required" && (
          <p className={styles.errorM}>Você esquece de colocar seu numero</p>
        )}
        {errors?.numero?.type === "minLength" && (
          <p className={styles.errorM}>Numero Invalido</p>
        )}
      </div>
      <button
        className={styles.enviar}
        onClick={() => {
          handleSubmit(onSubmit)();
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
