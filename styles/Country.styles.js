import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90%;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25px;
  border-radius: 5px;
  height: 600px;
  width: 450px;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  height: 60%;
  margin-left: -26%;

  @media (max-width: 992px) {
    margin-bottom: -150px;
    margin-left: -85%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    margin-bottom: -150px;
    margin-left: -85%;
    display: flex;
    align-items: center;
  }

  .icon {
    width: 40px;
    height: 40px;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ImgContainer = styled.div`
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 5px;
  height: 500px;
  width: 70%;

  h1 {
    color: black;
    font-size: 56px;
    padding-left: 15px;
  }

  @media (max-width: 992px) {
    height: 100%;
    width: 90%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const Div2Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  .icon1 {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    background: none;

    h1 {
      font-size: 46px;
      font-weight: 700;
      text-align: center;
      color: white;
    }
  }
`;

// ****************************** Container ******************************

export const DivCol = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: row;
  color: white;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    border-radius: 10px;
  }
`;

// ****************************** Col 1 ******************************
export const DivCol1 = styled.div`
  width: 50%;
  color: white;

  p {
    font-size: 16px;
    padding: 5px 0px 15px 15px;
  }

  @media (max-width: 992px) {
    text-align: center;
    width: 100%;
    color: black;

    p {
      padding: 12px;
    }
  }
`;

// ****************************** Sub Columns ******************************
export const DivCol1A = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 10px;

  @media (max-width: 1175px) {
    display: flex;
    height: 95%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
  }

  @media (max-width: 992px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  height: 50%;
  width: 50%;
`;

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    width: 35%;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    width: 30%;
  }
`;

export const DivCol1sm = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 10px;
  margin-top: 6px;

  h3 {
    color: white;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 0px;
    color: yellow;
  }

  h5 {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 300;
  }

  @media (max-width: 992px) {
    margin-left: 0px;
  }
`;

// ****************************** Col 2 ******************************
export const DivCol2 = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    background-color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleText = styled.h1`
  color: black;
  font-size: 22px;
  height: 50px;
`;
