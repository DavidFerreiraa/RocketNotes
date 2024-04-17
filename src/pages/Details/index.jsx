import { Container, Links } from "./styles";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return(
    <Container>
      <Header/>
      <ButtonText title="Excluir nota"/>
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
        <Tag title="Express"/>
        <Tag title="Node"/>
      </Section>
      <Button title="My button" loading/>
    </Container>
  );
}