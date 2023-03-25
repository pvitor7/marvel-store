import * as S from './styled';
import Header from '../../components/Header';
import marvelApi from '../../server';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { arrayComics } from '../../utils/arrayComics';


function Home() {

  const [listMagazines, setListMagazines] = useState([]);
  const [count, setCount] = useState(1);
  const [listPaginate, setListPaginate] = useState([]);

  const Paginate = (value: any) => {
    
    let start, end;
    const totalItems = listMagazines.length;
    const maxEnd = Math.min(totalItems, 20);
  
    if (value === 1) {
      start = 0;
      end = maxEnd;
      setCount(value);
    } else if (value > 1) {
      start = (value - 1) * 20;
      end = Math.min(start + 20, totalItems);
      setCount(value);
    } else if (value === "Next") {
      start = count * 20;
      end = Math.min(start + 20, totalItems);
      setCount(count + 1);
    } else if (value === "Previous") {
      start = (count - 2) * 20;
      end = Math.min(start + 20, totalItems);
      setCount(count - 1);
    }
  
    const list = listMagazines.slice(start, end);
    setListPaginate(list);
  }
  

  useEffect(() => {
    // async function fetchComics() {
    //   try {
    //     const response = await marvelApi.get("series");
    //     const series = response.data.data.results;
        
    //     const promises = series.map((comic) =>
    //       marvelApi.get(`/series/${comic.id}/comics`).then((response) => response.data.data.results)
          
    //       );
  
    //     const magazines = await Promise.all(promises);
    //     setListMagazines(magazines.flat());
    //   setListPaginate(listMagazines.slice(0, 20));
    //   } catch (error) {
    //     console.log("Erro: ", error);
    //   }
    // console.log(listMagazines)
    // }
    // fetchComics();
    setListMagazines(arrayComics);
    setListPaginate(listMagazines.slice(0, 20));
  }, [listMagazines]);


  return (
    <>
      <Header />
      <S.HomePageStyled>
        <h1>Destaques</h1>
        <S.UlComics>
          {listPaginate.map((comic: any, index: any) => <Card comic={comic} key={index} />
          )}
        </S.UlComics>

        <S.ButtonsPage className='buttons-page'>

          <a onClick={() => Paginate("Previus")}>
            Previus
          </a>
          {
            listMagazines?.map((item: any | never, index: number) =>{
                if(index <= (listMagazines.length / 20)){
                  return(
                  <a  onClick={() => Paginate(index + 1)}>
                          {index + 1}
                  </a>)
                }
            })
          }

        <a onClick={() => Paginate("Next")}>
          Next  
        </a>
        </S.ButtonsPage>
      </S.HomePageStyled>
      
    </>

  )
}

export default Home
