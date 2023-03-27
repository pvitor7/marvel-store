import * as S from './styled';
import Header from '../../components/Header';
import marvelApi from '../../server';
import { useEffect, useRef, useState } from 'react';
import { Card } from '../../components/Card';
import { IComicRequest, arrayComics } from '../../utils/arrayComics';
import { useHistory, useParams } from 'react-router-dom';

export interface RouteParams {
  page: string;
  id: string;
}

interface Card{
    id: number;
    title: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    prices?: {
      type: string;
      price: number;
    }[];
}

function Home() {

  const [listMagazines, setListMagazines] = useState<IComicRequest[]>([]);
  const [count, setCount] = useState(1);
  const [listPaginate, setListPaginate] = useState<IComicRequest[]>([]);
  const history = useHistory();
  const { page }: RouteParams = useParams();

  const Paginate = (value: number | string) => {
    
    let start, end;
    const totalItems = listMagazines.length;
  
    if (Number(value) < 1) {
      value = 1;
    }

    if (Number(value) === 1) {
      start = 0;
      end = start + 20;

    } else if (Number(value) > 1) {
      end = (Number(value) * 20) - 1;
      start =  end - 20;

    } else if (value === "Next") {
      start = (Number(page) + 1) * 20;
      end = start + 20;
    } else if (value === "Previous") {
      start = (Number(page) - 1) * 20;
      end = start + 20;
    }

    const list = listMagazines.slice(start, end);
    setListPaginate(list);
  }
  
useEffect(() => {
   
    async function fetchComics() {
      try {
        const response = await marvelApi.get("series");
        const series = response.data.data.results;
        const promises = series.map((comic: IComicRequest) =>
          marvelApi.get(`/series/${comic.id}/comics`).then((response) => response.data.data.results)
          );
  
        const magazines = await Promise.all(promises);
        setListMagazines(magazines.flat());
        const param = page ? Number(page) : 1;
        Paginate(param);
      } catch (error) {
        
        const list = arrayComics.map(item => ({ ...item, description: item.description || '' }));
        setListMagazines(list);
        const param = page ? Number(page) : 1;
        Paginate(param);
      }
    }
    fetchComics();

  }, []);

  const listPaginateRef = useRef<IComicRequest[]>([]);

  useEffect(() => {
    if (JSON.stringify(listPaginate[0]) === JSON.stringify(listPaginateRef.current)[0]) {
      return;
    }
    
    const param = page ? Number(page) : 1;
    Paginate(Number(param))}, 
    [listMagazines])
  
  
  return (
    
      <S.HomePageStyled>
      <Header />
        <h1>Destaques</h1>
        <S.UlComics>
          {listPaginate.map((comic: Card, index: number) => <Card comic={comic} key={index} />
          )}
        </S.UlComics>

        <S.ButtonsPage className='buttons-page'>
          <a onClick={() => {
            const previous = Number(page) > 1 ? Number(page) - 1 : 1;
            history.push(`${previous}`);
          }}>
            Previous
          </a>
          {
            listMagazines?.map((item, index: number) =>{
                if(index <= (listMagazines.length / 20)){
                  return(
                  <a  key={index}  onClick={() => { 
                    history.push(`${index + 1}`)
                    }}>
                          {index + 1}
                  </a>)
                }
            })
          }

        <a onClick={() => {
          const next = Number(page) <  listMagazines.length / 20 ? Number(page) + 1 : Math.ceil(listMagazines.length / 20);
          history.push(`${ next }`)
      }}>
          Next  
        </a>
        </S.ButtonsPage>
      </S.HomePageStyled>
  )
}

export {Home};
