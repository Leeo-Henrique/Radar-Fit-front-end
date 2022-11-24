import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  height: 60px;
  margin-bottom: 20px;
  span {
    width: 50%;
    background-color: #2d3f46;
  }
  div {
    width: 50%;
    background-color: #222d35;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div input {
    background-color: #222d35;
    color: #8b8e8e;
    border: 0;
    width: 80%;
    height: 100%;
    padding-left: 10px;
  }
  svg {
    cursor: pointer;
  }
  div input:focus {
  }
`;
