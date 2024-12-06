import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { creches } from '../data/creches';

export default function Analytics() {
  const registeredCount = creches.filter(c => c.isRegistered).length;
  const unregisteredCount = creches.length - registeredCount;

  const cityData = creches.reduce((acc, creche) => {
    acc[creche.city] = (acc[creche.city] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const cityChartData = Object.entries(cityData).map(([city, count]) => ({
    city,
    count
  }));

  const registrationData = [
    { name: 'Registered', value: registeredCount },
    { name: 'Unregistered', value: unregisteredCount }
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Creche Analytics Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Registration Status</h2>
            <div className="flex justify-center">
              <PieChart width={400} height={300}>
                <Pie
                  data={registrationData}
                  cx={200}
                  cy={150}
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {registrationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Creches by City</h2>
            <BarChart width={400} height={300} data={cityChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg col-span-full">
            <h2 className="text-xl font-semibold mb-4">Key Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium">Total Creches</h3>
                <p className="text-3xl font-bold text-blue-600">{creches.length}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium">Registered</h3>
                <p className="text-3xl font-bold text-green-600">{registeredCount}</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium">Unregistered</h3>
                <p className="text-3xl font-bold text-orange-600">{unregisteredCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}