import { useState } from 'react';
import Status from '../components/Status';
import OrderService from '../services/OrderService';

const Statistics = () => {
  const [statuses, setStatuses] = useState([]);

  const getStatuses = async (event) => {
    event.preventDefault();
    setStatuses([]);
    const data = await OrderService.get('statistics');
    setStatuses(data);
  };

  return (
    <div>
      <input type="submit" value="Get Order Statistics" onClick={getStatuses}/>
      {statuses.map(status => <Status key={status.id} status={status}/>)};
    </div>
  );
};

export default Statistics;