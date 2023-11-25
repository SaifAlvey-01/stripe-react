import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Hosted } from './file/stripe/Hosted';


function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          {/* Hosted part */}
          <Route exact path='/hosted' element={<Hosted />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
