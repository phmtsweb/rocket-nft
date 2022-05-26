import { Container } from './styles';

export function FooterForm() {
  return (
    <Container>
      <h3>Fique por dentro de</h3>
      <span>todas as novidades</span>
      <div>
        <input type="text" placeholder="nft@rocketseat.com.br" />
        <button>Enviar</button>
      </div>
    </Container>
  );
}
