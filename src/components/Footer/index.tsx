import arrowBlack from '../../assets/arrow-black.svg';
import email from '../../assets/email.svg';
import instagram from '../../assets/instagram.svg';
import logo from '../../assets/logo.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
import { FooterForm } from '../FooterForm';
import {
  Container,
  ContainerFooter,
  ContentFooter,
  FooterMenu,
  Header,
} from './styles';

export function Footer() {
  function handleClickTop() {
    window.scrollTo({
      top: 0,
    });
  }
  return (
    <Container>
      <Header>
        <div>
          <img src={logo} alt="logo" loading="lazy" />
          <button onClick={handleClickTop}>
            <img src={arrowBlack} alt="seta para cima" loading="lazy" />
          </button>
        </div>
      </Header>
      <ContentFooter>
        <FooterForm />
        <FooterMenu>
          <ul>
            <li>Empresa</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Time</li>
            <li>Carreira</li>
          </ul>
          <ul>
            <li>Mapa</li>
            <li>Galeria</li>
            <li>Populares</li>
            <li>Vendas</li>
            <li>Contato</li>
          </ul>
          <ul>
            <li>Links</li>
            <li>FAQs</li>
            <li>Termos</li>
            <li>Política</li>
            <li>Ajuda</li>
          </ul>
        </FooterMenu>
      </ContentFooter>

      <ContainerFooter>
        <div>
          <a href="#">www.rocketseat.com.br</a>
          <div>
            <img src={instagram} alt="instagram" loading="lazy" />
            <img src={youtube} alt="youtube" loading="lazy" />
            <img src={twitter} alt="twitter" loading="lazy" />
            <img src={email} alt="email" loading="lazy" />
          </div>
        </div>
      </ContainerFooter>
    </Container>
  );
}
