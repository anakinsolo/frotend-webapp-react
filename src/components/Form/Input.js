const Input = ({ label, inputName, inputValue, setInputValue }) => {
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <input type="text" id={inputName} value={inputValue} onChange={setInputValue}/>
    </div>
  );
};

export default Input;