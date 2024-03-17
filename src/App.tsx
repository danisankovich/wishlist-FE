import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import {
  Home, Header, Dashboard, NoMatch, Profile, Details, Wishlists, Wishlist
} from './components'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile /> }>
            <Route index element={<Details />}></Route>
            <Route path="wishlists" element={<Wishlists />}></Route>
        </Route>
        <Route path="/wishlist/:wishlistId" element={<Wishlist />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
