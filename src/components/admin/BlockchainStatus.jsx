import React from 'react';
import { Activity, Database, Zap, Leaf, Link, TrendingUp } from 'lucide-react';
import { mockBlockchainStatus } from '../../data/mockData';

const BlockchainStatus = () => {
  const networkMetrics = [
    { label: 'Block Height', value: '2,847,392', icon: Database, color: 'blue' },
    { label: 'Gas Price', value: '0.00234 ETH', icon: Zap, color: 'yellow' },
    { label: 'Network Speed', value: '15 TPS', icon: Activity, color: 'green' },
    { label: 'Active Nodes', value: '1,247', icon: Link, color: 'purple' }
  ];

  const sustainabilityMetrics = [
    { label: 'Energy Efficiency', value: '99.9%', change: '+2.1%' },
    { label: 'Carbon Footprint', value: '2.1 kg CO₂ saved', change: '+15%' },
    { label: 'Green Mining', value: '87%', change: '+5%' },
    { label: 'Renewable Energy', value: '92%', change: '+3%' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blockchain Status</h1>
          <p className="text-gray-600 mt-1">Monitor network health and sustainability metrics</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Network Active
          </div>
        </div>
      </div>

      {/* Network Overview */}
      <div className="dashboard-card">
        <div className="flex items-center mb-6">
          <Activity className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Network Overview</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {networkMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              yellow: 'from-yellow-500 to-yellow-600',
              green: 'from-green-500 to-green-600',
              purple: 'from-purple-500 to-purple-600'
            };
            
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[metric.color]} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Block Information */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Block Information</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Network Type</span>
              <span className="font-semibold text-gray-900">{mockBlockchainStatus.network}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Status</span>
              <span className="font-semibold text-green-600 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                {mockBlockchainStatus.status}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Total Transactions</span>
              <span className="font-semibold text-gray-900">{mockBlockchainStatus.transactionCount}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Latest Block Hash</label>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-mono text-gray-800 break-all">{mockBlockchainStatus.lastBlock}</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Block Timestamp</label>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-800">{new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Metrics */}
      <div className="dashboard-card">
        <div className="flex items-center mb-6">
          <Leaf className="w-6 h-6 text-green-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Sustainability Metrics</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sustainabilityMetrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
              <div className="flex items-center justify-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>{metric.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction Pool */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Transaction Pool Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-blue-200 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">24</div>
            <div className="text-sm text-gray-600">Pending Transactions</div>
          </div>
          <div className="text-center p-4 border border-green-200 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">1,223</div>
            <div className="text-sm text-gray-600">Confirmed Today</div>
          </div>
          <div className="text-center p-4 border border-purple-200 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">2.3s</div>
            <div className="text-sm text-gray-600">Avg. Confirmation Time</div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Blockchain Transactions</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Certificate Verification</p>
                  <p className="text-xs text-gray-500">Block #{2847392 - index}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">0x{Math.random().toString(16).substr(2, 8)}...</p>
                <p className="text-xs text-gray-500">{Math.floor(Math.random() * 60)} seconds ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Health */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Network Health Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Network Uptime</span>
              <span className="text-sm font-medium text-green-600">99.98%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.98%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Consensus Participation</span>
              <span className="text-sm font-medium text-blue-600">94.2%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '94.2%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainStatus;
