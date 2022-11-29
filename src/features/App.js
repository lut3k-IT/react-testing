import style from './App.module.scss';
import { Redux, Home } from 'features';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <nav>
        <ul className={style.navigation}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/redux'>Redux</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/redux' element={<Redux />} />
      </Routes>
    </>
  );
}
