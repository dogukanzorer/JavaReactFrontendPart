import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Dropdown , Label} from "semantic-ui-react";

export default function CartSummary() {

const {cartItems} = useSelector(state => state.cart)


  return (
    <div>
      <Dropdown item text="Your Cart" style={{marginTop: '0.5em'}}>
        <Dropdown.Menu>
          {
            cartItems.map((cartItems) => (
              <Dropdown.Item >{cartItems.product.productName}
              <Label> {cartItems.quantity}</Label>
              </Dropdown.Item>
            ))
          }
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to ="/cart">Go to Cart</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
