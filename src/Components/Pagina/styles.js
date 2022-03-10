import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: -750px;
    width: 70%;
    margin-left: 25%;

    @media (max-width: 800px){
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        border: 1px solid #ccc;
        width: 100%;
        
        .item {
            margin: 20px;
            text-align: center;
            font-size: 1.5em;
        }
    }
`

export const BotaoComprar = styled.button`
    width: 100%;
    height: 30px;
    background-color: black;
    color: white;
    textAlign: center;
    size=large;
    variant=contained;
        @media (max-width: 800px){
            width: 100%;
            background-color: black;
            color: white;
            textAlign: center;
            size=large;
            variant=contained;
            margin-left: 6%;
    }
`