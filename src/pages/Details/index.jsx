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

  async function handleRemove() {
    const confirm = window.confirm("Deseja mesmo excluir a nota?");

    if (confirm) {
      try {
        await api.delete(`/notes/${params.id}`);
        navigate("/");
        return;
      } catch (error) {
        if (error.response) {
          return toast.error(error.response.data.message);
        } else {
          return toast.error("Não foi possível excluir a nota")
        }
      }
    }
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
              <ButtonText title="Excluir nota" isActive onClick={handleRemove}/>
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