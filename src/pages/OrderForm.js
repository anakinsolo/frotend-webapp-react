import { useState } from 'react';
import Checkbox from '../components/Form/Checkbox.js';
import Input from '../components/Form/Input';
import SubmitButton from '../components/Form/SubmitButton.js';
import ResultMessage from '../components/ResultMessage.js';
import OrderService from '../services/OrderService';

const OrderForm = () => {
  const [manu, setManu] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [isSample, setIsSample] = useState(false);
  const [note, setNote] = useState();
  const [err, setErr] = useState('');

  const submitForm = async (event) => {
    event.preventDefault();
    cleanUp();
    const data = {
      'manu' : manu,
      'brand' : brand,
      'type' : type,
      'desc' : desc,
      'is_sample_order' : isSample
    };

    try {
      const res = await OrderService.post('save', data);
      setNote(res);
    } catch (err) {
      setErr(err.message);
    }
  };

  const cleanUp = () => {
    setNote();
    setErr('');
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <Input label='Manufacturer' inputName='manu' inputValue={manu} setInputValue={(event) => setManu(event.target.value)} />
        <Input label='Brand' inputName='brand' inputValue={brand} setInputValue={(event) => setBrand(event.target.value)} />
        <Input label='Type' inputName='type' inputValue={type} setInputValue={(event) => setType(event.target.value)} />
        <Input label='Description' inputName='desc' inputValue={desc} setInputValue={(event) => setDesc(event.target.value)} />
        <Checkbox value={isSample} setValue={() => setIsSample(!isSample)} />
        <SubmitButton />
      </form>
      {err && <ResultMessage name='error' msg={err} />}
      {note && <ResultMessage name='success' msg={note.message} noteId={note.id} />}
    </div>
  );
};

export default OrderForm;