import * as S from './styled';
import Logo from '../../../public/marvel-comics-logo.png';
import { BsFillCartFill } from 'react-icons/bs'
import Cart from '../Cart';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
    
    const [cart, setCart] = useState(false);
    const history = useHistory();

    return (
        <>
        <S.HeaderStyled>
                <img onClick={()=> history.push('/')} src={Logo} alt="" />
                
                <BsFillCartFill onClick={() => cart ? setCart(false): setCart(true)} className='icon-cart'/>
        </S.HeaderStyled>


        {cart && <Cart/>}
        </>

    )
}

export default Header;