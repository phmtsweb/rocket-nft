import galeria1 from '../../assets/galeria-1.png';
import galeria2 from '../../assets/galeria-2.png';
import galeria3 from '../../assets/galeria-3.png';
import galeria4 from '../../assets/galeria-4.png';
import galeria5 from '../../assets/galeria-5.png';
import galeria6 from '../../assets/galeria-6.png';
import galeria7 from '../../assets/galeria-7.png';
import galeria8 from '../../assets/galeria-8.png';
import { ArtImage, Container } from './styles';

export function ImageGallery() {
  return (
    <Container>
      <ArtImage>
        <img src={galeria1} alt="" loading="lazy" />
      </ArtImage>
      <ArtImage>
        <img src={galeria2} alt="" loading="lazy" />
      </ArtImage>
      <ArtImage>
        <img src={galeria3} alt="" loading="lazy" />
      </ArtImage>
      <ArtImage>
        <img src={galeria4} alt="" loading="lazy" />
      </ArtImage>
      <ArtImage>
        <img src={galeria5} alt="" loading="lazy" />
      </ArtImage>
      <ArtImage>
        <img src={galeria6} alt="" loading="lazy" />
      </ArtImage>
      <ArtImage>
        <img src={galeria7} alt="" loading="lazy" />
      </ArtImage>
      <ArtImage>
        <img src={galeria8} alt="" loading="lazy" />
      </ArtImage>
    </Container>
  );
}
