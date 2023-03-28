import * as S from './styled';
import { useEffect, useState } from "react";
import { addToCart, getCart, removeFromCart } from "../../utils/cart";
import { ICartItem } from '../../types/cart.types';


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      const cart = getCart();
      setCartItems(cart);
    }, []);
  
    const handleAddToCart = (item: ICartItem) => {
      addToCart(item);
      const cart = getCart();
      setCartItems(cart);
    };
  
    const handleRemoveFromCart = (item: ICartItem) => {
      removeFromCart(item.id);
      const cart = getCart();
      setCartItems(cart);
    };
  
    const total = cartItems.reduce((acc, item: ICartItem) => acc + item.price * item.quantity, 0);
    const quantity = cartItems.reduce((acc, item: ICartItem) => acc + item.quantity, 0);

    return (
      
      <S.CartStyled id="cart">
        <h2 className='title-cart'>Carrinho de Compras</h2>
        {cartItems.length === 0 ? (
          <p>Carrinho vazio.</p>
        ) : (
          <>
            <table>
              <tbody>
                {
              cartItems.map((item: ICartItem) => (                
                <S.TrStyled key={item.id}>
                  <td><img src={item.img} className="cart-card-img" /> </td> 
                  <td>{item.type === "printPrice" ? "Impressa" :  "Digital" }</td>
                  <td className='cart-item-price'> {item.price}</td>
                  <td className='quantity'>
                    {item.quantity}
                    <div>
                      <button onClick={() => handleAddToCart(item)}>+</button>
                      <button onClick={() => handleRemoveFromCart(item)}>-</button>
                    </div>
                  </td>
                </S.TrStyled>
              ))
              }
              </tbody>
            </table>
            <p className='cart-total-quantity'>Quantidade: {quantity}</p>
            <p className='cart-total-price'>Total: R$ {total.toFixed(2)}</p>
          </>
        )}
      </S.CartStyled>
    );
  };

  export { Cart };