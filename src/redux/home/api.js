function pad2(n) {
  return (n < 10 ? '0' : '') + n;
}

var date = new Date();
var month = pad2(date.getMonth()+1);
var day = pad2(date.getDate());
var year= date.getFullYear();

var formattedDate =  year+"-"+month+"-"+day;
const baseUrl = `https://api.covid19tracking.narrativa.com/api/${formattedDate}`;

const getCountry = async () => {
  const countries = [];
  try {
    const res = await fetch(
      baseUrl,
    );
    const data = await res.json();
    Object.entries(data.dates[formattedDate].countries).forEach((country) => countries.push(country[1]));
    return countries;
  } catch (err) {
    return err;
  }
};

export default getCountry;