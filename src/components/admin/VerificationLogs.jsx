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
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#001629'}}>
      {/* Ocean Background Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 150, 199, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 150, 199, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: 'rgba(0, 150, 199, 0.4)'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: 'rgba(0, 150, 199, 0.3)', animationDelay: '1s'}}></div>

      <div className="relative z-10 p-4 md:p-6 space-y-6 md:space-y-8 pt-16 md:pt-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Verification Logs</h1>
            <p className="text-gray-300 mt-1">Track all certificate verification attempts and their status</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="ocean-button flex items-center text-sm md:text-base">
              <Download className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Export Logs</span>
              <span className="md:hidden">Export</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border shadow-lg" 
               style={{
                 background: 'rgba(255, 255, 255, 0.1)',
                 borderColor: 'rgba(0, 150, 199, 0.3)',
                 boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
               }}>
            <div className="text-xl md:text-2xl font-bold" style={{color: '#0096C7'}}>4,285</div>
            <div className="text-xs md:text-sm text-gray-300">Total Verifications</div>
          </div>
          <div className="backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border shadow-lg" 
               style={{
                 background: 'rgba(255, 255, 255, 0.1)',
                 borderColor: 'rgba(0, 150, 199, 0.3)',
                 boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
               }}>
            <div className="text-xl md:text-2xl font-bold text-green-400">4,018</div>
            <div className="text-xs md:text-sm text-gray-300">Successful</div>
          </div>
          <div className="backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border shadow-lg" 
               style={{
                 background: 'rgba(255, 255, 255, 0.1)',
                 borderColor: 'rgba(0, 150, 199, 0.3)',
                 boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
               }}>
            <div className="text-xl md:text-2xl font-bold text-yellow-400">219</div>
            <div className="text-xs md:text-sm text-gray-300">Pending</div>
          </div>
          <div className="backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border shadow-lg" 
               style={{
                 background: 'rgba(255, 255, 255, 0.1)',
                 borderColor: 'rgba(0, 150, 199, 0.3)',
                 boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
               }}>
            <div className="text-xl md:text-2xl font-bold text-red-400">48</div>
            <div className="text-xs md:text-sm text-gray-300">Failed</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="backdrop-blur-sm rounded-2xl p-4 md:p-6 border shadow-lg" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                <input
                  type="text"
                  placeholder="Search certificates, names..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="ocean-input w-full pl-8 md:pl-10 pr-4 py-2 md:py-3 text-sm md:text-base"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="ocean-input px-3 py-2 text-sm md:text-base"
              >
                <option value="all">All Status</option>
                <option value="verified">Verified</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Verification Logs */}
        <div className="backdrop-blur-sm rounded-2xl p-4 md:p-6 border shadow-lg" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <div className="flex items-center mb-4 md:mb-6">
            <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#0096C7] mr-2 md:mr-3" />
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">Verification History</h2>
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
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

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {filteredLogs.map((log) => (
              <div key={log.id} 
                   className="backdrop-blur-sm rounded-xl p-4 border shadow-md"
                   style={{
                     background: 'rgba(255, 255, 255, 0.15)',
                     borderColor: 'rgba(0, 150, 199, 0.2)',
                     boxShadow: '0 4px 16px rgba(0, 150, 199, 0.1)'
                   }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#0096C7] to-[#00B4D8] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {log.learnerName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{log.learnerName}</h3>
                      <p className="text-xs text-gray-600 font-mono">{log.certificateId}</p>
                    </div>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    log.verificationStatus === 'Verified' 
                      ? 'bg-green-100 text-green-800' 
                      : log.verificationStatus === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {log.verificationStatus}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Organization:</span>
                    <span className="text-gray-900 font-medium">{log.organization}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verifier:</span>
                    <span className="text-gray-900">{log.verifier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timestamp:</span>
                    <span className="text-gray-700">{log.timestamp}</span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedLog(log)}
                    className="w-full ocean-btn text-sm py-2"
                  >
                    <Eye className="w-4 h-4 inline mr-1" />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="backdrop-blur-sm rounded-2xl p-4 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border shadow-2xl"
                 style={{
                   background: 'rgba(255, 255, 255, 0.95)',
                   borderColor: 'rgba(0, 150, 199, 0.3)',
                   boxShadow: '0 20px 64px rgba(0, 150, 199, 0.3)'
                 }}>
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Verification Details</h2>
                <button
                  onClick={() => setSelectedLog(null)}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full"
                >
                  ✕
                </button>
              </div>
            
              <div className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Verification ID</label>
                    <p className="text-base md:text-lg font-semibold text-gray-900">{selectedLog.id}</p>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Certificate ID</label>
                    <p className="text-gray-900 font-mono text-sm">{selectedLog.certificateId}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Learner Name</label>
                    <p className="text-gray-900">{selectedLog.learnerName}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                
                <div className="backdrop-blur-sm rounded-xl p-4 border"
                     style={{
                       background: 'rgba(0, 150, 199, 0.05)',
                       borderColor: 'rgba(0, 150, 199, 0.2)'
                     }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blockchain Verification Hash</label>
                  <p className="text-xs font-mono text-gray-600 break-all">
                    0x{Math.random().toString(16).substr(2, 64)}
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <button className="flex-1 ocean-btn">
                    Download Report
                  </button>
                  <button className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">
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
