import banner from '../../assets/banner.png';
import {
  Banner,
  Container,
  ContentInfo,
  ContentRight,
  ContentText,
} from './styles';

export function Info() {
  return (
    <Container>
      <ContentInfo>
        <div>
          <strong>10K+</strong>
          <span>Artes</span>
        </div>
        <div>
          <strong>200+</strong>
          <span>Vendas</span>
        </div>
        <div>
          <strong>20</strong>
          <span>Artistas</span>
        </div>
      </ContentInfo>

      <ContentRight>
        <ContentText>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id potenti diam et cras odio
              viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
              semper.
            </p>
            <a href="#">Lorem ipsum</a>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id potenti diam et cras odio
              viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
              semper.
            </p>
            <a href="#">Lorem ipsum</a>
          </div>
        </ContentText>
        <Banner src={banner} alt="" loading="lazy" />
      </ContentRight>
    </Container>
  );
}
