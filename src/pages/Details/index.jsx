import { Container } from "./styles";
import { Button } from "../../components/Button";

export function Details() {
  return(
    <Container>
      <h1>Hello world!</h1>
      <Button title="My button" loading/>
    </Container>
  );
}