// import { useState } from 'react';
// import { readCatalog, readProduct, Product, products } from './lib';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Catalog } from './pages/Catalog';
import { Details } from './pages/Details';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Catalog></Catalog>} />
            <Route path="/details/:itemId" element={<Details></Details>} />
            <Route path="*" />
            <Route path="about" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
