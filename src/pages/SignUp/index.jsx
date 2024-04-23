import { useState } from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { toast } from "react-toastify";

import { Background, Container, Form } from "./styles";
import { api } from "../../services/api";
import 'react-toastify/dist/ReactToastify.css';

export function SignUp(){
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password) {
            return toast.warn("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password }, )
            .then(() => {
                toast.success("Usuário cadastrado com sucesso!");
                navigate("/")
    })
            .catch(error => {
                if (error.response) {
                    return toast.error(error.response.data.message);
                } else {
                    console.log(error);
                    return toast.error("Não foi possível cadastrar o usuário.");
                }
            })
    }

    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e grerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Cadastrar" onClick={handleSignUp} />
                <Link to="/">Voltar para o login</Link>
            </Form>
        </Container>
    );
}