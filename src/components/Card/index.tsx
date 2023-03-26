import * as S from "./styled";
import { useHistory } from "react-router-dom";
import { addToCart, getCart } from "../../utils/cart";



const Card = ({comic}: any) => {

const history = useHistory();

    return(
        <S.CardStyled >
              <img className="img-card"  onClick={()=> history.push(`/comic/${comic.id}`)} src={
                `${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
              <h3 className="title-card"  onClick={()=> history.push(`/comic/${comic.id}`)}>{comic.title}</h3>

              <S.DivPrice>
                      {comic.prices?.map((price: any, index: number) => 
                      <S.Price key={index}   className="buy-button"               
                      onClick={() => {
                        addToCart({ 
                          id: comic.id, 
                          title: comic.title, 
                          type: price.type, 
                          price: price.price, 
                          img: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                        });
                      }}

                      >{price.type === "printPrice" ? "Impresso: " :  "Digital: " } {price.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} </S.Price>
                    )}
            </S.DivPrice>
        </S.CardStyled>
    )
}

export default Card;