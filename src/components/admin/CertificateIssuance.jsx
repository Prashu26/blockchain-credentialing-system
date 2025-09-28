import React, { useState } from 'react';
import { Award, Send, CheckCircle } from 'lucide-react';

const CertificateIssuance = () => {
  const [newCertificate, setNewCertificate] = useState({
    learnerName: '',
    skill: '',
    level: 'Beginner',
    issueDate: new Date().toISOString().split('T')[0],
    organization: 'BlockCred Academy'
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [issuedCertificates, setIssuedCertificates] = useState([]);

  const handleIssueCertificate = (e) => {
    e.preventDefault();
    const certificateId = `CERT-${Date.now().toString().slice(-6)}`;
    const blockchainHash = `0x${Math.random().toString(16).substr(2, 40)}`;
    
    const certificate = {
      ...newCertificate,
      id: certificateId,
      blockchainHash,
      timestamp: new Date().toLocaleString()
    };
    
    setIssuedCertificates([certificate, ...issuedCertificates.slice(0, 4)]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    
    setNewCertificate({
      learnerName: '',
      skill: '',
      level: 'Beginner',
      issueDate: new Date().toISOString().split('T')[0],
      organization: 'BlockCred Academy'
    });
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
              Certificate Issuance
            </span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-medium">
            Issue new <span style={{color: '#0096C7'}}>blockchain-verified certificates</span> to learners
          </p>
          <div className="flex justify-center">
            <div className="text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center space-x-2" style={{
              background: 'linear-gradient(135deg, #0096C7, #0077B6)',
              boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
            }}>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>🎯 Ready to Issue</span>
            </div>
          </div>
        </div>

        {/* Certificate Issuance Form */}
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border mb-12" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 mr-3" style={{color: '#0096C7'}} />
            <h2 className="text-3xl font-bold text-white">New Certificate Details</h2>
          </div>
        
          <form onSubmit={handleIssueCertificate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Learner Name *</label>
                <input
                  type="text"
                  value={newCertificate.learnerName}
                  onChange={(e) => setNewCertificate({...newCertificate, learnerName: e.target.value})}
                  className="ocean-input w-full px-4 py-3 rounded-lg text-white"
                  placeholder="Enter learner's full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Skill/Badge *</label>
                <input
                  type="text"
                  value={newCertificate.skill}
                  onChange={(e) => setNewCertificate({...newCertificate, skill: e.target.value})}
                  className="ocean-input w-full px-4 py-3 rounded-lg text-white"
                  placeholder="e.g., React Development, Data Science"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Skill Level *</label>
                <select
                  value={newCertificate.level}
                  onChange={(e) => setNewCertificate({...newCertificate, level: e.target.value})}
                  className="ocean-input w-full px-4 py-3 rounded-lg text-white"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Issue Date *</label>
                <input
                  type="date"
                  value={newCertificate.issueDate}
                  onChange={(e) => setNewCertificate({...newCertificate, issueDate: e.target.value})}
                  className="ocean-input w-full px-4 py-3 rounded-lg text-white"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Issuing Organization</label>
                <input
                  type="text"
                  value={newCertificate.organization}
                  onChange={(e) => setNewCertificate({...newCertificate, organization: e.target.value})}
                  className="ocean-input w-full px-4 py-3 rounded-lg text-white"
                  placeholder="Organization name"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="ocean-button px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Issue Certificate
              </button>
            </div>
          </form>
        
          {showSuccess && (
            <div className="mt-6 backdrop-blur-sm rounded-xl p-6 border flex items-center" 
                 style={{
                   background: 'rgba(0, 255, 150, 0.1)',
                   borderColor: 'rgba(0, 255, 150, 0.3)',
                   boxShadow: '0 4px 15px rgba(0, 255, 150, 0.2)'
                 }}>
              <CheckCircle className="w-6 h-6 mr-3" style={{color: '#00ff96'}} />
              <div>
                <p className="font-semibold text-white">Certificate issued successfully!</p>
                <p className="text-sm mt-1 text-gray-300">Blockchain hash: {issuedCertificates[0]?.blockchainHash}</p>
              </div>
            </div>
          )}
        </div>

        {/* Recently Issued Certificates */}
        {issuedCertificates.length > 0 && (
          <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border" 
               style={{
                 background: 'rgba(255, 255, 255, 0.1)',
                 borderColor: 'rgba(0, 150, 199, 0.3)',
                 boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
               }}>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3" style={{color: '#0096C7'}} />
              Recently Issued Certificates
            </h2>
            <div className="space-y-4">
              {issuedCertificates.map((cert, index) => (
                <div key={index} className="backdrop-blur-sm rounded-xl p-6 border" 
                     style={{
                       background: 'rgba(255, 255, 255, 0.1)',
                       borderColor: 'rgba(0, 150, 199, 0.3)',
                       boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
                     }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 mr-2" style={{color: '#0096C7'}} />
                      <span className="font-semibold text-white">{cert.id}</span>
                    </div>
                    <span className="text-sm text-gray-300">{cert.timestamp}</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-300">Learner:</span>
                      <p className="font-medium text-white">{cert.learnerName}</p>
                    </div>
                    <div>
                      <span className="text-gray-300">Skill:</span>
                      <p className="font-medium text-white">{cert.skill}</p>
                    </div>
                    <div>
                      <span className="text-gray-300">Level:</span>
                      <p className="font-medium text-white">{cert.level}</p>
                    </div>
                    <div>
                      <span className="text-gray-300">Organization:</span>
                      <p className="font-medium text-white">{cert.organization}</p>
                    </div>
                  </div>
                  <div className="mt-3 p-3 rounded border" 
                       style={{
                         background: 'rgba(255, 255, 255, 0.05)',
                         borderColor: 'rgba(0, 150, 199, 0.3)'
                       }}>
                    <span className="text-xs text-gray-300">Blockchain Hash:</span>
                    <p className="text-xs font-mono text-gray-200 break-all">{cert.blockchainHash}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateIssuance;
