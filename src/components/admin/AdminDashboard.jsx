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
    <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #001629 0%, #003459 50%, #012A4A 100%)'}}>
      {/* #0096C7 Background Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 150, 199, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 150, 199, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* #0096C7 Gradient Blur Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: 'rgba(0, 150, 199, 0.4)'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: 'rgba(0, 150, 199, 0.3)', animationDelay: '1s'}}></div>
      
      <div className="relative z-10 p-8 space-y-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{textShadow: '0 0 30px rgba(0, 150, 199, 0.7)'}}>
            <span style={{color: '#0096C7', textShadow: '0 0 20px rgba(0, 150, 199, 0.8)'}}>
              Admin Dashboard
            </span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-medium">
            Manage <span style={{color: '#0096C7'}}>certificates</span> and monitor <span style={{color: '#0096C7'}}>blockchain activity</span>
          </p>
          <div className="flex justify-center">
            <div className="text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center space-x-2" style={{
              background: 'linear-gradient(135deg, #0096C7, #0077B6)',
              boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
            }}>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>🔗 Blockchain Active</span>
            </div>
          </div>
        </div>

      {/* Stats Cards */}
              {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            title="Total Certificates"
            value="145"
            icon={Award}
            color="ocean"
            trend="up"
            trendValue="+12%"
          />
          <StatCard
            title="Verified"
            value="85"
            icon={CheckCircle}
            color="ocean"
            trend="up"
            trendValue="+8%"
          />
          <StatCard
            title="Pending"
            value="45"
            icon={Clock}
            color="ocean"
            trend="down"
            trendValue="-3%"
          />
          <StatCard
            title="Issues"
            value="15"
            icon={AlertCircle}
            color="ocean"
            trend="down"
            trendValue="-15%"
          />
        </div>

        {/* Certificate Issuance Panel */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-blue-500/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="w-8 h-8 mr-3 text-cyan-400" />
            Certificate Issuance
          </h2>
          <form onSubmit={handleIssueCertificate} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-bold text-cyan-200 mb-3">Learner Name</label>
              <input
                type="text"
                value={newCertificate.learnerName}
                onChange={(e) => setNewCertificate({...newCertificate, learnerName: e.target.value})}
                className="ocean-input"
                required
                placeholder="Enter learner name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-cyan-200 mb-3">Skill/Badge</label>
              <input
                type="text"
                value={newCertificate.skill}
                onChange={(e) => setNewCertificate({...newCertificate, skill: e.target.value})}
                className="ocean-input"
                required
                placeholder="Enter skill or badge"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-cyan-200 mb-3">Level</label>
              <select
                value={newCertificate.level}
                onChange={(e) => setNewCertificate({...newCertificate, level: e.target.value})}
                className="ocean-input"
              >
                <option value="Beginner">🌊 Beginner</option>
                <option value="Intermediate">🏄 Intermediate</option>
                <option value="Advanced">🌊 Advanced</option>
                <option value="Expert">⭐ Expert</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-cyan-200 mb-3">Issue Date</label>
              <input
                type="date"
                value={newCertificate.issueDate}
                onChange={(e) => setNewCertificate({...newCertificate, issueDate: e.target.value})}
                className="ocean-input"
                required
              />
            </div>
            <div className="md:col-span-2 lg:col-span-4 mt-4">
              <button
                type="submit"
                className="ocean-button px-8 py-4 text-lg font-bold"
              >
                🌊 Issue Certificate
              </button>
            </div>
          </form>
          
          {showSuccess && (
            <div className="mt-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-200 px-6 py-4 rounded-2xl">
              ✅ Certificate issued successfully! Blockchain hash: 0x{Math.random().toString(16).substr(2, 40)}
            </div>
          )}
      </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-blue-500/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-cyan-400" />
            Recent Verification Logs
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/20">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-cyan-200 uppercase tracking-wider">
                    Certificate ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-cyan-200 uppercase tracking-wider">
                    Learner Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-cyan-200 uppercase tracking-wider">
                    Organization
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-cyan-200 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-cyan-200 uppercase tracking-wider">
                    Timestamp
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white/5 divide-y divide-white/10">
                {mockVerificationLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-white/10 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">
                      {log.certificateId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-200">
                      {log.learnerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-200">
                      {log.organization}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                        log.verificationStatus === 'Verified' 
                          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white' 
                          : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                      }`}>
                        {log.verificationStatus === 'Verified' ? '✅ Verified' : '⏳ Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-300">
                      {log.timestamp}
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>

        {/* Blockchain Status */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-blue-500/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3 text-cyan-400" />
            Blockchain Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white/10 rounded-2xl border border-white/20">
              <p className="text-sm font-bold text-cyan-200 mb-2">Network</p>
              <p className="text-xl font-bold text-white">{mockBlockchainStatus.network}</p>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-2xl border border-white/20">
              <p className="text-sm font-bold text-cyan-200 mb-2">Status</p>
              <p className="text-xl font-bold text-emerald-300 flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                {mockBlockchainStatus.status}
              </p>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-2xl border border-white/20">
              <p className="text-sm font-bold text-cyan-200 mb-2">Transactions</p>
              <p className="text-xl font-bold text-white">{mockBlockchainStatus.transactionCount}</p>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-2xl border border-white/20">
              <p className="text-sm font-bold text-cyan-200 mb-2">🌱 CO₂ Saved</p>
              <p className="text-xl font-bold text-emerald-300">{mockBlockchainStatus.carbonFootprint}</p>
            </div>
        </div>
        <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <p className="text-sm text-blue-200">Last Block Hash:</p>
          <p className="text-xs font-mono text-cyan-200 break-all mt-2">{mockBlockchainStatus.lastBlock}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
