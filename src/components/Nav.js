import { Link } from 'react-router-dom';
import '../Nav.css';

function Nav() {
  return (
    <div>
      <nav>
        <Link to="/">
          <button className='back'></button>
        </Link>
        <h3 className='title'>Bookstore CMS</h3>
        <ul className='ul'>
          <li className='audio'><img src='microphone.png' /></li>
          <li className='settings'><img src='settings.png' /></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;