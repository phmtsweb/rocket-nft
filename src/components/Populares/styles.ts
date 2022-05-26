import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 127.7rem;
  width: 100%;
  margin: 15rem auto;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 5rem;
  color: #fff;
  margin-bottom: 17.2rem;
  span {
    color: #ff5b50;
  }
`;

export const ContainerAstronautas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div:not(:nth-child(2)) {
    flex: 0 1 calc(50% - 1px);
    display: flex;
    flex-direction: column;
  }

  > div:nth-child(2) {
    flex: 1px;
    align-self: stretch;
    background-color: #5a5757;
  }

  > div:last-child {
    align-items: flex-end;
  }
`;
