import styled from 'styled-components';

export const MainContent = styled.section`
  max-width: 127.7rem;
  width: 100%;
  margin: 0 auto;
  height: 24.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem 0;
  flex: 2.2;
  height: 100%;

  > p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #fff;
  }
`;

export const ColumnTwo = styled.div`
  flex: 2.8;
  height: 100%;
  font-weight: 700;

  h1:first-child {
    color: #fff;
    font-size: 5rem;
  }

  h1:last-child {
    color: #ff5b50;
    font-size: 5rem;
  }
`;

export const ColumnThree = styled.div`
  flex: 1;
`;
