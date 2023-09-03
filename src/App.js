import './App.css'

import { Home } from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<h1 className='text-5xl mt-20 text-red-100' >404 Page not found</h1>}/>
        </Routes>
      </Router>
   </div>
  );
};

export default App;
