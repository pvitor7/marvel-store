import styled from 'styled-components';
import { appearFromRight } from '../../components/Cart/styled';

export const ComicPage = styled.body`
    @media (min-width: 120px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        color: var(--color-black-fixed);
        gap: 30px;
        padding: 100px 0px;
        top: 80px;
        box-sizing: border-box;
        overflow-y: auto;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-image: url("../../../public/hqs.jpg");
            filter: blur(4px);
            }

    ::-webkit-scrollbar {
        width: 10px;
        }

    ::-webkit-scrollbar-thumb {
        background-color: var(--color-black-fixed);
        border-radius: 10px;
        }

    ::-webkit-scrollbar-track {
        background-color: var(--color-gray-1);
        border-radius: 10px;
        }

        section{
            display: flex;

        }

    }
    `

export const Comic = styled.div`

    @media (min-width: 120px) {
        width: 80%;
        max-width: 580px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        padding: 30px 0px;
        font-size: 18px;
        border: solid 0.5px var(--color-gray-1);
        border-radius: 4px;
        background:  var(--color-white-fixed);
        box-shadow: -1px 1px 10px var(--color-black-fixed);
        text-align: initial;

        h2{
            font-size: 25px;
            max-width: 90%;
            color: var(--color-back-fixed);
            font-weight: 500;
            text-align: center;
        }

        img{
            width: 50%;
            max-height: 480px;
            padding: 5px;
            border: solid 0.5px var(--color-gray-1);
            border-radius: 4px;
            box-shadow: -10px 10px 10px var(--color-gray-2);
            animation: ${appearFromRight} 1s;
        }

        span{
            width: 90%;
            color: var(--color-back-fixed);
            text-transform: capitalize;
            text-align: initial;
            font-weight: bold;
        }


        p{
            width: 70%;
            color: var(--color-back-fixed);
            font-size: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 10px;
            border: solid 0.1px var(--color-gray-1);
            border-radius: 4px;
            gap: 10px;
            box-shadow: -1px 1px 1px var(--color-gray-2);
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
    align-items: center;
    width: 100%;
    gap: 10px;

`

export const Price = styled.label`
    padding: 10px;
    font-size: 20px;
    width: 70%;
    text-transform: uppercase;
    text-align: center;
    background: var(--color-black-fixed);
    color: var(--color-white-fixed);
    border-radius: 5px;
    box-shadow: -5px 5px 10px var(--color-gray-2);
    
    :hover {
        background-color: var(--color-green1);
        transform: scale(1.05);
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    :not(:hover) {
        transform: scale(1);
        transition: background-color 0.3s ease, transform 0.3s ease;
    }
`
