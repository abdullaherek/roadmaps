import styled from "styled-components";

export const Main = styled.div`
    display:flex;
    height:100vh;
    width:100%;
    
`;

export const BlogMain = styled.div`
    display:flex;
    flex-direction: column;
    height:40vh;
    width:25%;
    border-radius:1rem;
    border: 2px solid grey;
    margin: 0 auto;
    margin-top:7rem;
    color:black;
    background-color:#60D9FA;

`;

export const BlogLink = styled.div`
    display:flex;
    height:4vh;
    width:80%;
    margin:0 auto 1rem auto;

`;

export const BlogContent = styled.div`
    display:flex;
    height:9vh;
    width:80%;
    margin:auto;

`;

export const BlogAuthor = styled.div`
    height:5vh;
    width:80%;
    margin:auto;

`;

export const BlogDate = styled.div`
    height:5vh;
    width:80%;
    margin:auto;

`;

export const BlogThree = styled.div`
    width:80%;
    display:flex;
    flex-direction:column;
    margin-top:0;
    margin:0 auto;
`;

export const NavLink = styled.a`
    margin-top: 0.5rem;
    margin-left:2rem;
    margin:0 auto;
    font-weight:bold;
    text-decoration:none;
    cursor: pointer;
`;  
