import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showCountries } from '../redux/home/home';

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
          <h3>{country.name}</h3>
          <span>today new confirmed{country.today_new_confirmed}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Home;