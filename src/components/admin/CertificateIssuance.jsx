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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Certificate Issuance</h1>
          <p className="text-gray-600 mt-1">Issue new blockchain-verified certificates to learners</p>
        </div>
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          Ready to Issue
        </div>
      </div>

      {/* Certificate Issuance Form */}
      <div className="dashboard-card">
        <div className="flex items-center mb-6">
          <Award className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">New Certificate Details</h2>
        </div>
        
        <form onSubmit={handleIssueCertificate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Learner Name *</label>
              <input
                type="text"
                value={newCertificate.learnerName}
                onChange={(e) => setNewCertificate({...newCertificate, learnerName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter learner's full name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Skill/Badge *</label>
              <input
                type="text"
                value={newCertificate.skill}
                onChange={(e) => setNewCertificate({...newCertificate, skill: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., React Development, Data Science"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Skill Level *</label>
              <select
                value={newCertificate.level}
                onChange={(e) => setNewCertificate({...newCertificate, level: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Issue Date *</label>
              <input
                type="date"
                value={newCertificate.issueDate}
                onChange={(e) => setNewCertificate({...newCertificate, issueDate: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Issuing Organization</label>
              <input
                type="text"
                value={newCertificate.organization}
                onChange={(e) => setNewCertificate({...newCertificate, organization: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Organization name"
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Issue Certificate
            </button>
          </div>
        </form>
        
        {showSuccess && (
          <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg flex items-center">
            <CheckCircle className="w-6 h-6 mr-3" />
            <div>
              <p className="font-semibold">Certificate issued successfully!</p>
              <p className="text-sm mt-1">Blockchain hash: {issuedCertificates[0]?.blockchainHash}</p>
            </div>
          </div>
        )}
      </div>

      {/* Recently Issued Certificates */}
      {issuedCertificates.length > 0 && (
        <div className="dashboard-card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recently Issued Certificates</h2>
          <div className="space-y-4">
            {issuedCertificates.map((cert, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="font-semibold text-gray-900">{cert.id}</span>
                  </div>
                  <span className="text-sm text-gray-500">{cert.timestamp}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Learner:</span>
                    <p className="font-medium text-gray-900">{cert.learnerName}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Skill:</span>
                    <p className="font-medium text-gray-900">{cert.skill}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Level:</span>
                    <p className="font-medium text-gray-900">{cert.level}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Organization:</span>
                    <p className="font-medium text-gray-900">{cert.organization}</p>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-white rounded border">
                  <span className="text-xs text-gray-600">Blockchain Hash:</span>
                  <p className="text-xs font-mono text-gray-800 break-all">{cert.blockchainHash}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateIssuance;
