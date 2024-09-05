import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';

import { Details } from './pages/Details';
import { About } from './pages/About';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/details/:itemId" element={<Details></Details>}></Route>
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </>
  );
}
