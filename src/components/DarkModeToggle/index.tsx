import classNamesBind from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { selectAppDarkMode } from '../../_modules/app/redux/appSelectors';
import { toggleDarkMode } from '../../_modules/app/redux/appSlice';
import { useAppThunkDispatch } from '../../_shared/infra/redux/store';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

const Header = () => {
  const dispatch = useAppThunkDispatch();

  const initialDarkMode = useSelector(selectAppDarkMode);

  const [darkMode, setDarkMode] = useState(initialDarkMode);


  const handleToggle = () => {
    setDarkMode(!darkMode)
  }

  const mode = darkMode ? 'Dark Mode' : 'Light Mode'

  useEffect(() => {
    dispatch(toggleDarkMode(darkMode))
  }, [dispatch, darkMode]);

  return (
    <div className={cx('dark-mode-toggle')}>
      <Toggle
        defaultChecked={true}
        icons={false}
        onChange={handleToggle} />
      <div className='mx-2'>
        <p className={cx('dark-mode-toggle-text')}>{mode}</p>
      </div>
    </div>
  );
}

export default Header;
