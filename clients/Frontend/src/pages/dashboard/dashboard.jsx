import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import MainNavbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sideBar/Sidebar';
import Hero from '../../components/hero/Hero';
import Banner from '../../components/banner/Banner';

const Dashboard = () => {
  return (
    <div className="min-h-screen font-poppins bg-white">
      <Topbar />
      <MainNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Hero />
        </div>
   
      </div>
      <Banner/>
    </div>
  );
};

export default Dashboard;
