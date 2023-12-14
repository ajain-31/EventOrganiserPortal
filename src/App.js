import React from 'react';
 import Login from './LoginForm';
 import Signup from './Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyForm from './Signup';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} ></Route>
        <Route path="/login" element={<Signup></Signup>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;