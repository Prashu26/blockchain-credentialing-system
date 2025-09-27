import React from 'react';
import { Award, Users, Shield, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import StatCard from '../shared/StatCard';
import { mockBlockchainStatus } from '../../data/mockData';

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Monitor system performance and blockchain activity</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Blockchain Active
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Certificates"
          value="145"
          icon={Award}
          color="blue"
          trend="up"
          trendValue="+12%"
        />
        <StatCard
          title="Verified"
          value="85"
          icon={CheckCircle}
          color="green"
          trend="up"
          trendValue="+8%"
        />
        <StatCard
          title="Pending"
          value="12"
          icon={Clock}
          color="yellow"
        />
        <StatCard
          title="Active Users"
          value="1,247"
          icon={Users}
          color="purple"
          trend="up"
          trendValue="+15%"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="dashboard-card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors text-left flex items-center">
              <Award className="w-5 h-5 mr-3" />
              Issue New Certificate
            </button>
            <button className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors text-left flex items-center">
              <Shield className="w-5 h-5 mr-3" />
              Verify Certificate
            </button>
            <button className="w-full bg-purple-500 text-white py-3 px-4 rounded-md hover:bg-purple-600 transition-colors text-left flex items-center">
              <TrendingUp className="w-5 h-5 mr-3" />
              View Analytics
            </button>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Blockchain Network</span>
              <span className="text-green-600 font-medium">{mockBlockchainStatus.network}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Network Status</span>
              <span className="text-green-600 font-medium flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                {mockBlockchainStatus.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Transactions</span>
              <span className="text-gray-900 font-medium">{mockBlockchainStatus.transactionCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">CO₂ Saved</span>
              <span className="text-green-600 font-medium">{mockBlockchainStatus.carbonFootprint}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Certificate issued to John Doe</p>
              <p className="text-xs text-gray-500">React Development - Advanced Level</p>
            </div>
            <span className="text-xs text-gray-400">2 hours ago</span>
          </div>
          
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Certificate verified by Tech Company A</p>
              <p className="text-xs text-gray-500">CERT-001 - Blockchain verification successful</p>
            </div>
            <span className="text-xs text-gray-400">4 hours ago</span>
          </div>
          
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">New user registered</p>
              <p className="text-xs text-gray-500">Jane Smith joined as learner</p>
            </div>
            <span className="text-xs text-gray-400">6 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
