import * as S from './styled';
import Header from '../../components/Header';
import marvelApi from '../../server';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../utils/cart';
import { arrayComics } from '../../utils/arrayComics';
import { IComicRequest, ICreators, IPrice } from '../../types/comic.types';
import { RouteParams } from '../../types/hooks.types';


function ComicPage() {

  const { id }: RouteParams = useParams();
  const [comic, setComics] = useState<IComicRequest | IComicRequest>();
  const [selectedComic, setSelectedComic] = useState<IComicRequest>();

  useEffect(() => {
    marvelApi
      .get(`comics/${id}`)
      .then((response) => {
        setComics(response.data.data.results[0])
      })
      .catch((err) => {
        const selectedComic = arrayComics.find((c) => Number(id) === c.id) as IComicRequest;
        
        if (!selectedComic.description) {
          selectedComic.description = " ";
        }
        setComics(selectedComic);
      })
  }, []);


  return (

    <S.ComicPage>
      <Header />

      <h1>{comic?.title}</h1>
      <S.Comic>
        <img src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`} alt={comic?.title} />
        {comic?.creators?.items.map((creator: ICreators) => <p> <span>{creator.role}: </span>{creator.name}</p>)}
        <p> <span>Páginas:</span> {comic?.pageCount}</p>
        <S.DescriptionComic>
          <span>Descrição:</span>
          {comic?.description}
        </S.DescriptionComic>

        <S.DivPrice>
          {
            comic?.prices.map((price: IPrice) =>
              <S.Price
                onClick={() => {
                  addToCart({ id: comic?.id, title: comic?.title, type: price.type, price: price.price, img: `${comic?.thumbnail.path}.${comic?.thumbnail.extension}`, quantity: 1 });
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

export { ComicPage };
