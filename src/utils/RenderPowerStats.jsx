import capitalizeFirstLetter from "./Capitalize";

export function renderPowerStats(powerstats) {
  return Object.entries(powerstats).map(([statName, statValue]) => {
    const formattedStatName = capitalizeFirstLetter(statName);
    return (
      <li key={statName} style={{ background: 'black', padding: '6px', borderRadius: '10px', marginBottom: '7px', border: '1px solid white' }}>
        <em>{formattedStatName}: {statValue}</em>
      </li>
    );
  });
}
