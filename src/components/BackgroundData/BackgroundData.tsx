import React, { useContext } from 'react';
import { StyleContext } from '../../providers/styleProviders';
import ClockTime from '../ClockTime/ClockTime';
import './style.css';

type BackgroundProps = {
  temp_c: number;
  condition: {
    icon: string;
    text: string;
    code: number;
  };
  localtime: string;
  name: string;
};

const BackgroundData = ({
  temp_c,
  condition,
  localtime,
  name,
}: BackgroundProps) => {
  const { style } = useContext(StyleContext);

  return (
    <div className='container' style={{ opacity: style.opacity }}>
      <div className='d-flex'>
        <ClockTime localtime={localtime} />
      </div>
      <div>
        <h1
          className='temp'
          style={{ fontSize: name.length > 19 ? '5em' : '7em' }}
        >
          {temp_c}&#176;
        </h1>
        <div className='city-time'>
          {name.length > 19 ? (
            <h2 className='name text-center'>
              {name.length > 25 ? name.substring(0, 28) + '...' : name}
            </h2>
          ) : (
            <h1 className='name text-center'>{name}</h1>
          )}
        </div>
        <div className='weather d-flex flex-column align-items-center'>
          <img
            src={condition.icon}
            className='icon'
            alt='icon'
            width='50'
            height='50'
          />
          <span className='condition'>{condition.text}</span>
        </div>
      </div>
    </div>
  );
};

export default BackgroundData;
