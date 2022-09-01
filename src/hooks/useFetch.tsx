import { useState, useEffect } from 'react';
import axios from 'axios';

export type TApiResponse = {
  data: any;
  error: any;
  loading: Boolean;
};

const useFetch = (
  url: string,
  key: string,
  place: string = 'london',
): TApiResponse => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const completeUrl = `${url}?key=${key}&q=${place}`;

  useEffect(() => {
    const getAPIData = () => {
      axios
        .get(completeUrl)
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    };
    getAPIData();
  }, [completeUrl, place]);

  return { data, error, loading };
};

export default useFetch;
