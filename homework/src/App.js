
import './App.css';
import InputField from './components/InputField.jsx';

function App() {

  return(
    <>
      <InputField inputType="text" placeHolder="Ime"></InputField>
      <InputField inputType="text" placeHolder="Prezime"></InputField>
      <InputField inputType="number" placeHolder="Godine"></InputField>
      <button>OK</button>
      <button>Clear</button>
   
  </>
  );
}

export default App;
