import { useState } from 'react';
import Order from '../components/Order';
import OrderService from '../services/OrderService';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async (event) => {
    event.preventDefault();
    const orders = await OrderService.get('statistics');
    setOrders(orders);
  };

  return (
    <div>
      <input type="submit" value="Get Orders" onClick={getOrders}/>
      {orders.map(order => <Order key={order.id} order={order}/>)}
    </div>
  );
};

export default Orders;