import { GrStar } from 'react-icons/gr';
import { Star } from '../components/CardHero/CardHero.style';

export const calculateRate = (average) => {
    const componentCount = Math.floor(average / 10);
    const components = [];

    for (let i = 0; i < componentCount; i++) {
      components.push(<Star key={i}><GrStar /></Star>);
    }

    return components;
  };