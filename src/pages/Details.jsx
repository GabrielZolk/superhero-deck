import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import DetailsHero from '../components/DetailsHero/DetailsHero';
import Loading from '../components/Loading/Loading';

function Details() {
  const { id } = useParams();
  const [heroDetails, setHeroDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroDetails = async () => {
      try {
        const response = await api.get(`/${id}`);
        setHeroDetails(response.data);
        console.log('details:', response.data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hero details:', error);
      }
    };

    fetchHeroDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <DetailsHero 
        appearance={heroDetails.appearance}
        img={heroDetails.image.url}
        biography={heroDetails.biography}
        connections={heroDetails.connections}
        work={heroDetails.work}
    />
  );
}

export default Details;
