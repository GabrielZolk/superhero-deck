import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 30px;
    margin: 20px 0 20px;
    height: 100%;

    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 740px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Background = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    filter: blur(5px);
    z-index: -1;
    min-height: 100vh;
    min-width: 100vw;
`

export const Input = styled.input`   
    width: 90%;
    padding: 10px;
    margin: 20px auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    outline: none;
    border: 2px solid white;
    border-radius: 8px;
    background: linear-gradient(to right, #eb3e3e, #00009b);
`

export const Select = styled.select`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 8px;
    outline: none;
    background: linear-gradient(to right, #eb3e3e, #00009b);
    color: white;
    border: 2px solid white;

    option {
        background: black;
    }
`