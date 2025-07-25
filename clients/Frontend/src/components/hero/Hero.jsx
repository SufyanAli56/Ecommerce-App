import React from 'react';

function Hero() {
  const stats = [
    { title: "Total Sales", value: "$24,569", change: "+12%", positive: true },
    { title: "New Customers", value: "1,243", change: "+8%", positive: true },
    { title: "Pending Orders", value: "42", change: "-3%", positive: false },
    { title: "Conversion Rate", value: "4.8%", change: "+1.2%", positive: true },
  ];

  return (
    <main className="flex-1 px-6 py-6 overflow-y-auto">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.title}</h3>
            <div className="flex items-baseline">
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <span className={`ml-2 text-sm font-medium ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <div className={`h-2 rounded-full overflow-hidden ${stat.positive ? 'bg-green-100' : 'bg-red-100'}`}>
                <div 
                  className={`h-full ${stat.positive ? 'bg-green-500' : 'bg-red-500'}`} 
                  style={{ width: `${stat.positive ? '75%' : '40%'}` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
            View all
          </button>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map(item => (
            <div key={item} className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">New order #ORD-{item}00{item}</h3>
                <p className="text-gray-600 text-sm mt-1">Customer: John Doe • Amount: ${(250 + item * 50).toFixed(2)}</p>
              </div>
              <div className="ml-auto text-gray-500 text-sm">2 hours ago</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Hero;
