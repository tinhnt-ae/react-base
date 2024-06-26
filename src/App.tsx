import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import logo from './logo.svg';
import './App.css';

// components
import Button from './components/atoms/Button';
import MenuItemType from './shared/types/common';
import Select from './components/atoms/Select';
import TextInputField from './components/molecules/TextInputField';

function App() {

  const options: MenuItemType[] = [
    {key: "0", value: "Zero"},
    {key: "1", value: "Zero2"},
    {key: "2", value: "Zero3"},
    {key: "3", value: "Zero4"},
    {key: "4", value: "Zero5"},
    {key: "5", value: "Zero6"},
    {key: "6", value: "Zero7"},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"  
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button name="Login" onClick={() => {}} startIcon={<DeleteIcon />}/>
        <p></p>
        {/* <Select label='Test' options={options}/> */}
        <TextInputField id="sample-input" label='Login' placeHolder='Enter your email' helperText='* valid email must include .com, .vn, etc. '/>
      </header>
    </div>
  );
}

export default App;
