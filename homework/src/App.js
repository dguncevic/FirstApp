import './App.css';
import { useState } from 'react';
import { Button, Input, DatePicker, Table } from 'antd';
import { DATA_SOURCE } from './DataSource';
import { COLUMNS } from './Columns';

function App() {

  const [enteredValues, setEnteredValues] = useState({
    firstname: '',
    lastname: '',
    adress: '',
    dob: ''
  });

  function handleInputChange(id, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }
  return (
    <div gap="small">
      <form onChange={handleSubmit}>
        <Input name="firstname" type="text" placeholder="Ime" variant="filled" onChange={(event) => handleInputChange('email', event.target.value)} value={enteredValues.firstname}></Input>
        <Input placeholder="Prezime" name="lastname" type="text" onChange={(event) => handleInputChange('email', event.target.value)} value={enteredValues.firstname}></Input>
        <Input placeholder="Adresa" name="adress" type="text" onChange={(event) => handleInputChange('email', event.target.value)} value={enteredValues.firstname}></Input>
        <DatePicker name="dob" type="text" onChange={(event) => handleInputChange('dob', event.target)} value={enteredValues.dob} />
        <div>
          <Button type="primary">OK</Button>
          <Button>Clear</Button></div>
      </form>
      <>
        <Table columns={COLUMNS}></Table>
      </>
    </div>


  );
}

export default App;