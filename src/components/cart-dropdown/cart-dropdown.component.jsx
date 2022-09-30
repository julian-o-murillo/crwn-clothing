import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <dic className='cart-dropdown-container'>
      <div className='cart-items'>
        <Button buttonType=''>GO TO CHECKOUT</Button>
      </div>
    </dic>
  );
};

export default CartDropdown;
