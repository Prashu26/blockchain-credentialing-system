import React from 'react';
import { 
  Home, 
  Award, 
  Users, 
  BarChart3, 
  Shield, 
  BookOpen, 
  Search,
  FileText,
  Building2,
  UserCheck
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, userType }) => {
  const getMenuItems = () => {
    switch (userType) {
      case 'admin':
        return [
          { id: 'dashboard', label: 'Dashboard Overview', icon: Home },
          { id: 'issuance', label: 'Certificate Issuance', icon: Award },
          { id: 'verification', label: 'Verification Logs', icon: Shield },
          { id: 'blockchain', label: 'Blockchain Status', icon: Building2 },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 }
        ];
      case 'learner':
        return [
          { id: 'passport', label: 'Skill Passport', icon: Award },
          { id: 'pathway', label: 'Career Pathway', icon: BookOpen },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 },
          { id: 'certificates', label: 'Certificate Viewer', icon: FileText }
        ];
      case 'education':
        return [
          { id: 'dashboard', label: 'Dashboard Overview', icon: Home },
          { id: 'learners', label: 'Learner Management', icon: Users },
          { id: 'verification', label: 'Certificate Verification', icon: Shield },
          { id: 'analytics', label: 'Course Analytics', icon: BarChart3 },
          { id: 'reports', label: 'Reports', icon: FileText }
        ];
      case 'hiring':
        return [
          { id: 'dashboard', label: 'Dashboard Overview', icon: Home },
          { id: 'verification', label: 'Certificate Verification', icon: Shield },
          { id: 'portfolios', label: 'Candidate Portfolios', icon: UserCheck },
          { id: 'analytics', label: 'Hiring Analytics', icon: BarChart3 },
          { id: 'reports', label: 'Reports', icon: FileText }
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="bg-white shadow-lg h-screen w-64 fixed left-0 top-0 z-10">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">BlockCred</h1>
            <p className="text-sm text-gray-500 capitalize">{userType} Portal</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Blockchain Status</p>
              <p className="text-xs opacity-90">Active & Secure</p>
            </div>
            <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
