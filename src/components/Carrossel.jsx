import '../pages/stylesmenu.css'
import Carousel from 'react-bootstrap/Carousel';
import CardPayment from './Imagens/CardPayment.jpg'
import CreditCard from './Imagens/CreditCard.jpg'
import Receipt from './Imagens/Receipt.jpg'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <CardPayment text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CreditCard text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Receipt text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;