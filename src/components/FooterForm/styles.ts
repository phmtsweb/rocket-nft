import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 6.7rem;
  padding-bottom: 5.3rem;
  border-right: solid 1px #5a5757;
  padding-right: 6.2rem;
  > h3 {
    color: #fff;
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.7rem;
  }

  > span {
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.7rem;
    color: #ff5b50;
  }

  > div {
    display: flex;
    height: 6.6rem;
    align-items: stretch;
    margin-top: 4.5rem;
    > input {
      width: 28rem;
      background-color: #000;
      padding: 2rem;
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.5rem;
      color: #fff;
      border: none;
      &::placeholder {
        color: #5a5757;
      }
    }

    > button {
      width: 12.2rem;
      border: none;
      background-color: #fff;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
`;
