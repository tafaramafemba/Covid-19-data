import getCountry from "./api";

const COUNTRY_GOTTEN = 'COUNTRY_GOTTEN';

const initialState = [];

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTRY_GOTTEN: return action.payload;
    default: return state;
  }
}

export const showCountries = () => async (dispatch) => {
  const countries = await getCountry();
  dispatch({
    type: COUNTRY_GOTTEN,
    payload: countries,
  });
};