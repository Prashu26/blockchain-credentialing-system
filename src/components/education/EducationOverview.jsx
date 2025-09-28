import React from 'react';
import { Users, Award, CheckCircle, Clock, TrendingUp, BookOpen } from 'lucide-react';
import StatCard from '../shared/StatCard';

const EducationOverview = () => {
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
            Monitor <span style={{color: '#0096C7'}}>student progress</span> and <span style={{color: '#0096C7'}}>institutional performance</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <StatCard
          title="Total Learners"
          value="1,247"
          icon={Users}
          color="ocean"
          trend="up"
          trendValue="+15%"
        />
        <StatCard
          title="Completed Courses"
          value="892"
          icon={CheckCircle}
          color="ocean"
          trend="up"
          trendValue="+8%"
        />
        <StatCard
          title="Certificates Issued"
          value="145"
          icon={Award}
          color="ocean"
          trend="up"
          trendValue="+12%"
        />
        <StatCard
          title="In Progress"
          value="355"
          icon={Clock}
          color="ocean"
          trend="up"
          trendValue="+5%"
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
              <p className="text-sm font-medium text-gray-900">Arjun Sharma completed React Development course</p>
              <p className="text-xs text-gray-500">Certificate issued automatically</p>
            </div>
            <span className="text-xs text-gray-400">1 hour ago</span>
          </div>
          
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">67 new learners enrolled in Data Science</p>
              <p className="text-xs text-gray-500">Batch DS-2025-01 started</p>
            </div>
            <span className="text-xs text-gray-400">3 hours ago</span>
          </div>
          
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Certificate verification requested</p>
              <p className="text-xs text-gray-500">CERT-002 verified by Infosys Technologies</p>
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
    </div>
  );
};

export default EducationOverview;
