import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Details() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const params = useParams();

  function handleBack() {

  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    
    fetchNote();
  }, []);

  return(
    <Container>
      <Header/>
      {
        data &&
          <main>
            <Content>
              <ButtonText title="Excluir nota" isActive/>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              { data.links &&
                <Section title="Links úteis">
                  <Links>
                    {
                      data.links.map((link) => (
                        <li key={String(link.id)}>
                          <a href={link.url} target="_blank">{link.url}</a>
                        </li>
                      ))
                    }
                  </Links>
                </Section>
              }
              { data.tags &&
                <Section title="Marcadores">
                  {
                    data.tags.map((tag) => (
                      <Tag title={tag.name} key={String(tag.id)}/>
                    ))
                  }
                </Section>
              }
              <Button title="Voltar ao início" onClick={() => navigate("/")}/>
            </Content>
          </main>
      }
    </Container>
  );
}