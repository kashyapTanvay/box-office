import { useState } from 'react';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue);

  const onInputChange = ev => {
    setInputValue(ev.target.value);
  };

  return (
    <div>
      <div>{inputValue}</div>
      <input type="text" value={inputValue} onChange={onInputChange} />
      <button
        type="button"
        onClick={() => {
          setInputValue('Tanvay');
        }}
      >
        Update to Random
      </button>
    </div>
  );
};

export default Home;
