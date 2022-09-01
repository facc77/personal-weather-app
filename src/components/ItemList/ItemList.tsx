import React, { useContext } from 'react';
import { QueryContext } from '../../providers/queryProviders';
import Col from 'react-bootstrap/Col';

type ItemProps = {
  name: string;
  id: number;
};

const ItemList = ({ name, id }: ItemProps) => {
  const queryContext = useContext(QueryContext);

  const handleClick = () => {
    queryContext.setQuery({
      query: name,
    });
  };
  return (
    <Col key={id} className='city' onClick={handleClick}>
      {name}
    </Col>
  );
};

export default ItemList;
