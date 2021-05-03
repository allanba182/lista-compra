import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaList from './components/ListaList';
import NaoEncontrada from './NaoEncontrada';
import AdicionaItem from './components/AdicionaItem';
import './App.css';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaList />} />
        <Route path="adicionaItem" element={<AdicionaItem />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
