import { useState } from 'react';
import OrderService from '../services/OrderService';

const OrderForm = () => {
  const [manu, setManu] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [isSample, setIsSample] = useState(false);
  const [note, setNote] = useState([]);

  const submitForm = async (event) => {
    event.preventDefault();
    const data = {
      'manu' : manu,
      'brand' : brand,
      'type' : type,
      'desc' : desc,
      'is_sample_order' : isSample
    };

    const res = await OrderService.post('save', data);
    setNote(res);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="manu">Manufacturer:</label>
          <input type="text" id="manu" value={manu} onChange={(event) => setManu(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="brand">Brand:</label>
          <input type="text" id="brand" value={brand} onChange={(event) => setBrand(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <input type="text" id="type" value={type} onChange={(event) => setType(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="desc">Description:</label>
          <input type="text" id="desc" value={desc} onChange={(event) => setDesc(event.target.value)}/>
        </div>
        <div>
          <input type="checkbox" id="is_sample_order" value={isSample} onChange={() => setIsSample(!isSample)}/>
          <label htmlFor="is_sample_order">Create Sample Order</label>
        </div>
        <input type="submit" value="Submit"/>
      </form>
      {note.message} {note.id}
    </div>
  );
};

export default OrderForm;