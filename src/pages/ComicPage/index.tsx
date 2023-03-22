import * as S from './styled';
import Header from '../../components/Header';
import marvelApi from '../../server';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Card from '../../components/Card';


function ComicPage() {

  const { id }: any = useParams();
  const [comic, setComic] = useState();


  useEffect(() => {
    marvelApi
      .get(`comics/${id}`)
      .then((response) => setComic(response.data.data.results[0]))
  }, []);

  return (
    <>
      <Header />
      <S.ComicPage>

        <S.Comic>
          <h2>{comic?.title}</h2>

          <img src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`} alt={comic?.title} />

          <S.DivPrice>
            {
            comic?.prices.map((price: any) =>
              <S.Price>
                {price.type === "printPrice" ? "Impressa: " : "Digital: "}
                $ {price.price} 
                </S.Price>
            )}
        
          </S.DivPrice>
          
            {comic?.creators.items.map((creator: any) => <p> <span>{creator.role}: </span>{creator.name}</p>
            )}
          
          <p> <span>Páginas:</span> {comic?.pageCount}</p>

          <S.DescriptionComic> 
            <span>Descrição:</span> 
            {comic?.description}
          </S.DescriptionComic>

        </S.Comic>
      </S.ComicPage>

    </>
  )
}

export default ComicPage;
