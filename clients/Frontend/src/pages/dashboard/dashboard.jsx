import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import MainNavbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sideBar/Sidebar';
import Hero from '../../components/hero/Hero';

const Dashboard = () => {
  return (
    <div className="min-h-screen font-poppins bg-gray-50">
      <Topbar />
      <MainNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
