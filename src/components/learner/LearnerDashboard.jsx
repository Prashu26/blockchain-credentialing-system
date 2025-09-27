import React, { useState } from 'react';
import { Award, BookOpen, TrendingUp, Eye, Download, QrCode, Star, Target, ArrowRight } from 'lucide-react';
import StatCard from '../shared/StatCard';
import Chart from '../shared/Chart';
import { mockCertificates, mockSkillBadges, mockCareerPathways, mockAnalytics } from '../../data/mockData';

const LearnerDashboard = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const skillAnalyticsData = {
    labels: Object.keys(mockAnalytics.skillDemand),
    datasets: [
      {
        label: 'Skill Demand (%)',
        data: Object.values(mockAnalytics.skillDemand),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
      },
    ],
  };

  const employmentData = {
    labels: Object.keys(mockAnalytics.employmentStats),
    datasets: [
      {
        label: 'Employment Rate (%)',
        data: Object.values(mockAnalytics.employmentStats),
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(147, 51, 234, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(147, 51, 234)',
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
          <h1 className="text-3xl font-bold text-gray-900">Skill Passport</h1>
          <p className="text-gray-600 mt-1">Track your learning journey and career growth</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Level: Advanced
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Certificates Earned"
          value="12"
          icon={Award}
          color="blue"
          trend="up"
          trendValue="+3 this month"
        />
        <StatCard
          title="Skill Badges"
          value="28"
          icon={Star}
          color="yellow"
          trend="up"
          trendValue="+5 this month"
        />
        <StatCard
          title="Career Score"
          value="85%"
          icon={Target}
          color="green"
          trend="up"
          trendValue="+12%"
        />
        <StatCard
          title="Learning Hours"
          value="240"
          icon={BookOpen}
          color="purple"
          trend="up"
          trendValue="+40 hrs"
        />
      </div>

      {/* Skill Passport - Certificates Grid */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCertificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card p-6 cursor-pointer"
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-blue-500" />
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  cert.status === 'Verified' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {cert.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.skill}</h3>
              <p className="text-sm text-gray-600 mb-2">Level: {cert.level}</p>
              <p className="text-sm text-gray-600 mb-4">Issued: {cert.issueDate}</p>
              <p className="text-xs text-gray-500">Organization: {cert.organization}</p>
              <div className="mt-4 flex space-x-2">
                <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </button>
                <button className="flex items-center text-green-600 hover:text-green-800 text-sm">
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </button>
                <button className="flex items-center text-purple-600 hover:text-purple-800 text-sm">
                  <QrCode className="w-4 h-4 mr-1" />
                  QR Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Badges */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Skill Badges</h2>
        <div className="flex flex-wrap gap-3">
          {mockSkillBadges.map((badge, index) => (
            <div
              key={index}
              className={`skill-badge bg-gradient-to-r from-${badge.color}-500 to-${badge.color}-600`}
            >
              <Star className="w-4 h-4 mr-2" />
              <span>{badge.name}</span>
              <span className="ml-2 text-xs opacity-75">({badge.level})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Career Pathways */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Career Pathway Recommendations</h2>
        <div className="space-y-6">
          {mockCareerPathways.map((pathway, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Current: {pathway.current}</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Recommended
                </span>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  {pathway.current}
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg">
                  {pathway.recommended}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Other Possible Paths:</h4>
                <div className="flex flex-wrap gap-2">
                  {pathway.next.filter(path => path !== pathway.recommended).map((path, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {path}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Required Skills for {pathway.recommended}:</h4>
                <div className="flex flex-wrap gap-2">
                  {pathway.requiredSkills.map((skill, idx) => (
                    <span key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          type="bar"
          data={skillAnalyticsData}
          title="Market Demand for Your Skills"
        />
        <Chart
          type="pie"
          data={employmentData}
          title="Employment Rates by Skill Area"
        />
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Certificate Details</h2>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Certificate ID</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedCertificate.id}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <span className={`inline-flex px-2 py-1 text-sm font-semibold rounded-full ${
                    selectedCertificate.status === 'Verified' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedCertificate.status}
                  </span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Skill</label>
                <p className="text-lg font-semibold text-gray-900">{selectedCertificate.skill}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Level</label>
                  <p className="text-gray-900">{selectedCertificate.level}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Issue Date</label>
                  <p className="text-gray-900">{selectedCertificate.issueDate}</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Organization</label>
                <p className="text-gray-900">{selectedCertificate.organization}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Blockchain Hash</label>
                <p className="text-xs font-mono text-gray-600 bg-gray-100 p-2 rounded break-all">
                  {selectedCertificate.blockchainHash}
                </p>
              </div>
              
              <div className="flex items-center justify-center pt-4">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-gray-400" />
                  <span className="sr-only">QR Code</span>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                  Download PDF
                </button>
                <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
                  Share Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnerDashboard;
