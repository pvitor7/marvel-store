import styled from 'styled-components';

export const ComicPage = styled.body`
    @media (min-width: 120px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        color: var(--color-white-fixed);

        section{
            display: flex;

        }

    }
    `

export const Galery = styled.div`

    @media (min-width: 120px) {
        width: 100%;
        display: flex;
        background: yellow;
        justify-content: center;

}
`

export const UlComics = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    gap: 50px;
    background: red;
    justify-content: center;
 
`

export const LiComic = styled.li`
    width: 200px;
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

export const DivPrice = styled.div`
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;

`

export const Price = styled.label`
    padding: 10px;
    background: #000000;
    color: var(--color-white-fixed)

`