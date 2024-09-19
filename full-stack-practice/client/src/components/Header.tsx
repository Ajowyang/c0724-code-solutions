import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <div className="">
      <nav>
        <div className="flex text-gray-50 bg-gray-800 w-screen">
          <Link to="/about">
            <button className="w-24 h-11">About</button>
          </Link>
          <Link to="/">
            <button className="w-24 h-11">Catalog</button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
