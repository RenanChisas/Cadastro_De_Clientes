import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";

export function Add() {
  return (
    <>
      <Container>
        <Header title={"Adicionar Usuario"} isButton={false} />
      </Container>
      <Container>
        <Form msg="Usuario Adicionado Com Sucesso" />
      </Container>
    </>
  );
}
