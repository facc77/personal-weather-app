import React, { useEffect, useState, useMemo } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './style.css';

type ClockProps = {
  localtime: string;
};

const ClockTime = ({ localtime }: ClockProps) => {
  const timeString = localtime.substr(localtime.length - 5);
  const hours = parseInt(timeString.substring(0, 2));
  const minutes = parseInt(timeString.substring(3, 5));

  const modifiedDate = useMemo(
    () => new Date(new Date().setHours(hours, minutes)),
    [hours, minutes],
  );
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(modifiedDate), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [modifiedDate]);

  return (
    <div>
      <div className='timeHolder'>
        <p className='timeString'>{timeString}</p>
      </div>
      <Clock value={value} />
    </div>
  );
};

export default ClockTime;
