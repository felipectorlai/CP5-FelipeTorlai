import styled from "styled-components";
export const lightTheme = {
    corFundo: '#f8f6e1',
    corTexto: 'dark',
    corTitulo: 'white'
}

export const darkTheme = {
    corFundo: '#414040',
    corTexto: 'white',
    corTitulo: '#f1eea8'
}

// Criando uma div
export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
`
// Criando um botão
export const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    background-color: #171515;
    color: white;
    margin: 2px;
`
// Criando um título
export const TitlePage = styled.h1`
    color: grey	;
    font-size: 20px;
`
export const InformacoesCep = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`
// Criando uma div para formulários
export const DivForm = styled.div`
    display: inline;
    background-color: #b4afaf;
    `