import styled from "styled-components";

export const Container = styled.div`
  
    display: block;
    max-width: 100%;
    height: auto;
    
`;

export const Header = styled.header`
    display: flex;
    width: 100vw;
    height: 20vh;
    background: #f8f7f7;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const Nav = styled.nav`
    width: 90%;
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const NavBarActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
`
export const Table = styled.table`
    border: 3px solid grey;
    height: 20px;
    width: 90%;
    font-size: 17px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    padding: 30px;
    margin-left: 10px;
`
export const BotaoQuantidade = styled.button`
    width: 50%;
    height: 30px;
    border: 1px solid #7b56A0;

    background: transparent;
    font-weight: bold;
    border-radius: 0.7rem;
    color: #7b56A0;

    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background: #dddeee;
    }
`

export const BotaoRemover = styled.button`
    width: 100%;
    height: 30px;
    border: 1px solid #7b56A0;

    background: transparent;
    border-radius: 0.7rem;
    color: #7b56A0;
    font-weight: bold;

    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        color: #7b56A0;
        background: #dddeee;
    }
`