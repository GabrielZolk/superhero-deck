import React, { useState, useEffect } from 'react';
import api from "../services/api";
import CardHero from "../components/CardHero/CardHero";
import { Background, Grid, Input } from "../components/Grid/Grid.style";
import Loading from '../components/Loading/Loading';

const Home = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  async function getHeroData() {
    const selectedHeroIds = ["489", "17", "30", "31", "35", "34", "38", "60", "63", "64", "65", "66", "67", "68", "69", "70", "71", "73", "95", "106", "107", "108", "149", "156", "160", "161", "165", "196", "194", "226", "225", "233", "263", "265", "266", "267", "275", "278", "280", "282", "283", "303", "308", "307", "309", "310", "313", "314", "315", "316", "316", "317", "318", "332", "346", "370", "394", "405", "414", "416", "418", "427", "444", "476", "480", "485", "490", "527", "561", "589", "618", "619", "620", "621", "622", "623", "624", "625", "638", "637", "643", "644", "654", "655", "659", "660", "680", "687", "688", "689", "698", "697", "703", "714", "717", "718", "719", "720", "724", "730"];

    const heroesData = await Promise.all(
      selectedHeroIds.map(async (heroId) => {
        const response = await api.get(heroId);
        return response.data;
      })
    );
    setHeroes(heroesData);
    console.log(heroesData);
    setLoading(false);
  }

  useEffect(() => {
    getHeroData();
  }, []);

  const calculateAveragePowerstats = (powerstats) => {
    const totalPowerstats = Object.values(powerstats)
      .map(Number)
      .reduce((total, value) => total + value, 0);

    return totalPowerstats / Object.keys(powerstats).length;
  };

  if (loading) {
    return <Loading />;
  }

  return (
<>
    <Input
      type="text"
      placeholder="Find a Hero by name or ID"
      value={searchText}
      onChange={(event) => setSearchText(event.target.value)}
    />
    <Grid>
      <Background src="/bg.png" />
      {heroes
        .filter(
          (hero) =>
            hero.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
            String(hero.id) === searchText
        )
        .map((hero, index) => (
          <CardHero
            key={index}
            id={hero.id}
            name={hero.name}
            img={hero.image.url}
            averagePowerstats={calculateAveragePowerstats(hero.powerstats)}
            powerstats={hero.powerstats}
          />
        ))}
    </Grid>
  </>
  );
};

export default Home;
