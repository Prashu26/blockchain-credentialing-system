import React, { useState } from 'react';
import { Shield, Search, CheckCircle, AlertCircle } from 'lucide-react';
import { mockCertificates } from '../../data/mockData';

const EducationVerification = () => {
  const [verificationId, setVerificationId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerification = (e) => {
    e.preventDefault();
    const cert = mockCertificates.find(c => c.id === verificationId);
    if (cert) {
      setVerificationResult({
        found: true,
        certificate: cert
      });
    } else {
      setVerificationResult({
        found: false,
        message: 'Certificate not found or invalid ID'
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Certificate Verification</h1>
          <p className="text-gray-600 mt-1">Verify student certificates and credentials</p>
        </div>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          Blockchain Verified
        </div>
      </div>

      {/* Verification Panel */}
      <div className="dashboard-card">
        <div className="flex items-center mb-6">
          <Shield className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Verify Certificate</h2>
        </div>
        
        <form onSubmit={handleVerification} className="mb-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                value={verificationId}
                onChange={(e) => setVerificationId(e.target.value)}
                placeholder="Enter Certificate ID or scan QR code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Verify
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
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-green-700">Student Name</label>
                      <p className="text-green-900 font-semibold">{verificationResult.certificate.learnerName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-700">Skill/Course</label>
                      <p className="text-green-900">{verificationResult.certificate.skill}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-700">Level</label>
                      <p className="text-green-900">{verificationResult.certificate.level}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-green-700">Issue Date</label>
                      <p className="text-green-900">{verificationResult.certificate.issueDate}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-700">Organization</label>
                      <p className="text-green-900">{verificationResult.certificate.organization}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-700">Status</label>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                        {verificationResult.certificate.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                  <label className="block text-sm font-medium text-green-700 mb-2">Blockchain Verification Hash</label>
                  <p className="text-xs font-mono text-green-800 break-all">
                    {verificationResult.certificate.blockchainHash}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                <p className="text-red-800">{verificationResult.message}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Quick Verification Examples */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Test - Sample Certificate IDs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockCertificates.map((cert) => (
            <div key={cert.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm text-blue-600">{cert.id}</span>
                <button
                  onClick={() => setVerificationId(cert.id)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Use ID
                </button>
              </div>
              <p className="text-sm text-gray-700">{cert.learnerName}</p>
              <p className="text-xs text-gray-500">{cert.skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Statistics */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Verification Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">142</div>
            <div className="text-sm text-gray-600">Successful Verifications</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Pending Verifications</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600 mb-2">2</div>
            <div className="text-sm text-gray-600">Failed Verifications</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">98.7%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Verification Instructions */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Verify Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Manual Verification</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
              <li>Enter the certificate ID in the verification field</li>
              <li>Click "Verify" to check against blockchain records</li>
              <li>Review the verification results and certificate details</li>
              <li>Download verification report if needed</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">QR Code Verification</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
              <li>Use your device camera to scan the QR code</li>
              <li>The certificate ID will be automatically populated</li>
              <li>Verification happens instantly with blockchain confirmation</li>
              <li>Results show authenticity and tamper-proof status</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationVerification;
