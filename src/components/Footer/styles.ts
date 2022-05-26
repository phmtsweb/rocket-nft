import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #252525;
  width: 100%;
`;

export const Header = styled.header`
  border-bottom: solid 1px #5a5757;
  width: 100%;

  > div {
    width: 100%;
    max-width: 127.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8.2rem;
    padding-bottom: 6rem;
    margin: 0 auto;

    > button {
      background-color: #ff5b50;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      width: 8rem;
      height: 8rem;
    }
  }
`;

export const ContainerFooter = styled.footer`
  border-top: solid 1px #5a5757;
  width: 100%;

  > div {
    width: 100%;
    max-width: 127.7rem;
    display: flex;
    justify-content: space-between;
    padding-top: 6.9rem;
    padding-bottom: 6.1rem;
    margin: 0 auto;

    > a {
      align-self: flex-end;
      color: #5a5757;
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.5rem;
    }

    > div {
      width: 27rem;
      display: flex;
      justify-content: space-between;

      > img {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 127.7rem;
`;

export const FooterMenu = styled.div`
  display: flex;
  margin-top: 6.7rem;
  margin-bottom: 5.3rem;
  margin-left: 12.2rem;
  height: 20rem;

  > ul {
    display: flex;
    list-style: none;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    li {
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.5rem;
      color: #5a5757;
    }

    li:first-child {
      font-weight: 700;
      color: #fff;
    }
  }

  ul + ul {
    margin-left: 12.8rem;
  }
`;
