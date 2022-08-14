import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/upload' exact element={<Form />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
