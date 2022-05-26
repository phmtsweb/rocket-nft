import { ArtistInfo, Card, CardImage } from './styles';

type CardProps = {
  artistName: string;
  description: string;
  img: string;
  isMarked?: boolean;
};

export function ArtistCard({
  isMarked = false,
  artistName,
  description,
  img,
}: CardProps) {
  return (
    <Card isMarked={isMarked}>
      <CardImage src={img} alt={img} loading="lazy" />
      <ArtistInfo isMarked={isMarked}>
        <span>{artistName}</span>
        <span>{description}</span>
      </ArtistInfo>
    </Card>
  );
}
