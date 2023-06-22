import { useState } from 'react';
import { Card, Name, Art, Rate, Power, Description, Details } from "./CardHero.style";
import { Link } from "react-router-dom";
import { calculateRate } from '../../utils/CalculateRate';
import { renderPowerStats } from '../../utils/RenderPowerStats';
import { getRandomColor } from '../../utils/generateRandomColor';

export default function CardHero({ id, name, img, averagePowerstats, powerstats }) {
  const formattedPowerstats = averagePowerstats.toFixed(1);
  const shadowColor = getRandomColor();

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card shadowColor={shadowColor} onClick={handleClick} isFlipped={isFlipped}>
      {isFlipped ? (
        <>
          <Art src="./card_back.png" style={{ width: '200px', height: '100%' }} />
          <Description>
            <h3><em>PowerStats</em></h3>
            <ul>
            {renderPowerStats(powerstats)}
            </ul>
          </Description>
          <Link to={`/details/${id}`}>
            <Details>Details</Details>
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
