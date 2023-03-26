import React, { useState } from "react";

import CartContext from "./Cart-context";

const CartProvider = (props)=> {
    const [items, setItems] = useState([]);
    
    const addItemToCartHandler = (item)=> {
        let hasItems = false;
        const newArray = [...items]
        newArray.forEach((element, index)=> {
            if(element.title === item.title){
                hasItems = true;
            }
        });
        if(hasItems === true){
            alert("Items already in the cart");
        }
        else{
            setItems([...items, item]);
        }
    }

    const removeItemfromCartHandler = (title)=> {
        const newArray = items.filter((item)=> title !== item.title);
        setItems(newArray);
    }

    const increaseQty = (title) => {
        const newArray = [...items];
        console.log(newArray);
        newArray.forEach((element, index) => {
          if (element.title === title) {
            newArray[index].quantity = Number(newArray[index].quantity) + 1;
          }
        });
        setItems(newArray);
      };
    
      const decreaseQty = (title) => {
        const newArray = [...items];
        console.log(newArray);
        newArray.forEach((element, index) => {
          if (element.title === title) {
            if (newArray[index].quantity > 1)
              newArray[index].quantity = Number(newArray[index].quantity) - 1;
            setItems(newArray);
          }
        });
      };
    
      const placingOrder = () => {
        setItems([]);
        alert(
          "Order has been successfully placed !!!!, Keep shopping from the Biker Zone"
        );
      };

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemfromCartHandler,
        increaseQty: increaseQty,
        decreaseQty: decreaseQty,
        placingOrder: placingOrder,
      };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;