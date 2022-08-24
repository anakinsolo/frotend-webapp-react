const Order = ({ order }) => {
  return (
    <div className="form">
      <span>id: {order.id}</span> <span>type: {order.type}</span> <span>manufacturer: {order.manufacturer}</span> <span>brand: {order.brand}</span> <span>status: {order.status}</span> <span>technician: {order.technician}</span>
    </div>
  );
};

export default Order;