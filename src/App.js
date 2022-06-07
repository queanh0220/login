
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterHook from './Page/Form';
import Home from './Page/Home';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<RegisterHook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
