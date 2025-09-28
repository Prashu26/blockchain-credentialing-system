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
  UserCheck,
  ArrowLeft
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, userType, onBackToLanding }) => {
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
          { id: 'dashboard', label: 'Dashboard Overview', icon: Home },
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
    <div className="shadow-2xl h-screen w-64 fixed left-0 top-0 z-10 border-r" 
         style={{
           background: 'linear-gradient(180deg, #001629 0%, #003459 50%, #012A4A 100%)',
           borderColor: 'rgba(0, 150, 199, 0.3)'
         }}>
      <div className="p-6 border-b" style={{borderColor: 'rgba(0, 150, 199, 0.3)'}}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg" 
               style={{
                 background: 'linear-gradient(135deg, #0096C7, #0077B6)',
                 boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
               }}>
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">BlockCred</h1>
            <p className="text-sm text-gray-300 capitalize">{userType} Portal</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-6">
        {/* Back to Landing Option */}
        {onBackToLanding && (
          <button
            onClick={onBackToLanding}
            className="w-full flex items-center px-6 py-3 text-left transition-all duration-300 text-gray-300 hover:text-white border-b mb-2 rounded-lg mx-2"
            style={{
              borderColor: 'rgba(0, 150, 199, 0.3)',
              background: 'transparent'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(0, 150, 199, 0.2)'}
            onMouseLeave={(e) => e.target.style.background = 'transparent'}
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            <span className="font-medium">Back to Portal Selection</span>
          </button>
        )}
        
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 mx-2 my-1 text-left transition-all duration-300 rounded-xl ${
                isActive ? 'text-white shadow-lg' : 'text-gray-300 hover:text-white'
              }`}
              style={{
                background: isActive 
                  ? 'linear-gradient(135deg, #0096C7, #0077B6)' 
                  : 'transparent',
                boxShadow: isActive 
                  ? '0 4px 15px rgba(0, 150, 199, 0.4)' 
                  : 'none'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.target.style.background = 'rgba(0, 150, 199, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.target.style.background = 'transparent';
                }
              }}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="absolute bottom-6 left-6 right-6">
        <div className="rounded-2xl p-4 text-white shadow-xl" 
             style={{
               background: 'linear-gradient(135deg, #0096C7, #0077B6)',
               boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
             }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold">Blockchain Status</p>
              <p className="text-xs opacity-90">Active & Secure</p>
            </div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
