import styled from 'styled-components';

export const HomePageStyled = styled.body`
    @media (min-width: 120px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        top:  80px;
        position: relative;
        align-items: center;
        
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-image: url("https://i.pinimg.com/originals/f7/5f/e9/f75fe9d6f289c1f3b5382f832ff35477.jpg");
            filter: blur(4px);
            }
        
        
        h1{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            padding: 40px 0px 20px 0px;
            width: 100%;
            color: var(--color-white-fixed);
            background: var(--color-black-fixed);
        }
        
    }

    `

export const UlComics = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    max-width: 1440px;
    height: 80%;
    gap: 50px;
    justify-content: center;
    padding: 20px 20px 150px 20px;
    border-radius: 5px;
    overflow-y: auto;
    
    ::-webkit-scrollbar {
        width: 10px;
        }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: var(--color-black-fixed);
        }

    ::-webkit-scrollbar-track {
        background-color: var(--color-gray-2);
        border-radius: 10px;
        }

`

export const ButtonsPage = styled.div`
    display: flex;
    gap: 5%;
    padding: 20px;
    justify-content: center;
    width: 100vw;
    background: var(--color-black-fixed);

    position: fixed;
    bottom: 0;
    left: 0;

    a{
        border: none;
        background: var(--color-black-fixed);
        color: var(--color-white-fixed);
        font-size: 20px;
        padding: 10px;
        border-radius: 3px;

        :hover {
            background-color: var(--color-white-fixed);
            color: var(--color-black-fixed);
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        :hover:not(:focus) {
            transform: scale(1);
        }
    }
`