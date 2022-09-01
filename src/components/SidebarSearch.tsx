import { useState } from 'react';
import type { FormEvent } from 'react';
import useFetch from '../hooks/useFetch';
import { ItemList } from './ItemList';
import Row from 'react-bootstrap/Row';

const url = process.env.REACT_APP_SEARCH_URL as string;
const key = process.env.REACT_APP_API_KEY as string;

const SidebarSearch = () => {
  const [location, setLocation] = useState('london');
  const { data, loading } = useFetch(url, key, location);
  const [lugares, setLugares] = useState(data);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
  };

  if (submit) {
    setLugares(data);
    setSubmit(false);
  }

  return (
    <div>
      <form id='locationInput' onSubmit={handleSubmit}>
        <input
          id='search'
          name='search'
          type='text'
          className='search'
          placeholder='Search location...'
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type='submit' className='submit'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </form>
      <Row xs={1} md={2} className='cities'>
        {lugares?.map((lugar: { name: string; id: number }) => {
          return <ItemList key={lugar.id} {...lugar} />;
        })}
      </Row>
    </div>
  );
};

export default SidebarSearch;
