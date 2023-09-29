import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#eaecf1",}} />
    </div>
  );
}



export default CartWidget;