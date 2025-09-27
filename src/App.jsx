import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/shared/Sidebar';

// Admin Components
import DashboardOverview from './components/admin/DashboardOverview';
import CertificateIssuance from './components/admin/CertificateIssuance';
import VerificationLogs from './components/admin/VerificationLogs';
import BlockchainStatus from './components/admin/BlockchainStatus';
import Analytics from './components/admin/Analytics';

// Learner Components
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
  const [userType, setUserType] = useState('admin');
  const [activeTab, setActiveTab] = useState('dashboard');

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
          case 'passport':
            return <SkillPassport />;
          case 'pathway':
            return <CareerPathways />;
          case 'analytics':
            return <LearnerAnalytics />;
          case 'certificates':
            return <CertificateViewer />;
          default:
            return <SkillPassport />;
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
    <div className="min-h-screen bg-gray-50">
      {/* User Type Selector */}
      <div className="fixed top-4 right-4 z-20">
        <select
          value={userType}
          onChange={(e) => {
            setUserType(e.target.value);
            setActiveTab(e.target.value === 'admin' ? 'dashboard' : 
                        e.target.value === 'learner' ? 'passport' :
                        e.target.value === 'education' ? 'dashboard' : 'dashboard');
          }}
          className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="admin">Admin Portal</option>
          <option value="learner">Learner Portal</option>
          <option value="education">Education Portal</option>
          <option value="hiring">Hiring Portal</option>
        </select>
      </div>

      <div className="flex">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          userType={userType} 
        />
        
        <main className="flex-1 ml-64 p-8">
          {renderDashboard()}
        </main>
      </div>
    </div>
  );
}

export default App;
