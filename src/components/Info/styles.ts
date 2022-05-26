import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 66rem;
  display: grid;
  grid-template-areas: 'aside content-info content-info content-info content-info';
`;

export const ContentInfo = styled.div`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: solid 1px #5a5757;
  min-width: 28.2rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    strong {
      font-weight: 600;
      font-size: 5rem;
      line-height: 6.1rem;
      color: #fff;
    }

    span {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.5rem;
      color: #5a5757;
    }
  }
`;

export const ContentText = styled.div`
  border-left: solid 1px #5a5757;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: calc(100% - 30rem);

  > div {
    height: 100%;
    flex: 1 1 50%;
    padding: 7rem 13.8rem 7rem 6.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p,
    a {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.2rem;
      color: #fff;
    }

    a {
      text-decoration: underline;
    }
  }
`;

export const Banner = styled.img`
  max-width: 115.8rem;
  height: auto;
`;

export const ContentRight = styled.div`
  grid-area: content-info;
`;
