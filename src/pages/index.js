import React from 'react';
import Sidebar from '../layouts/Sidebar';
import Dashboard from '../pages/dashboard';

const index = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
};

export default index;
