import styled from "styled-components";

export const AsideStyled = styled.aside`
  width: 50%;
  padding: 0;
  gap: 10px;
  margin: 16px 0;
  padding-left: 20px;
  .detailed__product {
    padding-left: 10px;
    margin-bottom: 20px;
  }
  h2 {
    color: #2c3e45;
    font-size: 16px;
    font-weight: 500;
  }
  h3 {
    color: #48a18c;
    font-size: 16px;
    font-weight: 600;
  }
  p {
    color: #2c3e45;
    font-weight: 600;
    margin: 0;
  }
  span {
    color: #91989b;
  }
  .list__product {
    gap: 20px;
    display: flex;
    flex-direction: column;
    max-height: 400px;
    padding-left: 0;
  }
  .content__descrition {
    margin-top: 10px;
    padding-left: 10px;
  }
  .reset {
    border-radius: 0;
    width: 140px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
  .detailed__edit__product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
  svg {
    transform: scaleX(-1);
    cursor: pointer;
    color: #2d3f46;
    width: 25px;
    height: 25px;
  }
`;
