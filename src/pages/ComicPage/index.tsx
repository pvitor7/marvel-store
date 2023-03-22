import * as S from './styled';
import Header from '../../components/Header';
import marvelApi from '../../server';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Card from '../../components/Card';


function ComicPage() {

  const [listSerieComic, setListSerieComic] = useState([]);
  const { id }: any = useParams();

  useEffect(() => {
    marvelApi
      .get(`/series/${id}/comics`)
      .then((response) => {
        console.log(response.data.data.results)
        setListSerieComic(response.data.data.results)
      })

  }, []);

  return (
    <S.ComicPage>
      <Header />

      <section>

        <S.Galery>

          <S.UlComics>
            {listSerieComic.map((comic: any, index) => <Card comic={comic} key={index}/>
              ).reverse()
            }
          </S.UlComics>

        </S.Galery>



      </section>
    </S.ComicPage>

  )
}

export default ComicPage;
