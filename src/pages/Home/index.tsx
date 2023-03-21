import * as S from './styled'; 
import Header from '../../components/Header';
import marvelApi from '../../server';
import { useEffect, useState } from 'react';


function Home() {

  const [list, setList] = useState([]);

  useEffect(() => {
    marvelApi
    .get("series")
      .then((response: any) =>  setList(response.data.data.results))
      
  }, []);


  return (
    <S.HomePageStyled>
      <Header/>

        <h2>Comics</h2>
        <S.UlComics>
          {list.map((comic: any, index) => {
              return(
                <S.LiComic>
                  <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                  <h3>{comic.title}</h3>
                </S.LiComic>
              )
          })}
        
        </S.UlComics>
      <ul>
      
      
      </ul>
    </S.HomePageStyled>
    
  )
}

export default Home
