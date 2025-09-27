import React, { useState } from 'react';
import { Award, Users, Shield, TrendingUp, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import StatCard from '../shared/StatCard';
import Chart from '../shared/Chart';
import { mockCertificates, mockVerificationLogs, mockAnalytics, mockBlockchainStatus } from '../../data/mockData';

const AdminDashboard = () => {
  const [newCertificate, setNewCertificate] = useState({
    learnerName: '',
    skill: '',
    level: 'Beginner',
    issueDate: new Date().toISOString().split('T')[0]
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleIssueCertificate = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setNewCertificate({
      learnerName: '',
      skill: '',
      level: 'Beginner',
      issueDate: new Date().toISOString().split('T')[0]
    });
  };

  const certificatesData = {
    labels: Object.keys(mockAnalytics.certificatesIssued),
    datasets: [
      {
        label: 'Certificates Issued',
        data: Object.values(mockAnalytics.certificatesIssued),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(147, 51, 234, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(147, 51, 234)',
          'rgb(34, 197, 94)',
          'rgb(251, 191, 36)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const verificationData = {
    labels: ['Verified', 'Pending', 'Expired'],
    datasets: [
      {
        data: Object.values(mockAnalytics.verificationStats),
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(251, 191, 36)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage certificates and monitor blockchain activity</p>
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

      {/* Certificate Issuance Panel */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Certificate Issuance</h2>
        <form onSubmit={handleIssueCertificate} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Learner Name</label>
            <input
              type="text"
              value={newCertificate.learnerName}
              onChange={(e) => setNewCertificate({...newCertificate, learnerName: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Skill/Badge</label>
            <input
              type="text"
              value={newCertificate.skill}
              onChange={(e) => setNewCertificate({...newCertificate, skill: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
            <select
              value={newCertificate.level}
              onChange={(e) => setNewCertificate({...newCertificate, level: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
            <input
              type="date"
              value={newCertificate.issueDate}
              onChange={(e) => setNewCertificate({...newCertificate, issueDate: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="md:col-span-2 lg:col-span-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Issue Certificate
            </button>
          </div>
        </form>
        
        {showSuccess && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md">
            Certificate issued successfully! Blockchain hash: 0x{Math.random().toString(16).substr(2, 40)}
          </div>
        )}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          type="bar"
          data={certificatesData}
          title="Certificates Issued by Skill"
        />
        <Chart
          type="pie"
          data={verificationData}
          title="Verification Status Distribution"
        />
      </div>

      {/* Verification Logs */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Verification Logs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Certificate ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Learner Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockVerificationLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {log.certificateId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.learnerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.organization}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      log.verificationStatus === 'Verified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {log.verificationStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Blockchain Status */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Blockchain Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">Network</p>
            <p className="text-lg font-semibold text-gray-900">{mockBlockchainStatus.network}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Status</p>
            <p className="text-lg font-semibold text-green-600">{mockBlockchainStatus.status}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Transactions</p>
            <p className="text-lg font-semibold text-gray-900">{mockBlockchainStatus.transactionCount}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">CO₂ Saved</p>
            <p className="text-lg font-semibold text-green-600">{mockBlockchainStatus.carbonFootprint}</p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-600">Last Block Hash:</p>
          <p className="text-xs font-mono text-gray-800 break-all">{mockBlockchainStatus.lastBlock}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
