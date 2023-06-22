import styled, { css } from "styled-components";

export const Card = styled.div`
  background-image: url('./card.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 15px;
  border-radius: 8px;
  width: fit-content;
  margin: 0 auto;
  transition: .5s;
  min-height: 400px;

  ${props =>
    props.isFlipped &&
    css`
      transform: rotateY(180deg);
    `}

  &:hover {
    box-shadow: 0px 0px 200px ${props => props.shadowColor};
    cursor: pointer;
}
`;

export const Name = styled.div`
  border-top: 2px solid white;
  border-left: 2px solid white;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  margin-bottom: 7px;
  background-image: url('./badge.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 5px;
  color: white;
  text-align: center;
`;

export const Art = styled.img`
  border: 2px solid black;
  position: relative;
`;

export const Rate = styled.div`
  background-image: url('./badge.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ff9900;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  margin-bottom: 2px;
  justify-content: center;
`;

export const Star = styled.div`
  background-color: #ee3f3f;
  margin-right: 1px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Power = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  border-bottom: 2px solid black;
  font-weight: 900;
  text-align: center;
`;

export const Description = styled.p`
    position: absolute;
    transform: rotateY(180deg);
    top: 30px;
    right: 25px;
    color: white;
    font-weight: 900;
    letter-spacing: 2px;

    h3 {
        margin: 0 0 15px;
        background-color: white;
        color: black;
        border-radius: 10px;
        padding: 4px;
        border: 1px solid black;
    }
`

export const Details = styled.button`
  background-color: gold;
  transform: rotateY(180deg);
  position: absolute;
  bottom: 25px;
  left: 23px;
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-weight: 900;
  font-size: 1.3rem;
  letter-spacing: 2px;
  cursor: help;
  color: black;
  border: 1px solid white;
`
