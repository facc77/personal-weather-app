import React, { useContext } from 'react';
import './App.css';
import { BackgroundData } from './components/BackgroundData';
import { DetailSection } from './components/DetailSection';
import SidebarSearch from './components/SidebarSearch';
import backgroundType from './helpers/backgroundType';
import useFetch from './hooks/useFetch';
import { QueryContext } from './providers/queryProviders';
import second from './assets/videos/day/clear.mp4';

const url = process.env.REACT_APP_WEATHER_URL as string;
const key = process.env.REACT_APP_API_KEY as string;

const App: React.FC = () => {
  const { query } = useContext(QueryContext);
  const { data } = useFetch(url, key, query.query /* , true */);

  if (!data) {
    return <p>"loading"</p>;
  }

  const { condition, is_day } = data.current;
  const { isDay, weather } = backgroundType({ code: condition.code, is_day });

  const videoUrl = `./assets/videos/${isDay}/${weather}.mp4`;

  return (
    <>
      <video key={videoUrl} autoPlay muted loop id='myVideo'>
        <source
          src={`${require(`./assets/videos/${isDay}/${weather}.mp4`)}`}
          type='video/mp4'
        />
      </video>
      <div
        className='weather-app'

        /* style={{
          backgroundImage: `url( ${require(`./assets/images/${isDay}/${weather}.jpg`)} )`,
        }}  */
      >
        <BackgroundData data={data} />
        <div className='panel'>
          <SidebarSearch />
          <DetailSection data={data} />
        </div>
      </div>
    </>
  );
};

export default App;
