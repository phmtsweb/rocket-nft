import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  padding-top: 1rem;
  & + & {
    margin-top: 5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.7rem;
    color: #fff;
  }

  img {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.4rem;
  margin-bottom: 2.6rem;
  span:first-child {
    font-weight: 600;
    color: #5a5757;
    line-height: 2.5rem;
    font-size: 2rem;
  }

  span:last-child {
    font-weight: 400;
    color: #ff5b50;
    line-height: 2.5rem;
    font-size: 2rem;
  }
`;

export const CardImage = styled.img`
  width: 35rem;
  height: auto;
`;
