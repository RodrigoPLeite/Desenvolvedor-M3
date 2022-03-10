import styled from "styled-components";

export const Container = styled.div`

    @media only screen and (max-width: 800px) {
        .desktop{ display: none !important;}
    }
    @media only screen and (min-width: 800px) {
        .mobile{ display: none !important;}
    }
`