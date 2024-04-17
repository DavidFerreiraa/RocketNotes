import { Container, Links } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export function Details() {
  return(
    <Container>
      <Header/>
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="https://www.rocketseat.com.br/" target="_blank">https://www.rocketseat.com.br/</a>
          </li>
          <li>
            <a href="https://www.rocketseat.com.br/" target="_blank">https://www.rocketseat.com.br/</a>
          </li>
        </Links>
      </Section>
      <Section title="Marcadores">
        
      </Section>
      <Button title="My button" loading/>
    </Container>
  );
}