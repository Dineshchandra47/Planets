import { Container, Sun, AsteroidsBelt } from "./KeyVisualStyles";
import { planets } from "./data";
import planetSwitch from "./PlanetSwitch";

export const keyVisual = ({ activePlanet }) => {
  const containerVarient = {
    hidden: {
      opacity: 0,
      scale: 6,
      rotate: -"40",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transiton: { delay: 1, duration: 3 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      rotate: "-10deg",
      transition: { duration: 1 },
    },
  };

  return (
    <Container
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Sun />

      {planets.map((planet) => (
        <planetSwitch
          data={planet}
          key={planet.id}
          activePlanet={activePlanet}
        />
      ))}
      

      <AsteroidsBelt />
    </Container>
  );
};
