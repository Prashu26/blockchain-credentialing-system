import React from 'react';
import { Users, Award, TrendingUp, Search, Eye, CheckCircle } from 'lucide-react';
import StatCard from '../shared/StatCard';
import { mockLearners, mockCertificates } from '../../data/mockData';

const HiringOverview = () => {
  const topCandidates = mockLearners.slice(0, 5);
  const recentVerifications = mockCertificates.slice(0, 4);

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
              Hiring Dashboard
            </span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-medium">
            Find and verify <span style={{color: '#0096C7'}}>top talent</span> with <span style={{color: '#0096C7'}}>blockchain-verified skills</span>
          </p>
          <div className="flex justify-center">
            <div className="text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center space-x-2" style={{
              background: 'linear-gradient(135deg, #0096C7, #0077B6)',
              boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
            }}>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>💼 Active Hiring</span>
            </div>
          </div>
        </div>

      {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <StatCard
            title="Available Candidates"
            value="2,847"
            trend="up"
            trendValue="+12%"
            icon={Users}
            color="ocean"
          />
          <StatCard
            title="Verified Skills"
            value="15,234"
            trend="up"
            trendValue="+8%"
            icon={Award}
            color="ocean"
          />
          <StatCard
            title="Successful Hires"
            value="156"
            trend="up"
            trendValue="+25%"
            icon={TrendingUp}
            color="ocean"
          />
          <StatCard
            title="Verification Rate"
            value="98.7%"
            trend="up"
            trendValue="+2%"
            icon={CheckCircle}
            color="ocean"
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
    </div>
  );
};

export default HiringOverview;
