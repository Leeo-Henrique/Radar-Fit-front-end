import styled from "styled-components";

export const ListStyled = styled.ul`
  width: 50%;
  padding: 0;
  gap: 10px;
  div {
    padding-left: 20px;
  }
  h2 {
    color: #2c3e45;
    font-size: 16px;
    font-weight: 500;
  }
  .list__product {
    gap: 20px;
    display: flex;
    flex-direction: column;
    max-height: 400px;
    padding-left: 10px;
  }
`;
