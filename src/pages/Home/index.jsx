import { Container, Brand, Menu, Search, Content, NewNote } from './style.js';
import { FiPlus } from 'react-icons/fi';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { Input } from '../../components/Input/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Note } from '../../components/Note/index.jsx';

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li>
                    <ButtonText title="Todos" isActive/>
                </li>
                <li>
                    <ButtonText title="React"/>
                </li>
                <li>
                    <ButtonText title="Node"/>
                </li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>
            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: "React",
                        tags: [
                            {id: 1, name: "react"},
                            {id: 2, name: "react"},
                            {id: 3, name: "react"},
                            {id: 4, name: "react"}
                        ]
                    }}/>
                </Section>
            </Content>
            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    );
}