import classNamesBind from 'classnames/bind';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import styles from './styles.module.scss';
import { selectAppDarkMode } from './_modules/app/redux/appSelectors';

const cx = classNamesBind.bind(styles);

const App = () => {

  const darkMode = useSelector(selectAppDarkMode);

  /* NOTE A
    Add a global class in body that override default styles for dark-mode.
    Ideally it should be scoped to each UI component but this was a faster workaround for the challenge purpose
  */

  useEffect(() => {
    const darkModeClass = 'dark-mode';
    if (darkMode) {
      document.body.classList.add(darkModeClass);
    } else {
      document.body.classList.remove(darkModeClass);
    }
  }, [darkMode]);

  return (
    <>
      <Header />
      <Container className={cx("container", "pb-5")}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
