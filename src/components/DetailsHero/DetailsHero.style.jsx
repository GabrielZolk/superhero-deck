import styled from 'styled-components';

export const DetailsCard = styled.div`
    border: 5px solid #5815c4;
    border-radius: 10px;
    padding: 20px;
    margin: 30px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.9);
    justify-content: center;

    #left-div {
        width: 30%;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
    }

    #right-div {
        justify-content: space-between;
        display: flex;
        flex-direction: column;
    }

    
    @media only screen and (max-width: 1040px) {
        display: block;
        text-align: center;

        #left-div {
            width: 100%;

            h1 {
                margin-top: 10px;
            }
        }

        #right-div {
            width: 100%;

            h1 {
                margin-top: 10px;
            }
        }
    }

    @media only screen and (max-width: 620px) {
        #image {
            width: 100%;
        }
    }
`

export const CardInfo = styled.div`
    color: black;
    font-weight: 900;
    background-color: gold;
    height: fit-content;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #5815c4;
    height: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
        color: white;
        background-color: black;
        height: fit-content;
        padding: 10px;
        border-radius: 10px;
    }

    ul li {
        margin-top: 10px;
        list-style-type: none;
        background-color: white;
        padding: 5px;
        border-radius: 10px;
    }

    @media only screen and (max-width: 370px) {
        h1 {
            font-size: 1.3rem;
        }

        ul li {
            font-size: .9rem;
        }
    }
`

export const Back = styled.div`
    margin: 20px 0 0 40px;
    color: white;
    background-color: #5815c4;
    width: fit-content;
    padding: 4px;
    border-radius: 4px;
`