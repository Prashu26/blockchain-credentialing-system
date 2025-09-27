import React from 'react';
import { BarChart3, PieChart, TrendingUp, Users, Award, Target } from 'lucide-react';
import Chart from '../shared/Chart';
import { mockAnalytics } from '../../data/mockData';

const Analytics = () => {
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

  const skillDemandData = {
    labels: Object.keys(mockAnalytics.skillDemand),
    datasets: [
      {
        label: 'Market Demand (%)',
        data: Object.values(mockAnalytics.skillDemand),
        backgroundColor: 'rgba(147, 51, 234, 0.8)',
        borderColor: 'rgb(147, 51, 234)',
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
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const topPerformingSkills = [
    { skill: 'React Development', certificates: 45, growth: '+15%', demand: 92 },
    { skill: 'Blockchain Development', certificates: 32, growth: '+22%', demand: 75 },
    { skill: 'Data Science', certificates: 28, growth: '+8%', demand: 88 },
    { skill: 'Machine Learning', certificates: 22, growth: '+18%', demand: 82 },
    { skill: 'Cybersecurity', certificates: 18, growth: '+12%', demand: 78 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive insights into certification trends and performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="dashboard-card text-center">
          <Award className="w-8 h-8 text-blue-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">145</div>
          <div className="text-sm text-gray-600">Total Certificates</div>
          <div className="text-xs text-green-600 mt-1">↗ +12% this month</div>
        </div>
        <div className="dashboard-card text-center">
          <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">1,247</div>
          <div className="text-sm text-gray-600">Active Learners</div>
          <div className="text-xs text-green-600 mt-1">↗ +18% this month</div>
        </div>
        <div className="dashboard-card text-center">
          <Target className="w-8 h-8 text-purple-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">89%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
          <div className="text-xs text-green-600 mt-1">↗ +5% this month</div>
        </div>
        <div className="dashboard-card text-center">
          <BarChart3 className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">28</div>
          <div className="text-sm text-gray-600">Skill Categories</div>
          <div className="text-xs text-blue-600 mt-1">+3 new skills</div>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          type="bar"
          data={certificatesData}
          title="Certificates Issued by Skill Category"
        />
        <Chart
          type="pie"
          data={verificationData}
          title="Certificate Verification Status"
        />
      </div>

      {/* Skill Demand and Employment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          type="bar"
          data={skillDemandData}
          title="Market Demand by Skill (%)"
        />
        <Chart
          type="line"
          data={employmentData}
          title="Employment Success Rate by Skill (%)"
        />
      </div>

      {/* Top Performing Skills */}
      <div className="dashboard-card">
        <div className="flex items-center mb-6">
          <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Top Performing Skills</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Skill</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Certificates Issued</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Growth Rate</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Market Demand</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Trend</th>
              </tr>
            </thead>
            <tbody>
              {topPerformingSkills.map((skill, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-semibold mr-3">
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-900">{skill.skill}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{skill.certificates}</td>
                  <td className="py-4 px-4">
                    <span className="text-green-600 font-medium">{skill.growth}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${skill.demand}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{skill.demand}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">Rising</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly Performance Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">+24%</div>
            <div className="text-sm text-gray-600 mb-1">Certificate Growth</div>
            <div className="text-xs text-gray-500">vs last month</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">+18%</div>
            <div className="text-sm text-gray-600 mb-1">User Engagement</div>
            <div className="text-xs text-gray-500">vs last month</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">+15%</div>
            <div className="text-sm text-gray-600 mb-1">Verification Rate</div>
            <div className="text-xs text-gray-500">vs last month</div>
          </div>
        </div>
      </div>

      {/* Regional Performance */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Regional Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-2">45</div>
            <div className="text-sm text-gray-600 mb-1">North America</div>
            <div className="text-xs text-green-600">+12% growth</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-2">38</div>
            <div className="text-sm text-gray-600 mb-1">Europe</div>
            <div className="text-xs text-green-600">+8% growth</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-2">52</div>
            <div className="text-sm text-gray-600 mb-1">Asia Pacific</div>
            <div className="text-xs text-green-600">+22% growth</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-2">10</div>
            <div className="text-sm text-gray-600 mb-1">Others</div>
            <div className="text-xs text-green-600">+5% growth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
