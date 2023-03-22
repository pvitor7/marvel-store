import * as S from './styled';
import Logo from '../../../public/marvel-comics-logo.png';
import { BsFillCartFill } from 'react-icons/bs'

const Header = () => {
    return (
        <S.HeaderStyled>
                <img src={Logo} alt="" />
                <BsFillCartFill className='icon-cart'/>
        </S.HeaderStyled>


    )
}

export default Header;