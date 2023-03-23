export const addToCart = (comic: any) => {

    const cartItems = localStorage.getItem('cart');

    if (cartItems) {
      let items = JSON.parse(cartItems);
      let itemExists = false;
  
      items = items.map((item: any) => {
        if (item.id === comic.id && comic.type === item.type) {
          item.quantity += 1;
          itemExists = true;
        }
        return item;
      });
  
      if (!itemExists) {
        items.push({ ...comic, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(items));
    
    } else {
      const newCart = [{ ...comic, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
    console.log('Item adicionado ao carrinho:', comic);

    setTimeout(() => getCart(), 500);
    
}


export const removeFromCart = (comic: any) => {
    const cartItems = localStorage.getItem('cart');
  
    if (cartItems) {
      let items = JSON.parse(cartItems);
      let itemExists = false;
  
      items = items.map((item: any) => {
        if (item.id === comic.id) {
          item.quantity = Math.max(0, item.quantity - 1);
          itemExists = true;
        }
        return item;
      });
        items = items.filter((item: any) => item.quantity > 0);
  
      localStorage.setItem('cart', JSON.stringify(items));
  
      if (itemExists) {
        console.log('Item removido do carrinho:', comic);
      } else {
        console.log('Item não encontrado no carrinho:', comic);
      }
    } else {
      console.log('Não existem itens no carrinho.');
    }

    getCart();
  }

  
  export const getCart = () => {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
  }