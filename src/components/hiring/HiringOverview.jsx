import React from 'react';
import { Users, Award, TrendingUp, Search, Eye, CheckCircle } from 'lucide-react';
import StatCard from '../shared/StatCard';
import { mockLearners, mockCertificates } from '../../data/mockData';

const HiringOverview = () => {
  const topCandidates = mockLearners.slice(0, 5);
  const recentVerifications = mockCertificates.slice(0, 4);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hiring Dashboard</h1>
          <p className="text-gray-600 mt-1">Find and verify top talent with blockchain-verified skills</p>
        </div>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          Active Hiring
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Available Candidates"
          value="2,847"
          change="+12%"
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Verified Skills"
          value="15,234"
          change="+8%"
          icon={Award}
          color="green"
        />
        <StatCard
          title="Successful Hires"
          value="156"
          change="+25%"
          icon={TrendingUp}
          color="purple"
        />
        <StatCard
          title="Verification Rate"
          value="98.7%"
          change="+2%"
          icon={CheckCircle}
          color="yellow"
        />
      </div>

      {/* Quick Actions */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-6 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors text-left">
            <Search className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Search Candidates</h3>
            <p className="text-sm text-gray-600">Find candidates by skills, experience, or location</p>
          </button>
          
          <button className="p-6 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors text-left">
            <Award className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Verify Certificate</h3>
            <p className="text-sm text-gray-600">Instantly verify candidate credentials</p>
          </button>
          
          <button className="p-6 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-colors text-left">
            <TrendingUp className="w-8 h-8 text-purple-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">View Analytics</h3>
            <p className="text-sm text-gray-600">Analyze hiring trends and skill demands</p>
          </button>
        </div>
      </div>

      {/* Top Candidates */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Top Candidates</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All Candidates →
          </button>
        </div>
        
        <div className="space-y-4">
          {topCandidates.map((candidate) => (
            <div key={candidate.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {candidate.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                  <p className="text-sm text-gray-600">{candidate.course}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">
                      {candidate.skillLevel}
                    </span>
                    <span className="text-xs text-gray-500">
                      {candidate.certificates.length} certificates
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <Eye className="w-4 h-4 inline mr-1" />
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Verifications */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Verifications</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All Verifications →
          </button>
        </div>
        
        <div className="space-y-3">
          {recentVerifications.map((cert) => (
            <div key={cert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900">{cert.learnerName}</p>
                  <p className="text-sm text-gray-600">{cert.skill} - {cert.level}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-900">{cert.issueDate}</p>
                <p className="text-xs text-green-600">✓ Verified</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Demand Trends */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">In-Demand Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">React</div>
            <div className="text-sm text-gray-600">High Demand</div>
            <div className="text-xs text-green-600 mt-1">↗ +35% this month</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">Python</div>
            <div className="text-sm text-gray-600">Very High Demand</div>
            <div className="text-xs text-green-600 mt-1">↗ +42% this month</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">AI/ML</div>
            <div className="text-sm text-gray-600">Extremely High</div>
            <div className="text-xs text-green-600 mt-1">↗ +58% this month</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600 mb-2">Blockchain</div>
            <div className="text-sm text-gray-600">Growing Demand</div>
            <div className="text-xs text-green-600 mt-1">↗ +28% this month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringOverview;
