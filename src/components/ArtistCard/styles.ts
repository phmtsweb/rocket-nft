import styled from 'styled-components';

type CardProps = {
  isMarked: boolean;
};

export const Card = styled.div<CardProps>`
  width: 35rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.1s;

  background-color: ${({ isMarked }) => (isMarked ? '#ff5b50' : '#252525')};

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin-right: 4rem;
`;

export const ArtistInfo = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  span {
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem;
  }

  span:last-child {
    margin-top: 1rem;
    color: ${({ isMarked }) => (isMarked ? '#fff' : '#ff5b50')};
  }
`;
