import React from 'react';

import DateInput from './DateInput';
import './App.css';

const toISO = (value) => {
  if (value === "") return ""
    
  return `${value}T:00:00:00Z`
}

function App() {
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('1992-09-17');
  const [value3, setValue3] = React.useState('1992-09-17');
  const [value4, setValue4] = React.useState('1992-09-17');

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onChange2 = (e) => {
    setValue2(e.target.value)
  }

  const onChange3 = (e) => {
    setValue3(e.target.value)
  }

  const onChange4 = (e) => {
    setValue4(e.target.value)
  }

  return (
    <div className="App">
      <h1>Date input testing</h1>
      <h2>With empty value</h2>
      <DateInput
        placeholder="dd/mm/yyyy"
        value={value}
        onChange={onChange}
      />
      <br />
      <div>
        Raw Value: {value}
      </div>
      <div>
        ISO Value: {toISO(value)}
      </div>

      <h2>With value (17 Sep 1992)</h2>
      <DateInput
        placeholder="dd/mm/yyyy"
        value={value2}
        onChange={onChange2}
      />
      <br />
      <div>
        Raw Value: {value2}
      </div>
      <div>
        ISO Value: {toISO(value2)}
      </div>

      <h3>Pure Native Date Input with empty value</h3>
      <input
        className="native-input"
        type="date"
        value={value3}
        onChange={onChange3}
      />
      <br />
      <div>
        Raw Value: {value2}
      </div>
      <div>
        ISO Value: {toISO(value2)}
      </div>

      <h3>Pure Native Date Input with value (17 Sep 1992)</h3>
      <input
        className="native-input"
        type="date"
        value={value4}
        onChange={onChange4}
      />
      <br />
      <div>
        Raw Value: {value4}
      </div>
      <div>
        ISO Value: {toISO(value4)}
      </div>
    </div>
  );
}

export default App;
