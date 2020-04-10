import styled from 'styled-components';
const Container = styled.div`
  position: absolute;
  margin-left: 70px;
  margin-top: 70px;
  width: calc(100% - 70px);
  @media only screen and (max-width: 600px) {
    margin-left: 0px;
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  position: relative;
`;

export default Container;
