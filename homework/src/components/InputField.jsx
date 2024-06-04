import { useState } from 'react';

const InputFieldComponent = ( { inputType, placeHolder})=>{
  const [inputValue, setInputValue] = useState('');


const handleInputChange = (e) => {
  setInputValue(e.target.value);
}

  return (
    <div>
      <input
      type ={inputType}
      id="input"
      placeholder={placeHolder}
      value={inputValue}
      onChange={handleInputChange}></input>
    </div>

  );
}
  export default InputFieldComponent;