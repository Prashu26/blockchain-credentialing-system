import React, { useState } from 'react';
import { Users, Award, CheckCircle, Clock, Search, Eye, FileText, TrendingUp } from 'lucide-react';
import StatCard from '../shared/StatCard';
import Chart from '../shared/Chart';
import { mockLearners, mockCertificates, mockAnalytics } from '../../data/mockData';

const EducationDashboard = () => {
  const [selectedLearner, setSelectedLearner] = useState(null);
  const [verificationId, setVerificationId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerification = (e) => {
    e.preventDefault();
    const cert = mockCertificates.find(c => c.id === verificationId);
    if (cert) {
      setVerificationResult({
        found: true,
        certificate: cert
      });
    } else {
      setVerificationResult({
        found: false,
        message: 'Certificate not found or invalid ID'
      });
    }
  };

  const courseAnalyticsData = {
    labels: ['Full Stack Development', 'Data Science', 'Blockchain', 'AI/ML', 'Cybersecurity'],
    datasets: [
      {
        label: 'Certificates Issued',
        data: [45, 32, 28, 22, 18],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
      },
    ],
  };

  const skillLevelData = {
    labels: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    datasets: [
      {
        data: [25, 35, 30, 10],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
        ],
        borderColor: [
          'rgb(239, 68, 68)',
          'rgb(251, 191, 36)',
          'rgb(59, 130, 246)',
          'rgb(34, 197, 94)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-start justify-center p-4 relative overflow-hidden" style={{backgroundColor: '#001629'}}>
      {/* #0096C7 Style Background Grid */}
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: 'rgba(0, 150, 199, 0.2)', animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl w-full p-8 space-y-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{textShadow: '0 0 30px rgba(0, 150, 199, 0.7)'}}>
            <span style={{color: '#0096C7', textShadow: '0 0 20px rgba(0, 150, 199, 0.8)'}}>
              Education Dashboard
            </span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-medium">
            Manage <span style={{color: '#0096C7'}}>learners</span> and track <span style={{color: '#0096C7'}}>educational progress</span>
          </p>
          <div className="flex justify-center">
            <div className="text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center space-x-2" style={{
              background: 'linear-gradient(135deg, #0096C7, #0077B6)',
              boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
            }}>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>📚 Active Courses: 12</span>
            </div>
          </div>
        </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Learners"
          value="1,247"
          icon={Users}
          color="blue"
          trend="up"
          trendValue="+15%"
        />
        <StatCard
          title="Completed Courses"
          value="892"
          icon={CheckCircle}
          color="green"
          trend="up"
          trendValue="+8%"
        />
        <StatCard
          title="Certificates Issued"
          value="145"
          icon={Award}
          color="purple"
          trend="up"
          trendValue="+12%"
        />
        <StatCard
          title="In Progress"
          value="355"
          icon={Clock}
          color="yellow"
        />
      </div>

      {/* Learner Management */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Learner Management</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Skill Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockLearners.map((learner) => (
                <tr key={learner.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {learner.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{learner.name}</div>
                        <div className="text-sm text-gray-500">{learner.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {learner.course}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      learner.completionStatus === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {learner.completionStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {learner.skillLevel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setSelectedLearner(learner)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      <Eye className="w-4 h-4 inline mr-1" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Certificate Verification Panel */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Certificate Verification</h2>
        <form onSubmit={handleVerification} className="mb-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                value={verificationId}
                onChange={(e) => setVerificationId(e.target.value)}
                placeholder="Enter Certificate ID or scan QR code"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center"
            >
              <Search className="w-4 h-4 mr-2" />
              Verify
            </button>
          </div>
        </form>
        
        {verificationResult && (
          <div className={`p-4 rounded-md ${
            verificationResult.found 
              ? 'bg-green-100 border border-green-400 text-green-700' 
              : 'bg-red-100 border border-red-400 text-red-700'
          }`}>
            {verificationResult.found ? (
              <div>
                <h3 className="font-semibold mb-2">Certificate Verified ✓</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Learner:</strong> {verificationResult.certificate.learnerName}
                  </div>
                  <div>
                    <strong>Skill:</strong> {verificationResult.certificate.skill}
                  </div>
                  <div>
                    <strong>Level:</strong> {verificationResult.certificate.level}
                  </div>
                  <div>
                    <strong>Issue Date:</strong> {verificationResult.certificate.issueDate}
                  </div>
                </div>
                <div className="mt-2">
                  <strong>Blockchain Hash:</strong>
                  <p className="text-xs font-mono bg-white p-2 rounded mt-1 break-all">
                    {verificationResult.certificate.blockchainHash}
                  </p>
                </div>
              </div>
            ) : (
              <p>{verificationResult.message}</p>
            )}
          </div>
        )}
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          type="bar"
          data={courseAnalyticsData}
          title="Certificates Issued by Course"
        />
        <Chart
          type="pie"
          data={skillLevelData}
          title="Skill Level Distribution"
        />
      </div>

      {/* Learner Details Modal */}
      {selectedLearner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Learner Profile</h2>
              <button
                onClick={() => setSelectedLearner(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <p className="text-gray-900">{selectedLearner.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <p className="text-gray-900">{selectedLearner.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Course</label>
                      <p className="text-gray-900">{selectedLearner.course}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Status</label>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        selectedLearner.completionStatus === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {selectedLearner.completionStatus}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Skill Level</label>
                      <p className="text-gray-900">{selectedLearner.skillLevel}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Career Path</h3>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-md">
                    {selectedLearner.careerPath}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedLearner.skillBadges.map((badge, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Certificates</h3>
                  <div className="space-y-3">
                    {selectedLearner.certificates.map((certId) => {
                      const cert = mockCertificates.find(c => c.id === certId);
                      return cert ? (
                        <div key={certId} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900">{cert.skill}</h4>
                              <p className="text-sm text-gray-600">Level: {cert.level}</p>
                              <p className="text-sm text-gray-600">Issued: {cert.issueDate}</p>
                            </div>
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800 text-sm">
                                <FileText className="w-4 h-4 inline mr-1" />
                                PDF
                              </button>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-xs text-gray-500">Blockchain Hash:</p>
                            <p className="text-xs font-mono text-gray-600 bg-gray-100 p-1 rounded break-all">
                              {cert.blockchainHash}
                            </p>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default EducationDashboard;
