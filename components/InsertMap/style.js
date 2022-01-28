import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const FormGroup = styled.div`
  heigth: 50vh;
  width: 50%;
  margin: 0 auto;

`;

export const ComponentCount = styled.div`
  heigth: 50vh;
  width: 70%;
  display:flex;
  margin: 0 auto;
`;

export const IncrementButton = styled.div`
height:2rem;
width:2rem;
padding: 1rem;
cursor: pointer;
`;

export const Title = styled.input`
border: none;
border-radius: 3px;
padding: 0.5em;
margin: 0.5em;
width:50%;
`;

export const Desc = styled.input`
border: none;
border-radius: 3px;
padding: 0.5em;
margin: 0.5em;
width:100%;
`;

export const ButtonDiv = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;




    `;


export const Button = styled.button`
  background: ${(props) => (props.primary ? "#58C4DC" : "white")};
  color: ${(props) => (props.primary ? "white" : "#58C4DC")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkblue;
  border-radius: 3px;
    align-content:center;
    cursor:pointer;
  `;
