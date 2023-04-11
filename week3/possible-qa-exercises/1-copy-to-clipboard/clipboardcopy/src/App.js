import './App.css';
import Button from './components/Button';
import UserInput from './components/UserInput';
import InfoMessage from './components/Message'
import { InputContextProvider } from './context/inputContext'

function App() {
   return (
      <div className="App">
         <InputContextProvider>
            <UserInput />
            <Button />
            <InfoMessage />
         </InputContextProvider>
      </div>
   );
}

export default App;