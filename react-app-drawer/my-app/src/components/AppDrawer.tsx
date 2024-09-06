import { GiHamburgerMenu } from 'react-icons/gi';
import { MenuItem } from './Header';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex w-full">
      <div className="flex flex-col min-h-full  border pl-2 pr-4 mr-3 shadow-2xl">
        <GiHamburgerMenu
          className="text-2xl my-4"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && <h2 className="text-2xl my-3 w-48">Hylian Shopping</h2>}
        <ul>
          {menuItems.map((menItem) => (
            <li key={menItem.name} className="py-2">
              <Link to={menItem.path} className="">
                <div className="flex items-center">
                  <div className="w-4 h-4  ml-1 flex items-center justify-center hover:bg-gray-400">
                    {menItem.name === 'Catalog' && (
                      <img src="../public/catalog.png" />
                    )}
                    {menItem.name === 'About' && (
                      <img src="../public/hylian-emblem.svg"></img>
                    )}
                  </div>
                  {isOpen && <p className="text-sm ml-1">{menItem.name}</p>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
