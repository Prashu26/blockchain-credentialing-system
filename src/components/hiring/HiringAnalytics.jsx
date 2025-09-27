import React from 'react';
import { BarChart3, TrendingUp, Users, MapPin } from 'lucide-react';
import Chart from '../shared/Chart';
import { mockAnalytics } from '../../data/mockData';

const HiringAnalytics = () => {
  const skillDemandData = {
    labels: ['React', 'Python', 'AI/ML', 'Blockchain', 'Node.js', 'DevOps'],
    datasets: [
      {
        label: 'Job Postings',
        data: [85, 92, 78, 45, 67, 56],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
      },
    ],
  };

  const hiringTrendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Successful Hires',
        data: [12, 18, 15, 22, 28, 25],
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const salaryRangeData = {
    labels: ['Entry Level', 'Mid Level', 'Senior Level', 'Lead/Principal'],
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hiring Analytics</h1>
          <p className="text-gray-600 mt-1">Analyze market trends and hiring performance</p>
        </div>
        <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          Market Intelligence
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="dashboard-card text-center">
          <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">2,847</div>
          <div className="text-sm text-gray-600">Available Candidates</div>
          <div className="text-xs text-green-600 mt-1">↗ +15% this month</div>
        </div>
        <div className="dashboard-card text-center">
          <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">156</div>
          <div className="text-sm text-gray-600">Successful Hires</div>
          <div className="text-xs text-green-600 mt-1">↗ +28% this quarter</div>
        </div>
        <div className="dashboard-card text-center">
          <BarChart3 className="w-8 h-8 text-purple-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">18 days</div>
          <div className="text-sm text-gray-600">Avg Time to Hire</div>
          <div className="text-xs text-green-600 mt-1">↘ -3 days improvement</div>
        </div>
        <div className="dashboard-card text-center">
          <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">89%</div>
          <div className="text-sm text-gray-600">Offer Acceptance</div>
          <div className="text-xs text-green-600 mt-1">↗ +5% improvement</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          type="bar"
          data={skillDemandData}
          title="Most In-Demand Skills"
        />
        <Chart
          type="pie"
          data={salaryRangeData}
          title="Hiring by Experience Level"
        />
      </div>

      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Hiring Trends Over Time</h2>
        <Chart
          type="line"
          data={hiringTrendsData}
          options={{
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }}
        />
      </div>

      {/* Regional Hiring Heatmap */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Regional Hiring Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
            <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600 mb-1">342</div>
            <div className="text-sm text-gray-600 mb-1">North America</div>
            <div className="text-xs text-blue-600">High Activity</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
            <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600 mb-1">287</div>
            <div className="text-sm text-gray-600 mb-1">Europe</div>
            <div className="text-xs text-green-600">Growing Market</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
            <MapPin className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600 mb-1">456</div>
            <div className="text-sm text-gray-600 mb-1">Asia Pacific</div>
            <div className="text-xs text-purple-600">Fastest Growth</div>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-lg border-2 border-yellow-200">
            <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-600 mb-1">192</div>
            <div className="text-sm text-gray-600 mb-1">Others</div>
            <div className="text-xs text-yellow-600">Emerging Markets</div>
          </div>
        </div>
      </div>

      {/* Skill Gap Analysis */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Skill Gap Analysis</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">AI/Machine Learning</h3>
              <p className="text-sm text-gray-600">High demand, limited supply</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-red-600">Critical Gap</div>
              <div className="text-sm text-gray-500">Supply: 23% | Demand: 78%</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">Blockchain Development</h3>
              <p className="text-sm text-gray-600">Growing demand, emerging talent</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-yellow-600">Moderate Gap</div>
              <div className="text-sm text-gray-500">Supply: 45% | Demand: 67%</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">Full Stack Development</h3>
              <p className="text-sm text-gray-600">Balanced supply and demand</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-green-600">Well Supplied</div>
              <div className="text-sm text-gray-500">Supply: 82% | Demand: 85%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Salary Insights */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Market Salary Insights</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Skill</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Entry Level</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Mid Level</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Senior Level</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 font-medium text-gray-900">AI/Machine Learning</td>
                <td className="py-4 px-4 text-gray-900">$85K - $110K</td>
                <td className="py-4 px-4 text-gray-900">$120K - $160K</td>
                <td className="py-4 px-4 text-gray-900">$180K - $250K</td>
                <td className="py-4 px-4 text-green-600">↗ +15%</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 font-medium text-gray-900">Blockchain</td>
                <td className="py-4 px-4 text-gray-900">$75K - $95K</td>
                <td className="py-4 px-4 text-gray-900">$110K - $140K</td>
                <td className="py-4 px-4 text-gray-900">$160K - $220K</td>
                <td className="py-4 px-4 text-green-600">↗ +12%</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 font-medium text-gray-900">Full Stack</td>
                <td className="py-4 px-4 text-gray-900">$65K - $85K</td>
                <td className="py-4 px-4 text-gray-900">$95K - $125K</td>
                <td className="py-4 px-4 text-gray-900">$140K - $180K</td>
                <td className="py-4 px-4 text-blue-600">↗ +8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HiringAnalytics;
