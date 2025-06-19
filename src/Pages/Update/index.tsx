import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import type { Usuario } from "../../types/userType";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUserContext } from "../../hook/useUserContext";

export function Update() {
  const [user, setUser] = useState<Usuario>();
  const { list } = useUserContext();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const userEncontrado = list.find((user) => user.id === id);

    if (!userEncontrado) {
      navigate("/erro");
    } else {
      setUser(userEncontrado);
    }
  }, [id, list, navigate]);
  return (
    <>
      <Container>
        <Header title={"Atualizar Usuario"} isButton={false} />
      </Container>
      <Container>
        <Form msg="Usuario Atualizar Com Sucesso" user={user} />
      </Container>
    </>
  );
}
