import React from 'react';
import {
  Logo,
  Dashboard,
  Plans,
  About,
  Banks,
  GirlCode,
  LogOut,
  Portfolio,
  Profile,
  Purse,
  Support,
  Transactions,
} from '../assets/svgs';

const Sidebar = () => {
  return (
    <>
      <div className="bg-white">
        <div className="pt-10 px-7">
          <div className="">
            <Logo />
          </div>
          <div className="mt-10">
            <h1 className="text-gray-500">MENU</h1>
            <div className="pt-5">
              <div
                style={{ backgroundColor: '#FDF6F8' }}
                className="flex py-4 px-5 rounded-xl items-center cursor-pointer"
              >
                <Dashboard />
                <p className="text-gray-500 ml-5 font-light">Dashboard</p>
              </div>
              <div className="flex py-4 px-5 rounded-xl items-center cursor-pointer hover:bg-pink">
                <Plans />
                <p className="text-gray-500 ml-5 font-light">Plans</p>
              </div>
              <div className="flex py-4 px-5 rounded-xl items-center cursor-pointer hover:bg-pink">
                <Purse />
                <p className="text-gray-500 ml-5 font-light">Purse</p>
              </div>
              <div className="flex py-4 px-5 rounded-xl items-center cursor-pointer hover:bg-pink">
                <Transactions />
                <p className="text-gray-500 ml-5 font-light">Transactions</p>
              </div>
              <div className="flex py-4 px-5 rounded-xl items-center cursor-pointer hover:bg-pink">
                <Banks />
                <p className="text-gray-500 ml-5 font-light">Banks & Cards</p>
              </div>
              <div className="flex py-4 px-5 rounded-xl items-center cursor-pointer hover:bg-pink">
                <GirlCode />
                <p className="text-gray-500 ml-5 font-light">Girl Code</p>
              </div>
              <div className="flex py-4 px-5 rounded-xl items-center cursor-pointer hover:bg-pink">
                <Profile />
                <p className="text-gray-500 ml-5 font-light">Profile</p>
              </div>
              <div className="flex py-4 px-5 rounded-xl items-center cursor-pointer hover:bg-pink">
                <Portfolio />
                <p className="text-gray-500 ml-5 font-light">Porfolio</p>
              </div>
              <div className="flex py-4 px-5 rounded-xl items-center cursor-pointer hover:bg-pink">
                <About />
                <p className="text-gray-500 ml-5 font-light">About HerVest</p>
              </div>
              <div className="flex py-4 px-5 rounded-xl items-center cursor-pointer hover:bg-pink">
                <Support />
                <p className="text-gray-500 ml-5 font-light">Support</p>
              </div>
              <div className="flex py-4 px-5 rounded-xl items-center cursor-pointer hover:bg-pink">
                <LogOut />
                <p className="text-gray-500 ml-5 font-light">Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
