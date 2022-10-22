import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 2px dotted #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    font-family: Lucida Console;
  }

  button {
    background-color: #800000;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
      font-family: Impact;
    }

    span {
      font-weight: bold;
      color: #ffff;
      
    }
  }
`;
