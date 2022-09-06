import React, { useContext } from 'react';
import { QueryContext } from '../../providers/queryProviders';
import locationIcon from '../../assets/location.png';
import { StyleContext } from '../../providers/styleProviders';
import './style.css';

type ItemProps = {
  place: { name: string; id: number };
  setShowPlaces: React.Dispatch<React.SetStateAction<boolean>>;
};

const ItemList = ({ setShowPlaces, place }: ItemProps) => {
  const { setQuery } = useContext(QueryContext);
  const { setStyle } = useContext(StyleContext);

  const handleClick = () => {
    setShowPlaces(false);
    setQuery({ query: place.name });
    setStyle({ opacity: 0 });

    setTimeout(function () {
      setStyle({ opacity: 1 });
    }, 1000);
  };
  return (
    <div className='itemList'>
      <p
        key={place.id}
        className='city'
        onClick={handleClick}
        data-toggle='tooltip'
        data-placement='right'
        title={place.name}
      >
        {place.name.length > 13
          ? place.name.substring(0, 15) + '...'
          : place.name}
      </p>
      <div className='icon-card'>
        <img src={locationIcon} alt='' className='locationIcon' />
      </div>
    </div>
  );
};

export default ItemList;
