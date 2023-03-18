import styled from 'styled-components';


export const Form = styled.form`
display: flex;
align-items: center;
gap: 5px;
`
export const Input = styled.input`
width: 250px;
padding: 5px 18px;
border-radius: 50px;
border: 1px solid #575756;
font-size: 14px;
`

export const SearchButton = styled.button`
border-radius: 50%;
padding: 4px 6px;
border: 1px solid #575756;
background-color: #4a4d4b;
color: white;
cursor: pointer;

&:hover {
    background-color: #374151;
}
`