import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  column-gap: 1.6rem;
  row-gap: 6rem;
  margin: 10rem auto 0;
  width: 100%;
  max-width: 127.7rem;
`;

export const ArtImage = styled.div`
  border: solid 1px #fff;
  width: 30.8rem;
  height: 19.8rem;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    transition: transform 0.6s;
  }

  &:hover > img {
    transform: scale(1.1);
  }
`;
