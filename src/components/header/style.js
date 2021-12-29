import styled from "styled-components";


//ESTILIZAÇÃO DO HEADER
export const Menu = styled.div`
display: flex;
align-items: center;
justify-content:space-around;
width: 100%;
height: 80px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

img{
    width: 110px;
    height: 50px;
}

header{
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    width: 50%;
}

p{
    cursor pointer;  
}

p:hover{
    cursor pointer;
    color: SteelBlue;
}`;

//estilização dos icones do menu
export const Icons = styled.div`
width: 150px;
display: flex;
justify-content: space-between;
padding: 5px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;