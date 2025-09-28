import React, { useState } from 'react';
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
    <div className="min-h-screen flex" style={{backgroundColor: '#001629'}}>
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        userType={userType}
        onBackToLanding={handleBackToLanding}
      />
      
      <main className="flex-1 ml-64 min-h-screen" style={{backgroundColor: '#001629'}}>
        {renderDashboard()}
      </main>
    </div>
  );
}

export default App;
