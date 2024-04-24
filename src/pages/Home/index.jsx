import { Container, Brand, Menu, Search, Content, NewNote } from './style.js';

import { ButtonText } from '../../components/ButtonText/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { Input } from '../../components/Input/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Note } from '../../components/Note/index.jsx';

import { useEffect, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { api } from '../../services/api.js';

export function Home(){
    const [ tags, setTags ] = useState([]);
    const [ seletedTags, setSelectedTags ] = useState([]);

    const [ search, setSearch ] = useState("");
    const [ notes, setNotes ] = useState([]);

    function handleSelectedTag(tagName) {
        const alreadySelected = seletedTags.includes(tagName);

        if  (tagName === "all") {
            return setSelectedTags([]);
        }

        if (alreadySelected) {
            setSelectedTags(prevState => prevState.filter(tag => tag !== tagName));
        } else {
            setSelectedTags(prevState => [...prevState, tagName]);
        }
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }

        fetchTags();
    }, [])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?search=${search}&tags=${seletedTags}`);

            setNotes(response.data);
        }

        fetchNotes();
    }, [seletedTags, search])
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li>
                    <ButtonText 
                        title="Todos"
                        onClick={() => handleSelectedTag("all")}
                        isActive={seletedTags.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name}
                                onClick={() => handleSelectedTag(tag.name)}
                                isActive={seletedTags.includes(tag.name)}
                            />
                        </li>
                    ))
                }
                
            </Menu>
            <Search>
                <Input 
                    placeholder="Pesquisar pelo título"
                    onChange={e => setSearch(e.target.value)}
                />
            </Search>
            <Content>
                <Section title="Minhas notas">
                    {   
                        notes.map(note => (
                            console.log(note.id),
                            <Note 
                                key={String(note.id)}
                                data={note}
                            />
                        ))
                    }
                </Section>
            </Content>
            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    );
}