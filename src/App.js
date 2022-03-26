import './App.css';
import Qna from './Components/Qna/Qna';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className='App'>
      <h1 className='head'>Pick Your <span>Phone</span></h1>
      <Shop></Shop>
      <Qna></Qna>
    </div>
  );
}

export default App;
