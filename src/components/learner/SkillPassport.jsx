import React, { useState } from 'react';
import { Award, Eye, Download, QrCode, Star, Calendar, Building2 } from 'lucide-react';
import { mockCertificates } from '../../data/mockData';

const SkillPassport = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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
              My Skill Passport
            </span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-medium">
            Your <span style={{color: '#0096C7'}}>verified certificates</span> and <span style={{color: '#0096C7'}}>skill achievements</span>
          </p>
          <div className="flex justify-center">
            <div className="text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center space-x-2" style={{
              background: 'linear-gradient(135deg, #0096C7, #0077B6)',
              boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
            }}>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>🎖️ {mockCertificates.length} Certificates</span>
            </div>
          </div>
        </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="dashboard-card text-center">
          <Award className="w-8 h-8 text-blue-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">{mockCertificates.length}</div>
          <div className="text-sm text-gray-600">Total Certificates</div>
        </div>
        <div className="dashboard-card text-center">
          <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">2</div>
          <div className="text-sm text-gray-600">Expert Level</div>
        </div>
        <div className="dashboard-card text-center">
          <Building2 className="w-8 h-8 text-green-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">3</div>
          <div className="text-sm text-gray-600">Organizations</div>
        </div>
        <div className="dashboard-card text-center">
          <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">2024</div>
          <div className="text-sm text-gray-600">Latest Year</div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCertificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card p-6 cursor-pointer group"
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-blue-500 group-hover:text-blue-600 transition-colors" />
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  cert.status === 'Verified' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {cert.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {cert.skill}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>Level: {cert.level}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  <span>Issued: {cert.issueDate}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{cert.organization}</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </button>
                <button className="flex items-center text-green-600 hover:text-green-800 text-sm font-medium">
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </button>
                <button className="flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium">
                  <QrCode className="w-4 h-4 mr-1" />
                  QR Code
                </button>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">By Level</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Expert</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">1</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Advanced</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">1</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Intermediate</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">1</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">By Category</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Development</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Blockchain</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Data Science</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Certificate Details</h2>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedCertificate.skill}</h3>
                <p className="text-gray-600">{selectedCertificate.organization}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Certificate ID</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedCertificate.id}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                    selectedCertificate.status === 'Verified' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedCertificate.status}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Skill Level</label>
                  <p className="text-gray-900">{selectedCertificate.level}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Issue Date</label>
                  <p className="text-gray-900">{selectedCertificate.issueDate}</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Blockchain Verification</label>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-mono text-gray-600 break-all">
                    {selectedCertificate.blockchainHash}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </button>
                <button className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
                  <QrCode className="w-5 h-5 mr-2" />
                  Share QR Code
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

export default SkillPassport;
