import classNamesBind from 'classnames/bind';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import Navigation from '../Navigation';
import styles from './styles.module.scss';



const cx = classNamesBind.bind(styles);

const Header = () => {

  const handleTofuChange = () => {
    return true
  }

  return (
    <div className={cx('header')}>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="#home">
            <h1>LetsGetChecked blog</h1>
          </Navbar.Brand>
          <label>
            <Toggle
              defaultChecked={true}
              icons={false}
              onChange={handleTofuChange} />
            <span>Dark Mode</span>
          </label>
        </Container>
      </Navbar>
      <Navigation />
    </div>
  );
}

export default Header;
