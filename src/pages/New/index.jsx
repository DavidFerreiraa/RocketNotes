import { Link, useNavigate } from 'react-router-dom';

import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, Form } from './styles';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

import { useState } from 'react';

export function New(){
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");

    const [ links, setLinks ] = useState([]);
    const [ newLink, setNewLink ] = useState("");
    
    const [ tags, setTags ] = useState([]);
    const [ newTag, setNewTag ] = useState("");

    const navigate = useNavigate();

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted)); //return only links differents of the deleted
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }
    
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted)); //return only tags differents of the deleted
    }

    async function handleNewNote(){
        if (!title) {
            return toast.warn("Suas notas precisam de um título.")
        }

        if (newTag) {
            return toast.warn("Você deixou uma tag pra trás.😥");
        }

        if (newLink) {
            return toast.warn("Você deixou um link pra trás.😥");
        }

        try {
            await api.post("/notes", {
                title,
                description,
                tags,
                links
            })

            toast.success("Nota criada com sucesso!");
            navigate("/");
        } catch(error) {
            toast.error(error.response.data.message);
        }

    }

    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Textarea
                        placeholder="Observações"
                        onChange ={e => setDescription(e.target.value)}
                    />

                    <Section title="Link úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem 
                            isNew 
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                        key={String(index)}
                                        value={tag} 
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                            <NoteItem 
                                isNew 
                                placeholder="Nova tag" 
                                onChange={(e) => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button 
                        title="Salvar" 
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    );
}