import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//page and components
import Home from './pages/home'
import Navbar from './components/navbar'
import Electronics from './pages/sections/electronics';
import Sell from './pages/sell';
import Clothing from './pages/sections/clothing';
import Footwear from './pages/sections/footwear';
import Sports from './pages/sections/sports';
import Furniture from './pages/sections/furniture';
import Vehicles from './pages/sections/vehicles';
import Shopby from './pages/shopby';
import Myads from './pages/myads';
import Shopbybrand from './pages/shopbybrand';
import Product from './pages/product';
import SearchRes from './pages/searchResults';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';

function App() {
  const {user}=useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>      
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/api/sell"
              element={user?<Sell />:<Navigate to='/login' />}
            />
            <Route 
              path="/api/electronics"
              element={<Electronics />}
            />
            <Route 
              path="/api/clothing"
              element={<Clothing />}
            />
            <Route 
              path="/api/footwear"
              element={<Footwear />}
            />
            <Route 
              path="/api/sports"
              element={<Sports />}
            />
            <Route 
              path="/api/furniture"
              element={<Furniture />}
            />
            <Route 
              path="/api/vehicles"
              element={<Vehicles />}
            />
            <Route 
              path="/api/shopby/:type"
              element={<Shopby />}
            />
            <Route 
              path="/api/shopbybrand/:brand"
              element={<Shopbybrand />}
            />
            <Route 
              path="/api/product/:id"
              element={<Product />}
            />
            <Route 
              path="/api/search/"
              element={<SearchRes />}
            />
            <Route 
              path="/login"
              element={!user?<Login />:<Navigate to='/' />}
            />
            <Route 
              path="/signup"
              element={!user?<Signup />:<Navigate to='/' />}
            />
            <Route 
              path="/api/myads"
              element={user?<Myads />:<Navigate to='/login' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
