import classNamesBind from 'classnames/bind';
import Container from 'react-bootstrap/Container';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

const App = () => {
  return (
    <>
      <Header />
      <Container className={cx("container")}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/post/:id" element={<Post />}/>
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
