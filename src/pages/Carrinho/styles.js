import styled from "styled-components";

export const Container = styled.div``;

export const BotaoHome = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    margin-left: 35%;

    width: 30%;
    height: 70px;

    background: #7b56A0;
    border-radius: 0.7rem;
    color: white;

    font-size: 18px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        color: #7b56A0;
        background: #dddeee;
    }
`