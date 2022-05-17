import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showCountries } from '../redux/home/home';
import '../Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

  const state = useSelector((state) => state.country);
  const dispatch = useDispatch();

  console.log(state);

  useEffect(() => {
    dispatch(showCountries());
  }, []);

  return(
    <div>
      <ul>
      {state.map((country) => (
        <li key={country.id}>
          <Link to="/details">
          <h3>{country.id}</h3>
          <span>New cases: {country.today_confirmed}</span>
          </Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Home;