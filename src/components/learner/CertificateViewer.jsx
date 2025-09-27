import React, { useState } from 'react';
import { Search, QrCode, Download, Share2, Eye, Award, Calendar, Building2, Shield } from 'lucide-react';
import { mockCertificates } from '../../data/mockData';

const CertificateViewer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [filterLevel, setFilterLevel] = useState('all');

  const filteredCertificates = mockCertificates.filter(cert => {
    const matchesSearch = cert.skill.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || cert.level.toLowerCase() === filterLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Certificate Viewer</h1>
          <p className="text-gray-600 mt-1">View, download, and share your verified certificates</p>
        </div>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          All Verified
        </div>
      </div>

      {/* Search and Filter */}
      <div className="dashboard-card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search certificates by skill, organization, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        </div>
      </div>

      {/* Certificate Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map((cert) => (
          <div
            key={cert.id}
            className="certificate-card p-6 cursor-pointer group"
            onClick={() => setSelectedCertificate(cert)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
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
                <Shield className="w-4 h-4 mr-2 text-blue-500" />
                <span>ID: {cert.id}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                <span>{cert.issueDate}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                <span>{cert.organization}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                cert.level === 'Expert' ? 'bg-red-100 text-red-800' :
                cert.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                cert.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {cert.level}
              </span>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCertificates.length === 0 && (
        <div className="text-center py-12">
          <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg mb-2">No certificates found</p>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Certificate Details Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Certificate Details</h2>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Certificate Preview */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border-2 border-dashed border-blue-200">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate of Achievement</h3>
                      <p className="text-lg text-gray-700 mb-4">{selectedCertificate.skill}</p>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-6">
                        <p>This certifies that</p>
                        <p className="text-xl font-semibold text-gray-900">{selectedCertificate.learnerName}</p>
                        <p>has successfully completed the requirements for</p>
                        <p className="text-lg font-semibold text-blue-600">{selectedCertificate.skill}</p>
                        <p>at {selectedCertificate.level} level</p>
                      </div>
                      
                      <div className="border-t border-gray-300 pt-4">
                        <p className="text-sm text-gray-600">Issued by</p>
                        <p className="font-semibold text-gray-900">{selectedCertificate.organization}</p>
                        <p className="text-sm text-gray-600 mt-2">Date: {selectedCertificate.issueDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">QR Code for Verification</h4>
                    <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <QrCode className="w-16 h-16 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600">Scan to verify authenticity</p>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Certificate Information</h4>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Certificate ID</label>
                          <p className="text-gray-900 font-mono">{selectedCertificate.id}</p>
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
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
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
                        <label className="block text-sm font-medium text-gray-700">Issuing Organization</label>
                        <p className="text-gray-900">{selectedCertificate.organization}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Blockchain Verification</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Shield className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-sm font-medium text-green-700">Verified on Blockchain</span>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs font-medium text-gray-600">Transaction Hash</label>
                          <p className="text-xs font-mono text-gray-800 break-all bg-white p-2 rounded border">
                            {selectedCertificate.blockchainHash}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <label className="block font-medium text-gray-600">Network</label>
                            <p className="text-gray-800">Hyperledger Fabric</p>
                          </div>
                          <div>
                            <label className="block font-medium text-gray-600">Block Number</label>
                            <p className="text-gray-800">#2,847,392</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Actions</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
                        <Download className="w-5 h-5 mr-2" />
                        Download PDF
                      </button>
                      <button className="bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
                        <Share2 className="w-5 h-5 mr-2" />
                        Share Certificate
                      </button>
                      <button className="bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center">
                        <QrCode className="w-5 h-5 mr-2" />
                        Download QR
                      </button>
                      <button className="bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center">
                        <Eye className="w-5 h-5 mr-2" />
                        Verify Online
                      </button>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-900 mb-2">Verification Instructions</h5>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Use the QR code for instant verification</li>
                      <li>• Share the certificate ID for manual verification</li>
                      <li>• Blockchain hash ensures tamper-proof authenticity</li>
                      <li>• Valid for lifetime with blockchain backing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateViewer;
