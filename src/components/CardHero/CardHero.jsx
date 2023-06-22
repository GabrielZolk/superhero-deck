import { useState } from 'react';
import { Card, Name, Art, Rate, Star, Power, Description, Details } from "./CardHero.style";
import { Link } from "react-router-dom";
import { GrStar } from 'react-icons/gr';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function CardHero({ id, name, img, averagePowerstats, powerstats }) {
  const formattedPowerstats = averagePowerstats.toFixed(1);
  const shadowColor = getRandomColor();

  const [isFlipped, setIsFlipped] = useState(false);

  const calculateRate = (average) => {
    const componentCount = Math.floor(average / 10);
    const components = [];

    for (let i = 0; i < componentCount; i++) {
      components.push(<Star key={i}><GrStar /></Star>);
    }

    return components;
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDetailsClick = () => {
    localStorage.setItem('selectedCardId', id);
  };

  const renderPowerStats = () => {
    return Object.entries(powerstats).map(([statName, statValue]) => {
      const formattedStatName = capitalizeFirstLetter(statName);
      return (
        <li key={statName} style={{ background: 'black', padding: '6px', borderRadius: '10px', marginBottom: '7px', border: '1px solid white' }}>
          <em>{formattedStatName}: {statValue}</em>
        </li>
      );
    });
  };

  return (
    <Card shadowColor={shadowColor} onClick={handleClick} isFlipped={isFlipped}>
      {isFlipped ? (
        <>
          <Art src="./card_back.png" style={{ width: '200px', height: '100%' }} />
          <Description>
            <h3><em>PowerStats</em></h3>
            <ul>
              {renderPowerStats()}
            </ul>
          </Description>
          <Link to={`/details/${id}`}>
            <Details onClick={handleDetailsClick}>Details</Details>
          </Link>
        </>
      ) : (
        <>
          <Name>{name}</Name>
          <Rate>{calculateRate(averagePowerstats)}</Rate>
          <Art src={img} style={{ width: '200px' }} />
          <Power>Brute Power: {formattedPowerstats}</Power>
        </>
      )}
    </Card>
  );
}
