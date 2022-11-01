import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import PageNotAvailable from './pages/PageNotAvailable';

function App () {
  return ( 
    <Router>
      
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/users'
          element={<Users />}
        />
        {/* catch unregistered routes and display a 404 page component */}
        <Route 
          path='*'
          element={<PageNotAvailable />}
        />
      </Routes>
    </Router>
    
   );
}

export default App ;