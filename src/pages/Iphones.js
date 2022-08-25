import { useState } from 'react';
import Order from '../components/Order';
import OrderService from '../services/OrderService';

const Iphones = () => {
  const [iphones, setIphones] = useState([]);

  const getOrders = async (event) => {
    event.preventDefault();
    setIphones([]);
    const orders = await OrderService.get('iphones');
    setIphones(orders);
  };

  return (
    <div>
      <input type="submit" value="Get Iphone Orders" onClick={getOrders}/>
      {iphones.map(iphone => <Order key={iphone.id} order={iphone}/>)}
    </div>
  );
};

export default Iphones;