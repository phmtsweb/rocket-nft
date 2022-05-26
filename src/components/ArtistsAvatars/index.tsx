import artista1 from '../../assets/artista-1.png';
import artista2 from '../../assets/artista-2.png';
import artista3 from '../../assets/artista-3.png';
import artista4 from '../../assets/artista-4.png';
import {
  ArtistAvatar,
  Container,
  ContainerAvatar,
  ContainerInfo,
} from './styles';

export function ArtistsAvatars() {
  return (
    <Container>
      <ContainerAvatar>
        <ArtistAvatar src={artista1} alt="artista-1" zIndex={1} />
        <ArtistAvatar src={artista2} alt="artista-2" zIndex={2} />
        <ArtistAvatar src={artista3} alt="artista-3" zIndex={3} />
        <ArtistAvatar src={artista4} alt="artista-4" zIndex={4} />
      </ContainerAvatar>
      <ContainerInfo>
        <strong>+10</strong>
        <span>Artistas selecionados</span>
      </ContainerInfo>
    </Container>
  );
}
