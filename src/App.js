
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterHook from './Page/Form';
import Home from './Page/Home';
import Info from './Page/Info';
import Login from './Page/Login';

function App() {
  return (
    <div className="App">
      <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<RegisterHook />} />
          <Route path='/login' element={<Login />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
      </CookiesProvider>
    </div>
  );
}

export default App;
