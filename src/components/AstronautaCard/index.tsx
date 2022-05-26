import arrowWhite from '../../assets/arrow-white.svg';
import { Card, CardImage, ContainerInfo, Header } from './styles';

type AstronautaCard = {
  title: string;
  artist: string;
  value: string;
  img: string;
};

export function AstronautaCard({ title, artist, value, img }: AstronautaCard) {
  return (
    <Card>
      <Header>
        <h3>{title}</h3>
        <img src={arrowWhite} alt="" loading="lazy" />
      </Header>
      <ContainerInfo>
        <span>{artist}</span>
        <span>{value}</span>
      </ContainerInfo>
      <CardImage src={img} alt={img} loading="lazy" />
    </Card>
  );
}
