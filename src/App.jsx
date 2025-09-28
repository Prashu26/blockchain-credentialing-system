import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/shared/Sidebar';
import Landing from './components/Landing';

// Admin Components
import DashboardOverview from './components/admin/DashboardOverview';
import CertificateIssuance from './components/admin/CertificateIssuance';
import VerificationLogs from './components/admin/VerificationLogs';
import BlockchainStatus from './components/admin/BlockchainStatus';
import Analytics from './components/admin/Analytics';

// Learner Components
import LearnerDashboard from './components/learner/LearnerDashboard';
import SkillPassport from './components/learner/SkillPassport';
import CareerPathways from './components/learner/CareerPathways';
import LearnerAnalytics from './components/learner/LearnerAnalytics';
import CertificateViewer from './components/learner/CertificateViewer';

// Education Components
import EducationOverview from './components/education/EducationOverview';
import LearnerManagement from './components/education/LearnerManagement';
import EducationVerification from './components/education/EducationVerification';
import EducationAnalytics from './components/education/EducationAnalytics';
import EducationReports from './components/education/EducationReports';

// Hiring Components
import HiringOverview from './components/hiring/HiringOverview';
import HiringVerification from './components/hiring/HiringVerification';
import HiringPortfolios from './components/hiring/HiringPortfolios';
import HiringAnalytics from './components/hiring/HiringAnalytics';
import HiringReports from './components/hiring/HiringReports';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [userType, setUserType] = useState('admin');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    // Set appropriate default tab for each user type
    if (type === 'admin') {
      setActiveTab('dashboard');
    } else if (type === 'learner') {
      setActiveTab('dashboard');
    } else if (type === 'education') {
      setActiveTab('dashboard');
    } else if (type === 'hiring') {
      setActiveTab('dashboard');
    }
    setShowLanding(false);
  };

  const handleBackToLanding = () => {
    setShowLanding(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Show landing page if showLanding is true
  if (showLanding) {
    return <Landing onUserTypeSelect={handleUserTypeSelect} />;
  }

  const renderDashboard = () => {
    switch (userType) {
      case 'admin':
        switch (activeTab) {
          case 'dashboard':
            return <DashboardOverview />;
          case 'issuance':
            return <CertificateIssuance />;
          case 'verification':
            return <VerificationLogs />;
          case 'blockchain':
            return <BlockchainStatus />;
          case 'analytics':
            return <Analytics />;
          default:
            return <DashboardOverview />;
        }
      case 'learner':
        switch (activeTab) {
          case 'dashboard':
            return <LearnerDashboard />;
          case 'passport':
            return <SkillPassport />;
          case 'pathway':
            return <CareerPathways />;
          case 'analytics':
            return <LearnerAnalytics />;
          case 'certificates':
            return <CertificateViewer />;
          default:
            return <LearnerDashboard />;
        }
      case 'education':
        switch (activeTab) {
          case 'dashboard':
            return <EducationOverview />;
          case 'learners':
            return <LearnerManagement />;
          case 'verification':
            return <EducationVerification />;
          case 'analytics':
            return <EducationAnalytics />;
          case 'reports':
            return <EducationReports />;
          default:
            return <EducationOverview />;
        }
      case 'hiring':
        switch (activeTab) {
          case 'dashboard':
            return <HiringOverview />;
          case 'verification':
            return <HiringVerification />;
          case 'portfolios':
            return <HiringPortfolios />;
          case 'analytics':
            return <HiringAnalytics />;
          case 'reports':
            return <HiringReports />;
          default:
            return <HiringOverview />;
        }
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen flex relative" style={{backgroundColor: '#001629'}}>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-3 rounded-lg shadow-lg md:hidden"
          style={{
            background: 'linear-gradient(135deg, #0096C7, #0077B6)',
            boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        userType={userType}
        onBackToLanding={handleBackToLanding}
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <main 
        className={`flex-1 min-h-screen transition-all duration-300 ${
          isMobile ? 'ml-0' : 'ml-64'
        }`} 
        style={{backgroundColor: '#001629'}}
      >
        {renderDashboard()}
      </main>
    </div>
  );
}

export default App;
