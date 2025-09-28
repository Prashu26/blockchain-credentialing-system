import React, { useState } from 'react';
import { Award, BookOpen, Eye, Download, QrCode, Star, Target, ArrowRight } from 'lucide-react';
import StatCard from '../shared/StatCard';
import Chart from '../shared/Chart';
import { mockCertificates, mockSkillBadges, mockCareerPathways, mockAnalytics } from '../../data/mockData';

const LearnerDashboard = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const skillAnalyticsData = {
    labels: Object.keys(mockAnalytics.skillDemand),
    datasets: [
      {
        label: 'Skill Demand (%)',
        data: Object.values(mockAnalytics.skillDemand),
        backgroundColor: 'rgba(0, 150, 199, 0.8)',
        borderColor: '#0096C7',
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
        backgroundColor: [
          'rgba(0, 150, 199, 0.8)',
          'rgba(0, 119, 182, 0.8)',
          'rgba(2, 62, 138, 0.8)',
          'rgba(1, 42, 74, 0.8)',
          'rgba(0, 22, 41, 0.8)',
        ],
        borderColor: [
          '#0096C7',
          '#0077B6',
          '#023E8A',
          '#012A4A',
          '#001629',
        ],
        borderWidth: 2,
      },
    ],
  };

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
              Skill Passport
            </span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-medium">
            Track your <span style={{color: '#0096C7'}}>learning journey</span> and <span style={{color: '#0096C7'}}>career growth</span>
          </p>
          <div className="flex justify-center">
            <div className="text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center space-x-2" style={{
              background: 'linear-gradient(135deg, #0096C7, #0077B6)',
              boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
            }}>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>🎯 Level: Advanced</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StatCard
            title="Certificates Earned"
            value="12"
            icon={Award}
            color="ocean"
            trend="up"
            trendValue="+3 this month"
          />
          <StatCard
            title="Skill Badges"
            value="28"
            icon={Star}
            color="ocean"
            trend="up"
            trendValue="+5 this month"
          />
          <StatCard
            title="Career Score"
            value="85%"
            icon={Target}
            color="ocean"
            trend="up"
            trendValue="+12%"
          />
          <StatCard
            title="Learning Hours"
            value="240"
            icon={BookOpen}
            color="ocean"
            trend="up"
            trendValue="+40 hrs"
          />
        </div>

        {/* Skill Passport - Certificates Grid */}
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border mb-12" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="w-8 h-8 mr-3" style={{color: '#0096C7'}} />
            My Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCertificates.map((cert) => (
              <div
                key={cert.id}
                className="backdrop-blur-sm rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 border"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(0, 150, 199, 0.3)',
                  boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
                }}
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" 
                       style={{
                         background: 'linear-gradient(135deg, #0096C7, #0077B6)',
                         boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
                       }}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                    cert.status === 'Verified' 
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' 
                      : 'bg-gradient-to-r from-amber-500 to-orange-500'
                  }`}>
                    {cert.status === 'Verified' ? '✅ Verified' : '⏳ Pending'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.skill}</h3>
                <p className="text-gray-300 text-sm mb-2">Level: {cert.level}</p>
                <p className="text-gray-300 text-sm mb-4">Issued: {cert.issueDate}</p>
                <p className="text-xs text-gray-400">Organization: {cert.organization}</p>
                <div className="mt-4 flex space-x-2">
                  <button className="flex items-center text-white hover:scale-110 transition-transform text-sm" style={{color: '#0096C7'}}>
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </button>
                  <button className="flex items-center text-white hover:scale-110 transition-transform text-sm" style={{color: '#0096C7'}}>
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </button>
                  <button className="flex items-center text-white hover:scale-110 transition-transform text-sm" style={{color: '#0096C7'}}>
                    <QrCode className="w-4 h-4 mr-1" />
                    QR Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Badges */}
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border mb-12" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Star className="w-8 h-8 mr-3" style={{color: '#0096C7'}} />
            Skill Badges
          </h2>
          <div className="flex flex-wrap gap-4">
            {mockSkillBadges.map((badge, index) => (
              <div
                key={index}
                className="skill-badge flex items-center px-4 py-2 rounded-full text-sm font-bold text-white transform transition-all duration-300 hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #0096C7, #0077B6)',
                  boxShadow: '0 4px 15px rgba(0, 150, 199, 0.3)'
                }}
              >
                <Star className="w-4 h-4 mr-2" />
                <span>{badge.name}</span>
                <span className="ml-2 text-xs opacity-75">({badge.level})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Pathways */}
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border mb-12" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Target className="w-8 h-8 mr-3" style={{color: '#0096C7'}} />
            Career Pathway Recommendations
          </h2>
          <div className="space-y-6">
            {mockCareerPathways.map((pathway, index) => (
              <div key={index} className="backdrop-blur-sm rounded-xl p-6 border" 
                   style={{
                     background: 'rgba(255, 255, 255, 0.1)',
                     borderColor: 'rgba(0, 150, 199, 0.3)'
                   }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">Current: {pathway.current}</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-bold text-white"
                        style={{background: 'linear-gradient(135deg, #0096C7, #0077B6)'}}>
                    ⭐ Recommended
                  </span>
                </div>
              
                <div className="flex items-center space-x-4 mb-4">
                  <div className="px-4 py-2 rounded-lg text-white font-bold" 
                       style={{background: 'linear-gradient(135deg, #0096C7, #0077B6)'}}>
                    {pathway.current}
                  </div>
                  <ArrowRight className="w-5 h-5" style={{color: '#0096C7'}} />
                  <div className="px-4 py-2 rounded-lg text-white font-bold" 
                       style={{background: 'linear-gradient(135deg, #0077B6, #023E8A)'}}>
                    {pathway.recommended}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-300 mb-2">Other Possible Paths:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pathway.next.filter(path => path !== pathway.recommended).map((path, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full text-sm text-white border" 
                            style={{borderColor: 'rgba(0, 150, 199, 0.5)', background: 'rgba(255, 255, 255, 0.1)'}}>
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-gray-300 mb-2">Required Skills for {pathway.recommended}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pathway.requiredSkills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full text-sm font-bold text-white" 
                            style={{background: 'rgba(0, 150, 199, 0.4)'}}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Chart
            type="bar"
            data={skillAnalyticsData}
            title="Market Demand for Your Skills"
          />
          <Chart
            type="pie"
            data={employmentData}
            title="Employment Rates by Skill Area"
          />
        </div>

        {/* Certificate Viewer Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="max-w-2xl w-full rounded-2xl p-8 border max-h-[90vh] overflow-y-auto" 
                 style={{
                   background: 'rgba(0, 22, 41, 0.95)',
                   borderColor: 'rgba(0, 150, 199, 0.3)',
                   boxShadow: '0 8px 32px rgba(0, 150, 199, 0.4)'
                 }}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Certificate Details</h2>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-300">Certificate ID</label>
                    <p className="text-lg font-bold text-white">{selectedCertificate.id}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300">Status</label>
                    <span className={`inline-flex px-3 py-1 text-sm font-bold rounded-full text-white ${
                      selectedCertificate.status === 'Verified' 
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' 
                        : 'bg-gradient-to-r from-amber-500 to-orange-500'
                    }`}>
                      {selectedCertificate.status === 'Verified' ? '✅ Verified' : '⏳ Pending'}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-300">Skill</label>
                  <p className="text-lg font-bold text-white">{selectedCertificate.skill}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-300">Level</label>
                    <p className="text-white">{selectedCertificate.level}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300">Issue Date</label>
                    <p className="text-white">{selectedCertificate.issueDate}</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-300">Organization</label>
                  <p className="text-white">{selectedCertificate.organization}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-300">Blockchain Hash</label>
                  <p className="text-xs font-mono text-gray-400 p-2 rounded break-all" 
                     style={{background: 'rgba(255, 255, 255, 0.1)'}}>
                    {selectedCertificate.blockchainHash}
                  </p>
                </div>
                
                <div className="flex items-center justify-center pt-4">
                  <div className="w-32 h-32 rounded-lg flex items-center justify-center" 
                       style={{background: 'rgba(255, 255, 255, 0.1)'}}>
                    <QrCode className="w-16 h-16" style={{color: '#0096C7'}} />
                    <span className="sr-only">QR Code</span>
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <button className="ocean-button flex-1 flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                  <button className="ocean-button flex-1 flex items-center justify-center">
                    Share Certificate
                  </button>
                </div>
              </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default LearnerDashboard;
