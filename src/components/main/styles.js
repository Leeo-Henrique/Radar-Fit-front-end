import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  padding: 50px;

  .line__grey {
    width: 100%;
    display: flex;
    background-color: #d4d5d4;
    height: 2px;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  section h1 {
    color: #2d3f46;
    font-weight: 400;
  }
  section button {
    background-color: #2c3e45;
    border: 0;
    width: 25px;
    height: 25px;
    padding-top: 2px;
    font-size: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
  }
  .content__main {
    display: flex;
  }
`;

export const DivStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
