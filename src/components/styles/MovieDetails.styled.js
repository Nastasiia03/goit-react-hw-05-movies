import styled from 'styled-components'; 

export const Movie = styled.div`
display: flex;
gap: 30px;
`

export const Poster = styled.img`
border-radius: 6px;
margin-bottom: 10px;
`

export const GoBackButton = styled.button`
margin-bottom: 10px;
  background-color: #4a4d4b;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0px 18px;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}

&:hover {
  background-color: #374151;
}

&:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
`

export const MovieTitle = styled.h2`
margin-bottom: 70px;
`

export const InfoButtons = styled.button`
background-color: #4a4d4b;
width: 169px;
border-radius: .75rem;
border: 1px solid transparent;
cursor: pointer;
font-size: 13px;
padding-top: 5px;
padding-bottom: 5px;

&:hover{
    font-weight: 700;
}
`

export const InfoDiv = styled.div`
display: flex; 
gap: 10px;
`