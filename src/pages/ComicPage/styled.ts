import styled from 'styled-components';

export const ComicPage = styled.body`
    @media (min-width: 120px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        color: var(--color-white-fixed);
        gap: 50px;
        padding: 50px 0px;
        

        section{
            display: flex;

        }

    }
    `

export const Comic = styled.div`

    @media (min-width: 120px) {
        width: calc(100% - 40px);
        max-width: 620px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding: 30px;
        font-size: 18px;
        border: solid 0.5px var(--color-gray-1);
        border-radius: 4px;
        text-align: initial;

        h2{
            font-size: 30px;
            max-width: 90%;
            color: var(--color-back-fixed);
            font-weight: 500;
        }

        img{
            min-width: 230px;
            max-height: 480px;
            padding: 5px;
            border: solid 0.5px var(--color-gray-1);
            border-radius: 4px;
        }

        span{
            width: 90%;
            color: var(--color-back-fixed);
            text-transform: capitalize;
            text-align: initial;
            font-weight: bold;
        }


        p{
            width: 90%;
            color: var(--color-back-fixed);
            font-size: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 10px;
            border: solid 0.1px var(--color-gray-1);
            border-radius: 4px;
            gap: 10px;
        }
}
`

export const DescriptionComic = styled.p`
            display: flex;
            flex-direction: column;
            gap: 50px;
            width: 90%;
            color: var(--color-back-fixed);
            font-size: 20px;
            padding: 10px;
            border: solid 0.1px var(--color-gray-1);
            border-radius: 4px;
`

export const DivPrice = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    gap: 10px;

`

export const Price = styled.label`
    padding: 10px;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    background: var(--color-green1);
    color: var(--color-white-fixed);
    border-radius: 5px;
`
