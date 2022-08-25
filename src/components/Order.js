const Order = ({ order }) => {
  return (
    <div className="report">
      <div>id: {order.id},</div>
      <div>type: {order.deviceType},</div>
      <div>manufacturer: {order.deviceManufacturer},</div>
      <div>brand: {order.deviceBrand},</div>
      <div>status: {order.status},</div>
      <div>technician: {order.technician}</div>
    </div>
  );
};

export default Order;