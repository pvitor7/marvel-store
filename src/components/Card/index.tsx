import { useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";



const Card = ({comic}: any) => {


const history = useHistory();

  const [comicId, setComicId] = useState(0);


    return(
        <S.CardStyled 
        onClick={()=> {
            console.log(comic)
            setComicId(comic.id)
            history.push(`/comic/${comic.id}`)
            }}
        >
              <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
              <h3>{comic.title}</h3>

              <S.DivPrice>
                      {comic.prices?.map((price: any) => 
                      <S.Price htmlFor="">{price.type === "printPrice" ? "Impressa: " :  "Digital: " } $ {price.price} </S.Price>
                    
                      )}
            </S.DivPrice>
        </S.CardStyled>
    )
}

export default Card;