import styled, { keyframes } from "styled-components";

export const appearFromRight = keyframes`
  from {
    opacity: 0; 
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;


export const CartStyled = styled.div`

    @media(min-width: 220px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        top: 120px;
        right: 5px;
        width: 85vw;
        max-width: 420px;
        background: var(--color-white-fixed);
        border-radius: 5px;
        padding: 10px;
        position: fixed;
        z-index: 100;
        box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.25);
        animation: ${appearFromRight} 1s;
        
        
        h2{
            display: flex;
            width: 90%;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            height: 50px;
        }

        table{
            display: flex;
            flex-direction: column;
            width: 100%;

        }

        table > tbody {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            overflow-y: auto;
            max-height: 450px;

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

        }

        p{
            display: flex;
            justify-content: center;
            font-size: 20px;
            align-items: center;
            color: var(--color-white-fixed);
            width: 95%;
            height: 50px;
            border-radius: 5px;
        }

        .cart-total-price{
            border: solid 2px var(--color-green1);
            background-color: var(--color-green1);

        :hover {
            transform: scale(1.02);
            transition: background-color 0.3s ease, transform 0.3s ease;
            color: var(--color-white-fixed);
        }


        :not(:hover) {
            transform: scale(1);
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        }

        .cart-total-quantity{
            background-color: var(--color-black-fixed);
        }



}
`

export const TrStyled = styled.tr`
    @media(min-width: 220px){
    display: flex;
    width: 95%;
    border-top: 1px var(--color-black-fixed) solid;
    
    td{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        width: 33%;
        flex-wrap: nowrap;
        font-size: 15px;
    }

    .quantity{
        flex-direction: column;
        gap: 10px;
    }

    td > div{
        display: flex;
        gap: 5px;
    }

    td > div > button{
        border: none;
        background: var(--color-black-fixed);
        color: var(--color-white-fixed);
        font-size: 20px;
        border-radius: 3px;
            
    }

    td > img{
        max-width: 80px;
     
    }

}
`