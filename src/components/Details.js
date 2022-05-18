import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showCountries } from '../redux/home/home';
import DetailsItem from './DetailsItem';
import '../Details.css';

function Details() {

  const state = useSelector((state) => state.country.filter((country) => window.location.pathname
  .includes(country.name)));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCountries());
  }, []);

  return (
    <div>
      <div className='title'>
        <div className="details-item">
        {state.map((country) => (
          <li className='all-details' key={country.id}>
            <DetailsItem detail={country} />
          </li>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Details;