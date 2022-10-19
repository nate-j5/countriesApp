import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .icon1 {
    color: white;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 70%;
  margin-top: -20%;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-top: -35%;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 562px) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const InnerWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;

  h3 {
    color: white;
    font-weight: 300;
    font-size: 26px;
  }
`;

export const Grid = styled.div`
  padding-top: 1.3%;
  display: grid;
  width: 93%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 10px;

  @media (max-width: 992px) {
    padding-top: 40%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background-color: black;
    opacity: 90%;
    color: white;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 6.5rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: auto;
  }
`;

export const TxtContainer = styled.div`
  width: 100%;
  padding-left: 3px;
`;

export const InnerTxtContainer = styled.div`
  padding-left: 3px;
  display: flex;
  flex-direction: column;

  h2 {
    padding-top: 20px;
  }

  p {
    font-size: 16px;
    margin-top: -7px;
    padding-bottom: 10px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  width: 45%;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
  position: static;

  .paginationDiv {
    width: 100%;
    justify-content: space-evenly;
    display: flex;
    padding: 3% 1%;
    align-items: center;
    list-style: none;
    color: white;
    font-size: 22px;
    font-weight: 300;
  }

  .page {
    list-style: none;
    display: flex;
    width: 5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2px;
    border-radius: 10%;
    padding: 1% 3.5%;

    &:hover {
      color: whitesmoke;
      background-color: darkgreen;
      cursor: pointer;
    }
  }

  .active {
    color: whitesmoke;
    background-color: darkgreen;
    padding-bottom: 1%;
  }

  .next {
    &:hover {
      color: yellow;
      cursor: pointer;
    }
  }
`;

export const BottomDiv = styled.div`
  display: flex;
  margin-top: -14%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 19%;
  background: rgb(110, 78, 32, 0.9);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: rgb(110, 90, 22, 0.9);
  }

  h3 {
    color: white;
    padding-left: 10px;
    font-weight: 300;
  }

  @media (max-width: 1212px) {
    margin-top: -19%;
    width: 40%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 992px) {
    margin-top: -18%;
    width: 40%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    margin-top: -20%;
    width: 50%;
    display: flex;
    align-items: center;
  }
`;
