import logoImg from '../../assets/logo.svg';
import logoButton from '../../assets/logo_MetaMask.svg';
import {
  ButtonCTA,
  HeaderContainer,
  LogoButton,
  LogoImage,
  MenuItem,
  MenuList,
} from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <LogoImage src={logoImg} alt="logo do site" />
      <MenuList>
        <MenuItem>Comprar NFT</MenuItem>
        <MenuItem>Sobre</MenuItem>
        <MenuItem>FAQ</MenuItem>
      </MenuList>
      <ButtonCTA>
        <LogoButton src={logoButton} alt="ícone de gatinho" />
        Conectar carteira
      </ButtonCTA>
    </HeaderContainer>
  );
}
