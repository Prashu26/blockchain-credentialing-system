import React from 'react';
import { BarChart3, TrendingUp, Users, Award } from 'lucide-react';
import Chart from '../shared/Chart';
import { mockAnalytics } from '../../data/mockData';

const EducationAnalytics = () => {
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

  const enrollmentTrendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Enrollments',
        data: [45, 52, 38, 67, 73, 58],
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Course Analytics</h1>
          <p className="text-gray-600 mt-1">Analyze student performance and course effectiveness</p>
        </div>
        <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          Real-time Data
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="dashboard-card text-center">
          <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">1,247</div>
          <div className="text-sm text-gray-600">Total Students</div>
          <div className="text-xs text-green-600 mt-1">↗ +18% this month</div>
        </div>
        <div className="dashboard-card text-center">
          <Award className="w-8 h-8 text-green-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">145</div>
          <div className="text-sm text-gray-600">Certificates Issued</div>
          <div className="text-xs text-green-600 mt-1">↗ +25% this month</div>
        </div>
        <div className="dashboard-card text-center">
          <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">89%</div>
          <div className="text-sm text-gray-600">Completion Rate</div>
          <div className="text-xs text-green-600 mt-1">↗ +5% improvement</div>
        </div>
        <div className="dashboard-card text-center">
          <BarChart3 className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">4.7</div>
          <div className="text-sm text-gray-600">Avg Course Rating</div>
          <div className="text-xs text-blue-600 mt-1">Excellent feedback</div>
        </div>
      </div>

      {/* Charts */}
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

      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Enrollment Trends</h2>
        <Chart
          type="line"
          data={enrollmentTrendsData}
          options={{
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }}
        />
      </div>

      {/* Course Performance */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Performance Metrics</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Course</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Enrolled</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Completed</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Completion Rate</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Avg Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 font-medium text-gray-900">Full Stack Development</td>
                <td className="py-4 px-4 text-gray-900">156</td>
                <td className="py-4 px-4 text-gray-900">147</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">94%</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-900">4.8</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 font-medium text-gray-900">Data Science</td>
                <td className="py-4 px-4 text-gray-900">134</td>
                <td className="py-4 px-4 text-gray-900">116</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">87%</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-900">4.6</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 font-medium text-gray-900">Blockchain Fundamentals</td>
                <td className="py-4 px-4 text-gray-900">98</td>
                <td className="py-4 px-4 text-gray-900">89</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                    </div>
                    <span className="text-sm text-gray-600">91%</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-900">4.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Regional Performance */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Regional Enrollment Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-2">1247</div>
            <div className="text-sm text-gray-600 mb-1">North India</div>
            <div className="text-xs text-green-600">+22% growth</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-2">1586</div>
            <div className="text-sm text-gray-600 mb-1">South India</div>
            <div className="text-xs text-green-600">+28% growth</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-2">943</div>
            <div className="text-sm text-gray-600 mb-1">West India</div>
            <div className="text-xs text-green-600">+18% growth</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-2">192</div>
            <div className="text-sm text-gray-600 mb-1">Others</div>
            <div className="text-xs text-green-600">+8% growth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAnalytics;
