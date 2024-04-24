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

    function handleSelectedTag(tagName) {
        const alreadySelected = seletedTags.includes(tagName);

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
                    <li>
                        <ButtonText 
                            key={String(tag.id)}
                            title={tag.name}
                            onClick={() => handleSelectedTag(tag.name)}
                            isActive={seletedTags.includes(tag.name)}
                        />
                    </li>
                ))
                }
                
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>
            <Content>
                <Section title="Minhas notas">
                    <Note 
                    data={{
                        title: "React",
                        tags: [
                            {id: 1, name: "react"},
                            {id: 2, name: "react"},
                            {id: 3, name: "react"},
                            {id: 4, name: "react"}
                        ]
                    }}
                    
                    />
                </Section>
            </Content>
            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    );
}