import * as S from './styled';
import { useEffect, useState } from "react";
import { addToCart, getCart, removeFromCart } from "../../utils/cart";

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
  };

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      const cart = getCart();
      setCartItems(cart);
    }, []);
  
    const handleAddToCart = (item: CartItem) => {
      addToCart(item);
      setCartItems(getCart());
    };
  
    const handleRemoveFromCart = (item: CartItem) => {
      removeFromCart(item);
      setCartItems(getCart());
    };
  
    const total = cartItems.reduce((acc, item: CartItem) => acc + item.price * item.quantity, 0);
  
    return (
      
      <S.CartStyled id="cart">
        <h2>Carrinho de Compras</h2>
        {cartItems.length === 0 ? (
          <p>Carrinho vazio.</p>
        ) : (
          <>
            <table>
              <tbody>
                {
              cartItems.map((item: any) => (                
                <S.TrStyled id={item.id}>
                  <td><img src={item.img} className="cart-card-img" /> </td> 
                  <td>{item.type === "printPrice" ? "Impressa" :  "Digital" }</td>
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
            <p>Total: R$ {total.toFixed(2)}</p>
          </>
        )}
      </S.CartStyled>
    );
  };

  export default Cart;