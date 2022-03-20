import classNamesBind from 'classnames/bind';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectAppDarkMode } from '../../_modules/app/redux/appSelectors';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const darkMode = useSelector(selectAppDarkMode);

  return (
    pathname !== '/' ?
    <div className={cx('p-1', 'navigation', { 'dark-mode': darkMode })}>
      <Container>
        <button className={cx('my-2', 'btn', 'btn-light', 'navigation-button')} onClick={()=>navigate('/')}>
          More Articles
        </button>
      </Container>
    </div>
    :
    null
  );
}

export default Navigation;
