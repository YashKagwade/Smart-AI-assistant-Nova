import styled from 'styled-components';

export const MainHead = styled.h1`
  font-size: 2.5rem;
  color: white;
  text-align: center;
  font-family: "Winky Rough", sans-serif;
  margin-top: 100px;
`;
export const imgDiv=styled.div`

width: 100%;
height: 100vh;
overflow: hidden;
display: flex;
align-items: center;
justify-content: start;
flex-direction: column;
`;

export const cstspan=styled.span`
margin-top: 20px;
color: skyblue;
font-size: 3vmax;
background: linear-gradient(to right, #f90707, #002aff);
background-clip: text;
color:transparent;

`;


export const stylimg=styled.img`
margin-top: 60px;

height: 50%;
`;

export const Button=styled.button`
  height: 50px;
  width: 300px;
  
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 20px ;
  border-radius: 20px;
  border: none;
  margin-top: 30px;
  font-size: larger;
  background-color: #74a8fb;
  box-shadow: 2px 2px 50px #74a8fb;
`;



export const spkdiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
max-width: 100%;

  img {
    height: 200px;
    width: 200px;
    object-fit: contain;
  }
  p{

color: white;


  }
`;

export const aiimg = styled.img`
  height: 150px;
  width: 400px;
  object-fit: contain;
`;


