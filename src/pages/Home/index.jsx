import { FiPlus } from 'react-icons/fi';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { Container, Brand, Menu, Search, Content, NewNote } from './style.js';
import { Input } from '../../components/Input/index.jsx';

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

            </Content>
            <NewNote>
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    );
}