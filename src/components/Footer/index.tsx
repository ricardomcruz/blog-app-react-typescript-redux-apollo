import classNamesBind from 'classnames/bind';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "react-toggle/style.css";
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);


const Header = () => {

  const handleTofuChange = () => {
    return true
  }

    return (
      <footer>
        <Navbar bg="dark" fixed="bottom" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Ricardo Cruz</Navbar.Brand>
          </Container>
        </Navbar>
      </footer>
    );
}

export default Header;
