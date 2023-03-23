import * as S from './styled';
import { useEffect, useState } from "react";
import { addToCart, getCart, removeFromCart } from "../../utils/cart";

type CartItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
  };

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
  
    // Obtém o carrinho como um array sempre que o componente é montado
    useEffect(() => {
      const cart = getCart();
      setCartItems(cart);
    }, []);
  
    // Adiciona um item ao carrinho
    const handleAddToCart = (item: CartItem) => {
      addToCart(item);
      setCartItems(getCart());
    };
  
    // Remove um item do carrinho
    const handleRemoveFromCart = (item: CartItem) => {
      removeFromCart(item);
      setCartItems(getCart());
    };
  
    // Calcula o total do carrinho
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <S.CartStyled>
        <h2>Carrinho de Compras</h2>
        {cartItems.length === 0 ? (
          <p>Carrinho vazio.</p>
        ) : (
          <>
            <table>
              <tbody>
                {
              cartItems.map((item: any) => (                
                <S.TrStyled key={item.id}>
                  <td><img src={item.img} alt="" /> </td> 
                  <td>{item.type === "printPrice" ? "Impressa" :  "Digital" }</td>
                  
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td className='add-remove-cart'>
                    <button onClick={() => handleRemoveFromCart(item)}>-</button>
                    <button onClick={() => handleAddToCart(item)}>+</button>
                  </td>
                </S.TrStyled>
              ))
              }
              </tbody>
            </table>
            <p>Total: R$ {total.toFixed(2)}</p>
          </>
        )}
      </S.CartStyled>
    );
  };

  export default Cart;