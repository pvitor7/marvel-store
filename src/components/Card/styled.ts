import styled from 'styled-components';

export const CardStyled = styled.div`
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
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50px;
    gap: 10px;

`

export const Price = styled.label`
    padding: 5px;
    width: 80%;
    border: solid 1px #000000;
    color: var(--color-white-fixed)

`