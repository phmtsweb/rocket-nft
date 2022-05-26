import astronauta1 from '../../assets/astronauta-1.png';
import astronauta2 from '../../assets/astronauta-2.png';
import astronauta3 from '../../assets/astronauta-3.png';
import astronauta4 from '../../assets/astronauta-4.png';
import { AstronautaCard } from '../AstronautaCard';
import { Container, ContainerAstronautas, Title } from './styles';

export function Populares() {
  return (
    <Container>
      <Title>
        <span>Populares</span> da semana
      </Title>
      <ContainerAstronautas>
        <div>
          <AstronautaCard
            title="Astrounauta 1"
            artist="Mayk Brito"
            value="1.5 RKT"
            img={astronauta1}
          />
          <AstronautaCard
            title="Astrounauta 3"
            artist="João Inácio (Biro)"
            value="3.75 RKT"
            img={astronauta3}
          />
        </div>
        <div></div>
        <div>
          <AstronautaCard
            title="Astrounauta 2"
            artist="Jakeline Gracielly"
            value="2.00 RKT"
            img={astronauta2}
          />
          <AstronautaCard
            title="Astrounauta 4"
            artist="Tamires Santos"
            value="4.30 RKT"
            img={astronauta4}
          />
        </div>
      </ContainerAstronautas>
    </Container>
  );
}
