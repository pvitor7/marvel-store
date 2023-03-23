import styled from "styled-components";

export const CartStyled = styled.div`

    @media(min-width: 220px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        top: 100px;
        right: 5px;
        width: 85vw;
        max-width: 420px;
        background: var(--color-white-fixed);
        border-radius: 5px;
        padding: 10px;
        position: fixed;
        z-index: 100;
        
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
            max-height: 340px;
        }

        p{
            display: flex;
            justify-content: center;
            font-size: 20px;
            align-items: center;
            background-color: var(--color-green1);
            color: var(--color-white-fixed);
            width: 100%;
            height: 50px;
        }


    }

`

export const TrStyled = styled.tr`
    @media(min-width: 220px){
    display: flex;
    width: 95%;
    
    td{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        width: 25%;
        flex-wrap: nowrap;
        font-size: 13px;
    }

    .add-remove-cart{
        gap: 5px;
    }

    td > img{
        max-width: 80px;
     
    }

}
`