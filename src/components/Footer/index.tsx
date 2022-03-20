import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "react-toggle/style.css";

const Header = () => {

    return (
    <footer className='shadow-sm rounded'>
        <Navbar bg="dark" fixed="bottom" variant="dark">
          <Container>
            <Navbar.Brand href="https://www.linkedin.com/in/ricardocruzac/">Ricardo Cruz</Navbar.Brand>
          </Container>
        </Navbar>
      </footer>
    );
}

export default Header;
