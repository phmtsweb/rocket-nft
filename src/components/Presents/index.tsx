import badge from '../../assets/badge.svg';
import { ArtistsAvatars } from '../ArtistsAvatars';
import { ColumnOne, ColumnThree, ColumnTwo, MainContent } from './styles';

export function Presents() {
  return (
    <MainContent>
      <ColumnOne>
        <p>
          Mercado digital para colecionáveis em criptos e tokens não fungível
          (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
        </p>
        <ArtistsAvatars />
      </ColumnOne>
      <ColumnTwo>
        <h1>Descubra a verdadeira arte digital e colecione diversas</h1>
        <h1>NFTs</h1>
      </ColumnTwo>
      <ColumnThree>
        <img src={badge} alt="" loading="lazy" />
      </ColumnThree>
    </MainContent>
  );
}
