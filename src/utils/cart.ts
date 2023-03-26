interface ICartComic {
  id: number;
  title: string;
  type: string;
  price: number;
  img: string;
  quantity: number;
}


export const getCart = () => {
  const cartItems = localStorage.getItem('cart');
  return cartItems ? JSON.parse(cartItems) : [];
}


export const addToCart = (comic: ICartComic) => {
  const cartItems = localStorage.getItem('cart');

  if (cartItems) {
    let items = JSON.parse(cartItems);
    let itemExists = false;

    items = items.map((item: ICartComic) => {
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
  getCart();
}


export const removeFromCart = (comic: number) => {
  const cartItems = localStorage.getItem('cart');

  if (cartItems) {
    let items = JSON.parse(cartItems);
    let itemExists = false;

    items = items.map((item: ICartComic) => {
      if (item.id === comic) {
        item.quantity = Math.max(0, item.quantity - 1);
        itemExists = true;
      }
      return item;
    });
    items = items.filter((item: ICartComic) => item.quantity > 0);
    localStorage.setItem('cart', JSON.stringify(items));

  }

  getCart();
}
