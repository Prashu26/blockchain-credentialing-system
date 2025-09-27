import React, { useState } from 'react';
import { Shield, Search, Filter, Download, Eye } from 'lucide-react';
import { mockVerificationLogs } from '../../data/mockData';

const VerificationLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedLog, setSelectedLog] = useState(null);

  const filteredLogs = mockVerificationLogs.filter(log => {
    const matchesSearch = log.learnerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.certificateId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || log.verificationStatus.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Verification Logs</h1>
          <p className="text-gray-600 mt-1">Track all certificate verification attempts and their status</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Logs
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="dashboard-card text-center">
          <div className="text-2xl font-bold text-blue-600">156</div>
          <div className="text-sm text-gray-600">Total Verifications</div>
        </div>
        <div className="dashboard-card text-center">
          <div className="text-2xl font-bold text-green-600">142</div>
          <div className="text-sm text-gray-600">Successful</div>
        </div>
        <div className="dashboard-card text-center">
          <div className="text-2xl font-bold text-yellow-600">12</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="dashboard-card text-center">
          <div className="text-2xl font-bold text-red-600">2</div>
          <div className="text-sm text-gray-600">Failed</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="dashboard-card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by learner name, certificate ID, or organization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Verification Logs Table */}
      <div className="dashboard-card">
        <div className="flex items-center mb-4">
          <Shield className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Verification History</h2>
        </div>
        
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
                  Verifier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {log.certificateId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {log.learnerName.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{log.learnerName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.organization}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.verifier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      log.verificationStatus === 'Verified' 
                        ? 'bg-green-100 text-green-800' 
                        : log.verificationStatus === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {log.verificationStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setSelectedLog(log)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Eye className="w-4 h-4 inline mr-1" />
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredLogs.length === 0 && (
          <div className="text-center py-12">
            <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No verification logs found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Log Details Modal */}
      {selectedLog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Verification Details</h2>
              <button
                onClick={() => setSelectedLog(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Verification ID</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedLog.id}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                    selectedLog.verificationStatus === 'Verified' 
                      ? 'bg-green-100 text-green-800' 
                      : selectedLog.verificationStatus === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {selectedLog.verificationStatus}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Certificate ID</label>
                  <p className="text-gray-900 font-mono">{selectedLog.certificateId}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Learner Name</label>
                  <p className="text-gray-900">{selectedLog.learnerName}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Requesting Organization</label>
                  <p className="text-gray-900">{selectedLog.organization}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Verified By</label>
                  <p className="text-gray-900">{selectedLog.verifier}</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Verification Timestamp</label>
                <p className="text-gray-900">{selectedLog.timestamp}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">Blockchain Verification Hash</label>
                <p className="text-xs font-mono text-gray-600 break-all">
                  0x{Math.random().toString(16).substr(2, 64)}
                </p>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                  Download Report
                </button>
                <button className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors">
                  Export Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerificationLogs;
