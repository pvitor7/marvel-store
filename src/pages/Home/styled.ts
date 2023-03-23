import styled from 'styled-components';

export const HomePageStyled = styled.body`
    @media (min-width: 120px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        color: var(--color-white-fixed);
        top:  80px;
        position: relative;
    }

    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        height: 50px;
        width: 100%;
        background: green;
    }

    `

export const UlComics = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    gap: 50px;
    background: red;
    justify-content: center;
    padding: 50px 0px;
`

export const LiComic = styled.li`
    width: 200px;
    /* height: 320px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h3{
        font-size: 18px;
        max-width: 100%;
        height: 50px;
    }

    img{
        width: 200px;
        height: 280px;
    }

    p{
        height: 50px;
        width: 90%;
        font-size: 12px;
        color: black;
        overflow: hidden;
        text-overflow: ellipsis;
    }

`