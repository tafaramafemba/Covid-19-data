import React from 'react';
import PropTypes from 'prop-types';

function DetailsItem(props) {
  const { detail } = props;
  const {
    name: name,
    today_confirmed: todayConfirmed,
    today_deaths: todayDeaths,
    today_new_confirmed: newConfirmed,
    today_new_open_cases: openCases,
    today_recovered: todayRecovered,
    source,
    today_open_cases: todayOpenCases,
  } = detail;

  DetailsItem.propTypes = {
    detail: PropTypes.shape({
      name: PropTypes.string,
      today_confirmed: PropTypes.number,
      today_deaths: PropTypes.number,
      today_new_confirmed: PropTypes.number,
      today_new_open_cases: PropTypes.number,
      today_recovered: PropTypes.number,
      source: PropTypes.string,
      today_open_cases: PropTypes.number,
    }).isRequired,
  };

  return (
    <div className="DetailsItem">
      <h1 className="country-title">{name}</h1>
      
      <div className='list'>
      <span className="det-itm">
        Confirmed cases today:&nbsp;
          {todayConfirmed}
        </span>
   
        <span className="det-itm">
        Total deaths today:&nbsp;
          {todayDeaths}
        </span>
     
     
        <span className="det-itm">
        New confirmed cases today:&nbsp;
          {newConfirmed}
        </span>
      
        <span className="det-itm">
        New open cases:&nbsp;
          {openCases}
        </span>
      
        <span className="det-itm">
        New recovered:&nbsp;
          {todayRecovered}
        </span>
         
        <span className="det-itm">
          Source:&nbsp;
          {source}
        </span>
     
        <span className="det-itm">
          Open cases:&nbsp;
          {todayOpenCases}
        </span>
      </div>
           
    </div>
  );
}

export default DetailsItem;