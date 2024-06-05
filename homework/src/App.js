import './App.css';
import { useState } from 'react';
import { Button, Input, DatePicker, Table } from 'antd';
import { DATA_SOURCE } from './DataSource';
import { COLUMNS } from './Columns';

function App() {

  const [inputArr, setInputArr] = useState([]);

  const [inputData, SetInputData] = useState({
    name: "",
    lastname: "",
    dob: "",
    adress: ""

  })


  function changeHandle(e) {

    SetInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  let { name, lastname, dob, adress } = inputData;

  function changehandle() {
    setInputArr([...inputArr, { name, lastname, dob, adress }]);
    console.log("^saved array so far")
    console.log(inputData);
    console.log("^data you put in")
    SetInputData({ name: "", lastname: "", dob: "", adress: "" });
  }

  const handleLogInputValue = (event) => {
    console.log(event.target.value);
  }

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleOkClick = () => {
    console.log();
  }
  const handleNameChange = (target) => {
    console.log(target.value);
  }
  const handleLastnameChange = (target) => {
    console.log(target.value);
  }
  const handleAdressChange = (target) => {
    console.log(target.value);
  }


  return (
    <div gap="small">
      <Input placeholder="Ime" variant="filled" onChange={handleNameChange}></Input>
      <Input placeholder="Prezime" onChange={handleLastnameChange}></Input>
      <Input placeholder="Adresa" onChange={handleAdressChange}></Input>
      <DatePicker onChange={onChange} />
      <div>
        <Button type="primary" onClick={handleLogInputValue}>OK</Button>
        <Button>Clear</Button></div>

      <>
        <Table dataSource={DATA_SOURCE} columns={COLUMNS}></Table>
      </>
    </div>


  );
}

export default App;