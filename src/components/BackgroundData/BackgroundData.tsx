import React, { useContext } from 'react';
import { QueryContext } from '../../providers/queryProviders';

const BackgroundData = ({ ...props }) => {
  const { temp_c, condition } = props.data.current;
  const { query } = useContext(QueryContext);
  const now = new Date();
  const current = now.getHours() + ':' + now.getMinutes();

  return (
    <div className='container'>
      <h3 className='brand'>The weather</h3>
      <div>
        <h1 className='temp'>{temp_c}&#176;</h1>
        <div className='city-time'>
          <h1 className='name'>{query.query}</h1>
          <small>
            <span className='time'>{current}</span>-
            <span className='date'>{`${now.toLocaleDateString()}`}</span>
          </small>
        </div>
        <div className='weather'>
          <img
            src={props.data.current?.condition?.icon}
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
