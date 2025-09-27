import React, { useState } from 'react';
import { Search, UserCheck, BarChart3, Award, Users, TrendingUp, Eye, Star, MapPin } from 'lucide-react';
import StatCard from '../shared/StatCard';
import Chart from '../shared/Chart';
import { mockCertificates, mockLearners, mockAnalytics } from '../../data/mockData';

const HiringDashboard = () => {
  const [verificationId, setVerificationId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

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

  const skillAvailabilityData = {
    labels: Object.keys(mockAnalytics.skillDemand),
    datasets: [
      {
        label: 'Available Candidates',
        data: [120, 95, 78, 85, 67],
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 2,
      },
      {
        label: 'Market Demand',
        data: Object.values(mockAnalytics.skillDemand),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
      },
    ],
  };

  const topSkillsData = {
    labels: ['React', 'Python', 'Blockchain', 'Machine Learning', 'Cybersecurity'],
    datasets: [
      {
        data: [145, 132, 98, 87, 76],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(147, 51, 234, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(34, 197, 94)',
          'rgb(147, 51, 234)',
          'rgb(251, 191, 36)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const topCandidates = [
    { name: 'John Doe', skills: ['React', 'Node.js', 'MongoDB'], level: 'Advanced', certificates: 3, rating: 4.8 },
    { name: 'Jane Smith', skills: ['Blockchain', 'Solidity', 'Web3'], level: 'Expert', certificates: 5, rating: 4.9 },
    { name: 'Mike Johnson', skills: ['Python', 'ML', 'Data Science'], level: 'Intermediate', certificates: 2, rating: 4.6 },
    { name: 'Sarah Wilson', skills: ['Cybersecurity', 'Ethical Hacking'], level: 'Advanced', certificates: 4, rating: 4.7 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hiring Dashboard</h1>
          <p className="text-gray-600 mt-1">Verify skills and discover top talent</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Verified Candidates: 1,247
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Verified Learners"
          value="1,247"
          icon={UserCheck}
          color="green"
          trend="up"
          trendValue="+18%"
        />
        <StatCard
          title="High-Demand Skills"
          value="28"
          icon={TrendingUp}
          color="blue"
          trend="up"
          trendValue="+5 new"
        />
        <StatCard
          title="Top Candidates"
          value="156"
          icon={Star}
          color="yellow"
          trend="up"
          trendValue="+22%"
        />
        <StatCard
          title="Skill Matches"
          value="89%"
          icon={Award}
          color="purple"
          trend="up"
          trendValue="+7%"
        />
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
                    <strong>Candidate:</strong> {verificationResult.certificate.learnerName}
                  </div>
                  <div>
                    <strong>Skill:</strong> {verificationResult.certificate.skill}
                  </div>
                  <div>
                    <strong>Level:</strong> {verificationResult.certificate.level}
                  </div>
                  <div>
                    <strong>Organization:</strong> {verificationResult.certificate.organization}
                  </div>
                </div>
                <div className="mt-3 p-3 bg-white rounded border">
                  <strong>Blockchain Verification:</strong>
                  <p className="text-xs font-mono mt-1 break-all">
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

      {/* Top Candidates */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Verified Candidates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topCandidates.map((candidate, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedCandidate(candidate)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {candidate.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
                    <p className="text-sm text-gray-600">{candidate.level} Level</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium text-gray-700">{candidate.rating}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{candidate.certificates} Verified Certificates</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learner Portfolios */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Learner Portfolios</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Candidate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Skills & Badges
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Certificates
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
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {learner.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{learner.name}</div>
                        <div className="text-sm text-gray-500">{learner.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {learner.skillBadges.slice(0, 3).map((badge, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                          {badge}
                        </span>
                      ))}
                      {learner.skillBadges.length > 3 && (
                        <span className="text-xs text-gray-500">+{learner.skillBadges.length - 3} more</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {learner.skillLevel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {learner.certificates.length} Verified
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <Eye className="w-4 h-4 inline mr-1" />
                      View Portfolio
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          type="bar"
          data={skillAvailabilityData}
          title="Skill Availability vs Market Demand"
        />
        <Chart
          type="pie"
          data={topSkillsData}
          title="Most In-Demand Skills"
        />
      </div>

      {/* Regional Skill Heatmap */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Regional Skill Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">North America</h3>
            <p className="text-sm text-gray-600">React: 245 • Python: 189</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Europe</h3>
            <p className="text-sm text-gray-600">Blockchain: 156 • ML: 134</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <MapPin className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Asia</h3>
            <p className="text-sm text-gray-600">Python: 298 • React: 267</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Others</h3>
            <p className="text-sm text-gray-600">Cybersecurity: 87 • ML: 76</p>
          </div>
        </div>
      </div>

      {/* Candidate Details Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Candidate Profile</h2>
              <button
                onClick={() => setSelectedCandidate(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                  {selectedCandidate.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{selectedCandidate.name}</h3>
                  <p className="text-gray-600">{selectedCandidate.level} Level Professional</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-700">{selectedCandidate.rating} Rating</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills & Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedCandidate.skills.map((skill, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Verified Certificates</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-center text-gray-600">
                    {selectedCandidate.certificates} verified certificates on blockchain
                  </p>
                  <div className="flex justify-center mt-3">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                      View All Certificates
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
                  Contact Candidate
                </button>
                <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                  Save to Shortlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiringDashboard;
