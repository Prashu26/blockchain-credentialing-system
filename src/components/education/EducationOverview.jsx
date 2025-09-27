import React from 'react';
import { Users, Award, CheckCircle, Clock, TrendingUp, BookOpen } from 'lucide-react';
import StatCard from '../shared/StatCard';

const EducationOverview = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Education Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Monitor student progress and institutional performance</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Active Courses: 12
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

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="dashboard-card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors text-left flex items-center">
              <Users className="w-5 h-5 mr-3" />
              Manage Learners
            </button>
            <button className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors text-left flex items-center">
              <Award className="w-5 h-5 mr-3" />
              Verify Certificates
            </button>
            <button className="w-full bg-purple-500 text-white py-3 px-4 rounded-md hover:bg-purple-600 transition-colors text-left flex items-center">
              <TrendingUp className="w-5 h-5 mr-3" />
              View Analytics
            </button>
          </div>
        </div>

        <div className="dashboard-card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Performance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Full Stack Development</span>
              <span className="text-green-600 font-medium">94% completion</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Data Science</span>
              <span className="text-blue-600 font-medium">87% completion</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Blockchain Fundamentals</span>
              <span className="text-purple-600 font-medium">91% completion</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">AI/ML Basics</span>
              <span className="text-yellow-600 font-medium">78% completion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">John Doe completed React Development course</p>
              <p className="text-xs text-gray-500">Certificate issued automatically</p>
            </div>
            <span className="text-xs text-gray-400">1 hour ago</span>
          </div>
          
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">25 new learners enrolled in Data Science</p>
              <p className="text-xs text-gray-500">Batch DS-2024-03 started</p>
            </div>
            <span className="text-xs text-gray-400">3 hours ago</span>
          </div>
          
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Certificate verification requested</p>
              <p className="text-xs text-gray-500">CERT-002 verified by Tech Company B</p>
            </div>
            <span className="text-xs text-gray-400">5 hours ago</span>
          </div>
        </div>
      </div>

      {/* Enrollment Trends */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly Enrollment Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">+18%</div>
            <div className="text-sm text-gray-600 mb-1">New Enrollments</div>
            <div className="text-xs text-gray-500">vs last month</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">+12%</div>
            <div className="text-sm text-gray-600 mb-1">Course Completions</div>
            <div className="text-xs text-gray-500">vs last month</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">+25%</div>
            <div className="text-sm text-gray-600 mb-1">Certificates Issued</div>
            <div className="text-xs text-gray-500">vs last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationOverview;
