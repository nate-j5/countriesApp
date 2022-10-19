import styled from "styled-components";

export const Div = styled.div`
  background-color: black;
  top: 0;
  width: 100vw;
  display: flex;
  height: 3.6rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    color: white;
  }

  .back {
    color: white;
    height: 22px;
    width: 22px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const InnerWrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  p:hover {
    cursor: pointer;
  }

  .icon {
    color: white;
    height: 1.5rem;
    width: 1.5rem;
  }

  .icon:hover {
    cursor: pointer;
  }
`;
