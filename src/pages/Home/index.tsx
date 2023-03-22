import * as S from './styled'; 
import Header from '../../components/Header';
import marvelApi from '../../server';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card';


function Home() {

  const [list, setList] = useState([]);
  const [comicId, setComicId] = useState(0);

  const history = useHistory();

  useEffect(() => {
    marvelApi
    .get("series")
      .then((response: any) =>  setList(response.data.data.results))
  }, []);


  return (
    <S.HomePageStyled>
      <Header/>

        <h2>Comics (Séries)</h2>
        <S.UlComics>
          {list.map((comic: any, index) => <Card comic={comic} key={index}/>
          )}
        </S.UlComics>
      <ul>
      
      
      </ul>
    </S.HomePageStyled>
    
  )
}

export default Home
