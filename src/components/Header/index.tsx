import classNamesBind from 'classnames/bind';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "react-toggle/style.css";
import DarkModeToggle from '../DarkModeToggle';
import Navigation from '../Navigation';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

const Header = () => {
  return (
    <div className={cx('header', 'shadow-sm rounded')}>
      <Navbar sticky="top" bg='dark' variant={'dark'}>
        <Container >
          <Navbar.Brand href="/">
            <h1>LetsGetChecked blog</h1>
          </Navbar.Brand>
          <DarkModeToggle />
        </Container>
      </Navbar>
      <Navigation />
    </div>
  );
}

export default Header;
