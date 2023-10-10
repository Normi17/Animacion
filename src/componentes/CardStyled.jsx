import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  position: relative;
  z-index: 2;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row-reverse; 
  align-items: center; 
  padding: 5px;
  width: calc(20% - 1px);
  margin-right: 16px;
  background-color: #fff;
  position: relative;
  /* height: 211px;  */
  margin-top: -9%;

  

  &:last-child {
    margin-right: 0;
  }

  img {
    width: 64%;
    height: auto; 
    margin-top:-45%;
    object-fit: cover;
    margin-left: 26%; 

  }
`;

export const Cajas = styled.div`
  padding: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: space-between; 

  h2 {
    margin-top: 2px; 
    font-size: 1.2rem;
    color: #333;
    text-align: left; 
  }

  p {
    margin-top: 6px; 
    font-size: 1rem;
    color: #666;
    text-align: left; 
  }

  a {
    margin-top: 2px; 
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    text-decoration: none;
    align-self: flex-start; 

    &:hover {
      background-color: #0056b3;
    }
  }
`;





export const Blanco = styled.div`
  background: #eeebe9;
  padding: 65px;
  position: relative;
  z-index: 1;
  margin-top: -130px;
`;

export const Finish = styled.div`
  
`;
