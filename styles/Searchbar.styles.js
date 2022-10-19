import styled from "styled-components";

export const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  align-items: center;

  .btn {
    align-items: center;
    background-clip: padding-box;
    background-color: #fa6400;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue",
      Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    vertical-align: baseline;
    width: 20%;
    height: 20px;

    &:hover {
      cursor: pointer;
      transform: translateY(-1px);
      opacity: 80%;
      background-color: green;
    }

    h3 {
      color: lightblue;
      text-align: center;
      font-weight: 300;
      font-size: 16px;
    }
  }
`;

export const SearchWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  padding-left: 0.5%;

  h2 {
    color: white;
    text-align: center;
    font-size: 24px;
    font-weight: 300;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 20px;
  padding-left: 10px;
  border-color: none;
  border-radius: 6.5px;
  border: 0.5px solid blue;
  height: 65px;
  background: rgb(25, 32, 50, 0.3);
  color: white;
  font-weight: 400;

  &::placeholder {
    color: whitesmoke;
    font-weight: 200;
  }
`;

export const DataResults = styled.div`
  width: 100%;
  overflow-y: scroll;
  background-color: white;
  border: solid 0.5px black;
  flex-direction: column;
  align-self: start;
  display: flex;
  position: relative;

  a {
    font-size: 14px;
    border-bottom: solid 0.5px lightgrey;
    padding: 15px;
  }

  a:hover {
    cursor: pointer;
    background-color: gray;
    opacity: 70%;
    color: white;
  }
`;
