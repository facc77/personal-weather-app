import { useState } from 'react';
import type { FormEvent } from 'react';
import useFetch from '../../hooks/useFetch';
import { ItemList } from '../ItemList';
import './style.css';

const url = process.env.REACT_APP_SEARCH_URL as string;
const key = process.env.REACT_APP_API_KEY as string;

const SidebarSearch: React.FC = () => {
  const [location, setLocation] = useState('');
  const [showPlaces, setShowPlaces] = useState(false);
  const { data } = useFetch(url, key, location);
  const [lugares, setLugares] = useState(data);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
    setLocation('');
    setShowPlaces(true);
  };

  if (submit) {
    setLugares(data);
    setSubmit(false);
  }

  console.log(lugares);

  return (
    <div>
      <form id='locationInput' onSubmit={handleSubmit}>
        <input
          id='search'
          name='search'
          type='text'
          className='search'
          placeholder='Search location...'
          autoComplete='off'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type='submit' className='submit'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </form>
      <div className='cities'>
        {showPlaces &&
          (lugares?.length > 0 ? (
            lugares?.map((place: { name: string; id: number }) => {
              return (
                <ItemList
                  key={place.id}
                  place={place}
                  setShowPlaces={setShowPlaces}
                />
              );
            })
          ) : (
            <p>location not found</p>
          ))}
      </div>
    </div>
  );
};

export default SidebarSearch;
