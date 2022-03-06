import React from 'react';
import Sidebar from '../layouts/Sidebar';
import Dashboard from '../pages/dashboard';

const index = () => {
  return (
    <>
      <div className="flex h-screen max-w-screen-xl container">
        <aside style={{ width: '20vw' }} className="fixed">
          <Sidebar />
        </aside>
        <main style={{ width: '80vw' }} className="absolute right-0 h-screen">
          <Dashboard />
        </main>
      </div>
    </>
  );
};

export default index;
