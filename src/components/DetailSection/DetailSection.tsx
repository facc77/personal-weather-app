import React, { useContext } from 'react';
import { StyleContext } from '../../providers/styleProviders';
import './style.css';

type DetailProps = {
  humidity: number;
  wind_kph: number;
  cloud: number;
};

const DetailSection = ({ humidity, wind_kph, cloud }: DetailProps) => {
  const { style } = useContext(StyleContext);

  return (
    <>
      <ul className='details'>
        <h4>Weather Details</h4>
        <li>
          <span>Cloudy</span>
          <span className='cloud' style={{ opacity: style.opacity }}>
            {cloud}%
          </span>
        </li>
        <li>
          <span>Humidity</span>
          <span className='humidity' style={{ opacity: style.opacity }}>
            {humidity}%
          </span>
        </li>
        <li>
          <span>Wind</span>
          <span className='wind' style={{ opacity: style.opacity }}>
            {wind_kph} /kph
          </span>
        </li>
      </ul>
    </>
  );
};

export default DetailSection;
