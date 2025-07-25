import React from 'react';
import Sidebar from '../../components/sideBar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';

function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Header />
        <Hero />
        <footer className="px-6 py-4 border-t text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} EcomDash. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;
