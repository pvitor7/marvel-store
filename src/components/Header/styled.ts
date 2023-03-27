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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background:  var(--color-black-fixed);
            background-image: url("https://i.pinimg.com/originals/32/be/15/32be1563e5c5f8c2e802142ea92ec6db.jpg");
            background-size: cover;
            background-position: center top;
            background-repeat: no-repeat;
            filter: blur(0.5px);
            }

    img{
        height: 90%;
        margin: 10px;

        :hover {
            transform: scale(1.2);
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        :not(:hover) {
            transform: scale(1);
            transition: background-color 0.3s ease, transform 0.3s ease;
            }
    }

    .icon-cart{
        margin: 10px;
        width: 40px;
        height: 40px;
        color: var(--color-white-fixed);
        padding: 5px;
        background: var(--color-black-fixed);
        border-radius: 5px;

        :hover {
            transform: scale(1.2);
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        :not(:hover) {
            transform: scale(1);
            transition: background-color 0.3s ease, transform 0.3s ease;
            }
    }
    

`