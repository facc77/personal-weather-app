import React from 'react';

const DetailSection = ({ ...props }) => {
  const { humidity, wind_kph, cloud } = props.data.current;

  return (
    <ul className='details'>
      <h4>Weather Details</h4>
      <li>
        <span>Cloudy</span>
        <span className='cloud'>{cloud}%</span>
      </li>
      <li>
        <span>Humidity</span>
        <span className='humidity'>{humidity}%</span>
      </li>
      <li>
        <span>Wind</span>
        <span className='wind'>{wind_kph} /kph</span>
      </li>
    </ul>
  );
};

export default DetailSection;
