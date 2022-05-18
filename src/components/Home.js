import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { showCountries } from '../redux/home/home';
import { useNavigate } from 'react-router-dom';
import '../Home.css';

const Home = () => {

  const southern = [
    'Angola',
    'Botswana',
    'Lesotho',
    'Mozambique',
    'Namibia',
    'South Africa',
    'Swaziland',
    'Zambia',
    'Zimbabwe',
  ];

  const state = useSelector((state) => state.country.filter((country) => southern.includes(country.name)));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showCountries());
  }, []);

  const handleRedirect = (country) => {
    navigate(`/${country}`);
  };

  return (
    <div>
      <div className='title-container'>
        <div className='map-backgrnd'>
        <img src='map.png' alt='map' className='img'></img>
        </div>
        <div>
        <span className='south-text'>Southern Africa</span>
        </div>
      </div>
      <div className='stats'>
      <span className='stats'>Stats by country</span>
      </div>
      <ul className='home-ul'>
        {state.map((country) => (
          <li className='country-li' key={country.id} onClick={() => handleRedirect(country.name)}>
              <img className='virus' src='virus.png'></img>
              <div className='country-items'>
              <h3>{country.name}</h3>
              <span>New cases: {country.today_confirmed}</span>
              </div>
              
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home;