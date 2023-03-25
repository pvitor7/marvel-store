import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 90vw;
    padding: 10px 5vw;
    height: 80px;
    color: #000000;
    box-shadow: 0px 4px 30px -10px rgba(0, 0, 0, 0.25);
    z-index: 100;
    background:  var(--color-black-fixed);
    background-image: url(public/Marvel-Wallpaper.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    img{
        height: 90%;
        margin: 10px;
    }

    .icon-cart{
        margin: 10px;
        width: 40px;
        height: 40px;
        color: var(--color-white-fixed);
        padding: 5px;
        background: var(--color-black-fixed);
        border-radius: 50%;
    }
    

`