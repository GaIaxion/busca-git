import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;

  h1 {
    font-size: 60px;
    font-weight: lighter;
    font-family: 	Copperplate;
    font-style: oblique;
  }

  h3 {
    font-size: 18px;
    font-weight: normal;
    font-family: Lucida Console;
  }

  h4 {
    font-size: 17px;
    font-weight: bolder;
    font-family: Lucida Console;
    
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 10px;
    text-align: left;
    
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 20px;
    color: 	#800000;
    font-weight: bolder;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  border: 9px double black;
  width: 200px;
  margin: 20px;
  
`;
