import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import MainNavbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sideBar/Sidebar';
import Hero from '../../components/hero/Hero';
import Banner from '../../components/banner/Banner';
import Dresses from '../../components/dresses/Dresses';
import Cards from '../../components/cards/Cards';
import Trandy from '../../components/trandy/Trandy';
import CartNavbar from '../../components/cartNavbar/CartNavbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen font-poppins bg-white">
      <Topbar />
      <MainNavbar />
      <CartNavbar/>
      {/* Responsive layout */}
      <div className="flex flex-col lg:flex-row gap-4 px-4 mt-4">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <Hero />
        </div>
      </div>

      <div className="px-4 mt-6">
        <Banner />
        <Dresses/>
        <Cards/>
        <Trandy/>
      </div>
    </div>
  );
};

export default Dashboard;
