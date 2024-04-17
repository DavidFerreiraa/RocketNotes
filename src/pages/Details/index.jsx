import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde esse molestiae, maxime possimus labore reiciendis aliquid perspiciatis deleniti fugiat repudiandae ad, voluptas assumenda vitae, vel commodi eaque enim ex.</p>
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
        </Content>
      </main>
    </Container>
  );
}