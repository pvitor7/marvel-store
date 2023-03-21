import * as S from './styled'; 
import Header from '../../components/Header';
import * as a from '../../server';
import { useEffect, useState } from 'react';


function Home() {

  const [list, setList] = useState([]);

  useEffect(() => {
    a.marvelApi
    .get("comics")
      .then((response: any) =>     setList(response.data.data.results))
      .catch(function (error: any) {
        console.log("Erro ao fazer solicitação para a API da Marvel:", error);
      });
  }, []);

  console.log(list)

  return (
    <S.HomePageStyled>
      <Header/>
        <h2>Lista h2</h2>
      <ul>
      
      
      </ul>
    </S.HomePageStyled>
    
  )
}

export default Home
