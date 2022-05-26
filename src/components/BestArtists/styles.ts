import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 127.7rem;
  margin: 0 auto 14.8rem;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 5rem;
  color: #fff;

  span {
    color: #ff5b50;
  }
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  column-gap: 11.1rem;
  row-gap: 11.1rem;
  align-self: stretch;
  margin-top: 12rem;
  margin-bottom: 5.4rem;
`;

export const LinkAll = styled.a`
  color: #fff;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.5rem;
  display: flex;
  align-items: center;
  img {
    width: 1.7rem;
    height: 1.7rem;
    margin-left: 1.3rem;
  }
`;
