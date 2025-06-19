import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { TableList } from "../../components/TableList";

export function List() {
  return (
    <>
      <Container>
        <Header title={"Clientes"} isButton={true} />
      </Container>
      <Container>
        <TableList />
      </Container>
    </>
  );
}
