import classNamesBind from 'classnames/bind';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';


const cx = classNamesBind.bind(styles);


function Navigation() {
  const navigate = useNavigate();
  return (
    <div className={cx('p-1', 'navigation')}>
      <Container>
        <button className={cx('my-2', 'btn', 'btn-light')} onClick={()=>navigate(-1)}>
          Go Back
        </button>
      </Container>
    </div>
  );
}

export default Navigation;
