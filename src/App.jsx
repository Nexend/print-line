import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const [inputString, setInputString] = useState([]);
  const [outputString, setOutputString] = useState([]);
  const [count, setCount] = useState(0);

  const checkLetters = (str, element) => {
    const uniqueLetters = str.split('').find(el => str.split(el).length - 1 === 2);

    if (uniqueLetters) {
      setOutputString(outputString.concat(element));
    }
  };

  const handlePrint = () => {
    if (value) {
      setCount(count + 1);

      const newElement = {
        id: `id-${count}`,
        name: `${value}`,
      };

      checkLetters(value, newElement);
      setInputString(inputString.concat(newElement));
      setValue('');
    }
  };

  return (
    <div className="page">
      <div className="print-line">
        <input
          type="text"
          className="print-line__input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="print-line__btn" onClick={handlePrint}>
          Print
        </button>
      </div>
      <div className="print-content">
        <div className="print-content__item">
          <div className="print-content__item-title">Input</div>
          <ul className="print-content__list">
            {inputString.map(str => (
              <li key={str.id} className="print-content__list-item">
                {str.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="print-content__item">
          <div className="print-content__item-title">Output</div>
          <ul className="print-content__list">
            {outputString.map(str => (
              <li key={str.id} className="print-content__list-item">
                {str.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
