import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";

function Item({ nome, endereco, bairro, segmento, telefone, whatsapp, imagem }) {
  return (
    <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="120">
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text><strong>Endereço:</strong> {endereco}</Card.Text>
        <Card.Text><strong>Bairro:</strong> {bairro}</Card.Text>
        <Card.Text><strong>Segmento:</strong> {segmento}</Card.Text>
        <Card.Text><strong>Telefone:</strong> {telefone}</Card.Text>
        <Card.Text><strong>Whatsapp:</strong> {whatsapp}</Card.Text>
      </Card.Body>
    </Card>
  );
}
AOS.init();

export default Item;
