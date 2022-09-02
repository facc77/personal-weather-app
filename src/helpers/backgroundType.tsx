type FunctionProps = {
  code: number;
  is_day: number;
};

const backgroundType = ({ code, is_day }: FunctionProps) => {
  let weatherType = {
    isDay: 'day',
    weather: '',
  };

  if (!is_day) {
    weatherType.isDay = 'night';
  }
  if (code === 1000) {
    weatherType.weather = 'clear';
  } else if (
    code === 1003 ||
    code === 1006 ||
    code === 1009 ||
    code === 1030 ||
    code === 1069 ||
    code === 1087 ||
    code === 1135 ||
    code === 1273 ||
    code === 1276 ||
    code === 1279 ||
    code === 1282
  ) {
    weatherType.weather = 'cloudy';
  } else if (
    code === 1063 ||
    code === 1069 ||
    code === 1072 ||
    code === 1150 ||
    code === 1153 ||
    code === 1180 ||
    code === 1183 ||
    code === 1186 ||
    code === 1189 ||
    code === 1192 ||
    code === 1195 ||
    code === 1204 ||
    code === 1207 ||
    code === 1240 ||
    code === 1243 ||
    code === 1246 ||
    code === 1249 ||
    code === 1252
  ) {
    weatherType.weather = 'rainy';
  } else {
    weatherType.weather = 'snowy';
  }

  return weatherType;
};

export default backgroundType;
