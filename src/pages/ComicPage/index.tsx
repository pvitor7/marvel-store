import * as S from './styled';
import Header from '../../components/Header';
import marvelApi from '../../server';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../utils/cart';


function ComicPage() {

  const { id }: any = useParams();
  const [comic, setComic]: any = useState();

  useEffect(() => {
    marvelApi
      .get(`comics/${id}`)
      .then((response) => setComic(response.data.data.results[0]))
  }, []);

  return (

    <S.ComicPage>
      <Header />

      <S.Comic>
        <h2>{comic?.title}</h2>
        <img src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`} alt={comic?.title} />
        {comic?.creators.items.map((creator: any) => <p> <span>{creator.role}: </span>{creator.name}</p>)}
        <p> <span>Páginas:</span> {comic?.pageCount}</p>
        <S.DescriptionComic>
          <span>Descrição:</span>
          {comic?.description}
        </S.DescriptionComic>

        <S.DivPrice>
          {
            comic?.prices.map((price: any) =>
              <S.Price
                onClick={() => {
                  addToCart({ id: comic.id, title: comic.title, type: price.type, price: price.price, img: `${comic.thumbnail.path}.${comic.thumbnail.extension}`});
                }}
              >
                {price.type === "printPrice" ? "Impressa: " : "Digital: "}
                $ {price.price}
              </S.Price>
            )}

        </S.DivPrice>
      </S.Comic>
    </S.ComicPage>
  )
}

export default ComicPage;
