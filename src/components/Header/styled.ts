import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 80px;
    color: #000000;
    box-shadow: 0px 4px 30px -10px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    z-index: 100;

    img{
        height: 90%;
        margin: 50px;
    }

    .icon-cart{
        width: 40px;
        height: 40px;
        margin: 50px;
    }
    

`