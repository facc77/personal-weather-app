import React, { useContext } from 'react';
import backgroundType from '../../helpers/backgroundType';
import { StyleContext } from '../../providers/styleProviders';
import './style.css';

type VideoProps = {
  is_day: number;
  condition: number;
};

const BackgroundVideo: React.FC<VideoProps> = ({ condition, is_day }) => {
  const { style } = useContext(StyleContext);

  const { isDay, weather } = backgroundType({ code: condition, is_day });
  const videoUrl = `../../assets/videos/${isDay}/${weather}.mp4`;

  return (
    <video
      key={videoUrl}
      autoPlay
      muted
      loop
      playsInline
      id='myVideo'
      style={{ opacity: style.opacity }}
    >
      <source
        src={`${require(`../../assets/videos/${isDay}/${weather}.mp4`)}`}
        type='video/mp4'
        id='myVideo1'
      />
    </video>
  );
};

export default BackgroundVideo;
