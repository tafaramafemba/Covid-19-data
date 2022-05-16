import moment from "moment";

const yourDate = new Date()
const NewDate = moment(yourDate, 'YYYY-MM-DD')
const baseUrl = 'https://api.covid19tracking.narrativa.com/api/';

const getCountry = async () => {
  const res = await fetch(`${baseUrl}${NewDate}`);
  const countries = await res.json();
  return countries;
};

export default getCountry;