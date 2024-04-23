import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { api } from '../../services/api';

export function Header(){
    const { signOut, user } = useAuth();

    const avatarURL = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

    return (
        <Container>
            <Profile to="/profile">
                <img
                    src={avatarURL}
                    alt="Imagem do usuário"
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>David Ferreira</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}