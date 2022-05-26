import arrowOrange from '../../assets/arrow-orange.svg';
import artista1 from '../../assets/artista-1.png';
import artista2 from '../../assets/artista-2.png';
import artista3 from '../../assets/artista-3.png';
import artista4 from '../../assets/artista-4.png';
import artista5 from '../../assets/artista-5.png';
import artista6 from '../../assets/artista-6.png';
import { ArtistCard } from '../ArtistCard';
import { Container, ContainerCards, LinkAll, Title } from './styles';

export function BestArtists() {
  return (
    <Container>
      <Title>
        Melhores <span>artistas</span>
      </Title>
      <ContainerCards>
        <ArtistCard
          img={artista1}
          artistName="Mayk Brito"
          description="80 fotografias"
        />
        <ArtistCard
          img={artista2}
          artistName="Jakeliny G."
          description="99 fotografias"
          isMarked
        />
        <ArtistCard
          img={artista3}
          artistName="João I. (Biro)"
          description="50 fotografias"
        />
        <ArtistCard
          img={artista4}
          artistName="Tamires Santos"
          description="43 fotografias"
        />
        <ArtistCard
          img={artista5}
          artistName="Ana Silva"
          description="28 fotografias"
        />
        <ArtistCard
          img={artista6}
          artistName="Diego F."
          description="20 fotografias"
        />
      </ContainerCards>
      <LinkAll>
        Ver todos os artistas{' '}
        <img src={arrowOrange} alt="seta para cima" loading="lazy" />
      </LinkAll>
    </Container>
  );
}
