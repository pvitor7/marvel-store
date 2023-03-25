import styled from 'styled-components';

export const CardStyled = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 20px 50px 20px;
    border: solid 1px var(--color-gray-2);
    color: var(--color-black-fixed);
    border-radius: 5px;
    background: var(--color-white-fixed);



    h3{
        font-size: 18px;
        max-width: 100%;
        height: 50px;
    }
    
    h3:hover{
        color: red;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }


    img{
        width: 132px;
        height: 200px;
        box-shadow: -10px 10px 10px var(--color-gray-2);

        :hover {
            transform: scale(1.05);
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

    }

    p{
        height: 50px;
        width: 90%;
        font-size: 12px;
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

export const Price = styled.button`
    padding: 10px;
    width: 80%;
    background-color: var(--color-black-fixed);
    color: var(--color-white-fixed);
    border-radius: 4px;
    box-shadow: -10px 10px 10px var(--color-gray-2);
    border: none;    
    
    :hover {
        background-color: green;
        transform: scale(1.05);
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

`