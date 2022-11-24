import styled from "styled-components";

export const ProductStyled = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  
  div * {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 20px;
  }
  p {
    color: #778184;
  }
  svg {
    transform: scaleX(-1);
    cursor: pointer;
    color: #2d3f46;
    width: 25px;
    height: 25px;
  }
`;
