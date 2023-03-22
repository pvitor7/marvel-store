import * as S from './styled';
import Header from '../../components/Header';
import marvelApi from '../../server';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card';


function Home() {

  const [listMagazines, setListMagazines] = useState([]);

  useEffect(() => {

    async function fetchComics() {
      try {
        const response = await marvelApi.get("series");
        const series = response.data.data.results;
        
        const promises = series.map((comic) =>
          marvelApi.get(`/series/${comic.id}/comics`).then((response) => response.data.data.results)
          
          );
  
        const magazines = await Promise.all(promises);
        setListMagazines(magazines.flat());
      } catch (error) {
        console.log("Erro: ", error);
      }
    }
    fetchComics();
  }, []);


  return (
    <>
      <Header />
      <S.HomePageStyled>

        <h2>Comics (Séries)</h2>
        <S.UlComics>
          {listMagazines.map((comic: any, index: any) => <Card comic={comic} key={index} />
          )}
        </S.UlComics>
        <ul>


        </ul>
      </S.HomePageStyled>
    </>

  )
}

export default Home
