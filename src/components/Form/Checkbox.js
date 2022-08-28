const Checkbox = ({ value, setValue }) => {
  return (
    <div>
      <input type="checkbox" id="is_sample_order" value={value} onChange={setValue}/>
      <label htmlFor="is_sample_order">Create Sample Order</label>
    </div>
  );
};

export default Checkbox;