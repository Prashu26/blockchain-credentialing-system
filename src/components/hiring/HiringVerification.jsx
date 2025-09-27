import React, { useState } from 'react';
import { Shield, Search, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { mockCertificates } from '../../data/mockData';

const HiringVerification = () => {
  const [verificationId, setVerificationId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [bulkVerification, setBulkVerification] = useState('');

  const handleVerification = (e) => {
    e.preventDefault();
    const cert = mockCertificates.find(c => c.id === verificationId);
    if (cert) {
      setVerificationResult({
        found: true,
        certificate: cert,
        timestamp: new Date().toLocaleString()
      });
    } else {
      setVerificationResult({
        found: false,
        message: 'Certificate not found or invalid ID',
        timestamp: new Date().toLocaleString()
      });
    }
  };

  const handleBulkVerification = () => {
    const ids = bulkVerification.split('\n').filter(id => id.trim());
    const results = ids.map(id => {
      const cert = mockCertificates.find(c => c.id === id.trim());
      return {
        id: id.trim(),
        found: !!cert,
        certificate: cert
      };
    });
    
    alert(`Bulk verification complete: ${results.filter(r => r.found).length}/${results.length} certificates verified`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Certificate Verification</h1>
          <p className="text-gray-600 mt-1">Verify candidate credentials instantly with blockchain technology</p>
        </div>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          Blockchain Secured
        </div>
      </div>

      {/* Single Verification */}
      <div className="dashboard-card">
        <div className="flex items-center mb-6">
          <Shield className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Single Certificate Verification</h2>
        </div>
        
        <form onSubmit={handleVerification} className="mb-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                value={verificationId}
                onChange={(e) => setVerificationId(e.target.value)}
                placeholder="Enter Certificate ID, scan QR code, or paste blockchain hash"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Verify Now
            </button>
          </div>
        </form>
        
        {verificationResult && (
          <div className={`p-6 rounded-lg border ${
            verificationResult.found 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            {verificationResult.found ? (
              <div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-green-800">Certificate Verified ✓</h3>
                  <span className="ml-auto text-xs text-green-600">{verificationResult.timestamp}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-green-700">Candidate Name</label>
                      <p className="text-green-900 font-semibold text-lg">{verificationResult.certificate.learnerName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-700">Skill/Certification</label>
                      <p className="text-green-900">{verificationResult.certificate.skill}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-700">Proficiency Level</label>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {verificationResult.certificate.level}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-700">Issuing Organization</label>
                      <p className="text-green-900">{verificationResult.certificate.organization}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-green-700">Issue Date</label>
                      <p className="text-green-900">{verificationResult.certificate.issueDate}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-700">Verification Status</label>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                        {verificationResult.certificate.status}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-700">Authenticity Score</label>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                        <span className="text-sm text-green-800 font-medium">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                  <label className="block text-sm font-medium text-green-700 mb-2">Blockchain Verification Hash</label>
                  <p className="text-xs font-mono text-green-800 break-all bg-green-50 p-2 rounded">
                    {verificationResult.certificate.blockchainHash}
                  </p>
                </div>
                
                <div className="mt-4 flex space-x-3">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm">
                    <FileText className="w-4 h-4 inline mr-1" />
                    Download Report
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-sm">
                    Contact Candidate
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                <div>
                  <p className="text-red-800 font-medium">{verificationResult.message}</p>
                  <p className="text-xs text-red-600 mt-1">{verificationResult.timestamp}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bulk Verification */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Bulk Certificate Verification</h2>
        <p className="text-gray-600 mb-4">Verify multiple certificates at once by entering one certificate ID per line</p>
        
        <div className="space-y-4">
          <textarea
            value={bulkVerification}
            onChange={(e) => setBulkVerification(e.target.value)}
            placeholder="Enter certificate IDs (one per line)&#10;CERT-001&#10;CERT-002&#10;CERT-003"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleBulkVerification}
            className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
          >
            Verify All Certificates
          </button>
        </div>
      </div>

      {/* Verification Statistics */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Verification Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">2,847</div>
            <div className="text-sm text-gray-600">Total Verifications</div>
            <div className="text-xs text-green-600 mt-1">This month</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">98.7%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
            <div className="text-xs text-blue-600 mt-1">Industry leading</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">1.2s</div>
            <div className="text-sm text-gray-600">Avg Verification Time</div>
            <div className="text-xs text-purple-600 mt-1">Lightning fast</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600 mb-2">156</div>
            <div className="text-sm text-gray-600">Successful Hires</div>
            <div className="text-xs text-yellow-600 mt-1">From verified candidates</div>
          </div>
        </div>
      </div>

      {/* Quick Test Certificates */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Test - Sample Certificates</h2>
        <p className="text-gray-600 mb-4">Click on any certificate ID below to test the verification system</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockCertificates.slice(0, 6).map((cert) => (
            <div key={cert.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm text-blue-600">{cert.id}</span>
                <button
                  onClick={() => setVerificationId(cert.id)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Test Verify
                </button>
              </div>
              <p className="text-sm font-medium text-gray-900">{cert.learnerName}</p>
              <p className="text-xs text-gray-500">{cert.skill} - {cert.level}</p>
              <p className="text-xs text-gray-400 mt-1">{cert.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringVerification;
