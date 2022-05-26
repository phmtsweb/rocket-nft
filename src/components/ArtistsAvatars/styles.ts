import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

type ArtistAvatarProps = {
  zIndex: number;
};

export const ContainerAvatar = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 22rem;
  height: 100%;
`;

export const ArtistAvatar = styled.img<ArtistAvatarProps>`
  z-index: ${({ zIndex }) => 5 - zIndex};
  position: absolute;
  transition: all 0.5s;

  ${({ zIndex }) => {
    if (zIndex > 1) {
      return css`
        left: ${(zIndex - 1) * 4}rem;
      `;
    }
  }};

  &:hover {
    z-index: 10;
    transform: scale(1.1) translateY(-1rem);
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #fff;
  height: 4.8rem;
  justify-content: space-between;
  strong {
    font-weight: 700;
  }
  span {
    font-weight: 400;
  }
`;
