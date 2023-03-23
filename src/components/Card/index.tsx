import { useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import marvelApi from "../../server";
import { addToCart, getCart } from "../../utils/cart";



const Card = ({comic}: any) => {


const history = useHistory();


    return(
        <S.CardStyled>
              <img  onClick={()=> history.push(`/comic/${comic.id}`)} src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
              <h3  onClick={()=> history.push(`/comic/${comic.id}`)}>{comic.title}</h3>

              <S.DivPrice>
                      {comic.prices?.map((price: any, index: number) => 
                      <S.Price key={index}                  
                      onClick={() => {
                        addToCart({ 
                          id: comic.id, 
                          title: comic.title, 
                          type: price.type, 
                          price: price.price, 
                          img: `${comic.thumbnail.path}.${comic.thumbnail.extension}` 
                        });
                      }}

                      htmlFor="">{price.type === "printPrice" ? "Impresso: " :  "Digital: " } $ {price.price} </S.Price>
                    )}
            </S.DivPrice>
        </S.CardStyled>
    )
}

export default Card;