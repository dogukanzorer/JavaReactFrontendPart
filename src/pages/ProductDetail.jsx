import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import ProductService from "../services/productService";
import { Button, Card, Image } from 'semantic-ui-react'

export default function ProductDetail() {
    //İts Give us parametres with out object
    let {name} = useParams();

    const [product, setProduct] = useState({});

  //Lifecycle hook!
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getByProductName(name)
      .then((result) => setProduct(result.data.data));
  }, []);

  return(
    <div>
        <Card.Group>
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>{product.productName}</Card.Header>
        <Card.Meta>Product Id : {product.id}</Card.Meta>
        <Card.Meta>Units In Stock : {product.unitsInStock}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Add To Cart
          </Button>
          <Button basic color='red'>
            Delete To Cart
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
    </div>
  )
}
