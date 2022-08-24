const OrderForm = () => {
  return (
    <form action="/save">
      <div>
        <label htmlFor="manu">Manufacturer:</label>
        <input type="text" id="manu" name="manu"/>
      </div>
      <div>
        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" name="brand"/>
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input type="text" id="type" name="type"/>
      </div>
      <div>
        <label htmlFor="desc">Description:</label>
        <input type="text" id="desc" name="desc"/>
      </div>
      <div>
        <input type="checkbox" id="is_sample_order" name="is_sample_order" value="1"/>
        <label htmlFor="is_sample_order">Create Sample Order</label>
      </div>
      <input type="submit" value="Submit"/>
    </form>
  );
};

export default OrderForm;