import React, { useContext } from 'react';
import './App.css';
import { BackgroundData } from './components/BackgroundData';
import { BackgroundVideo } from './components/BackgroundVideo';
import { DetailSection } from './components/DetailSection';
import { SidebarSearch } from './components/SidebarSearch';
import useFetch from './hooks/useFetch';
import { QueryContext } from './providers/queryProviders';

const url = process.env.REACT_APP_WEATHER_URL as string;
const key = process.env.REACT_APP_API_KEY as string;

const App: React.FC = () => {
  const { query } = useContext(QueryContext);
  const { data } = useFetch(url, key, query.query);

  if (!data) {
    return (
      <div className='spinner-border text-primary' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  }

  const handleClick = () => {
    const videoElement = document.getElementById(
      'myVideo',
    ) as HTMLVideoElement | null;

    if (videoElement !== null) {
      videoElement.play();
    }
  };

  const { condition, is_day, humidity, wind_kph, cloud, temp_c } = data.current;
  const { localtime, name } = data.location;

  return (
    <>
      <BackgroundVideo condition={condition.code} is_day={is_day} />
      <div className='weather-app' onClick={handleClick}>
        <BackgroundData
          localtime={localtime}
          name={name}
          condition={condition}
          temp_c={temp_c}
        />
        <div className='panel'>
          <SidebarSearch />
          <DetailSection
            humidity={humidity}
            wind_kph={wind_kph}
            cloud={cloud}
          />
        </div>
      </div>
    </>
  );
};

export default App;
