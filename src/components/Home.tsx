import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home: React.FC = () => (
  <Container fluid className="home-container">
    <Row>
      <Col md={12} className="text-center">
        <h1>Welcome to Our Education Platform</h1>
        <p>Empowering Minds, Enriching Lives</p>
        <img src="https://cdn.dribbble.com/users/1681709/screenshots/4735856/gif.gif" alt="Education GIF" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, error voluptates. Libero explicabo corporis at sed. Officia, excepturi deserunt maxime deleniti cum soluta? Nostrum ullam, ut nam, fuga cumque, tempora magni neque totam consequuntur harum in esse sequi! Hic, necessitatibus eaque! Vero qui magnam beatae architecto. Odit, harum qui? Perspiciatis expedita ut corrupti, accusamus possimus, optio neque molestiae illum repellat quas ex odio quis accusantium itaque, eaque esse qui! Modi dolorum placeat amet quae recusandae? A dolorum nulla, eos tenetur non, qui fugit animi blanditiis distinctio eius maxime? Pariatur earum adipisci aut eum nulla, dolor tenetur corporis, hic et omnis molestias voluptas modi laudantium quibusdam ipsa. Aspernatur repellendus et at ab eveniet veritatis reprehenderit repellat quasi accusantium, distinctio nulla quis tenetur enim eaque illo dolores quos. Recusandae quasi voluptate vel asperiores quia minima consequuntur reiciendis quam id dolorum vitae nisi accusantium, voluptatem culpa quaerat quidem voluptates dignissimos odio molestiae reprehenderit. Harum consequatur a excepturi necessitatibus aperiam repellendus et. Praesentium, tempore ut tenetur earum cumque tempora eveniet. Modi dolores blanditiis tempore vitae, delectus placeat veniam quo necessitatibus hic esse aliquid, at suscipit temporibus architecto perferendis velit sunt. Rerum quae voluptas corporis similique eaque dolorem dolor adipisci. Blanditiis numquam at id quidem doloremque ex rerum aspernatur consequuntur illo molestiae illum tempore, fuga qui mollitia rem eligendi temporibus officiis! Repellat eaque adipisci corporis porro, aspernatur ratione modi quod perspiciatis! Corrupti aspernatur quas earum vero, animi ratione nemo sint voluptatum. Obcaecati laborum odio eaque beatae hic corporis quidem similique et eos ab. Facilis, fuga!
        </p>
        <Button variant="primary">Explore Courses</Button>
      </Col>
    </Row>
  </Container>
);

export default Home;
