import React, { useState } from 'react';
import { Users, Eye, Award, Search, Filter, Star } from 'lucide-react';
import { mockLearners, mockCertificates } from '../../data/mockData';

const HiringPortfolios = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [skillFilter, setSkillFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const filteredCandidates = mockLearners.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = skillFilter === 'all' || candidate.skillBadges.some(badge => 
      badge.toLowerCase().includes(skillFilter.toLowerCase()));
    const matchesLevel = levelFilter === 'all' || candidate.skillLevel === levelFilter;
    return matchesSearch && matchesSkill && matchesLevel;
  });

  const getCandidateCertificates = (candidateId) => {
    const candidate = mockLearners.find(l => l.id === candidateId);
    return candidate ? candidate.certificates.map(certId => 
      mockCertificates.find(cert => cert.id === certId)
    ).filter(Boolean) : [];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Candidate Portfolios</h1>
          <p className="text-gray-600 mt-1">Browse verified candidate profiles and skill portfolios</p>
        </div>
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {filteredCandidates.length} Candidates
        </div>
      </div>

      {/* Search and Filters */}
      <div className="dashboard-card">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, skills, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Skills</option>
              <option value="react">React</option>
              <option value="python">Python</option>
              <option value="blockchain">Blockchain</option>
              <option value="ai">AI/ML</option>
            </select>
          </div>
          <div>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>
      </div>

      {/* Candidate Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCandidates.map((candidate) => (
          <div key={candidate.id} className="dashboard-card hover:shadow-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3">
                {candidate.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
              <p className="text-sm text-gray-600">{candidate.course}</p>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Skill Level:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  candidate.skillLevel === 'Expert' ? 'bg-green-100 text-green-800' :
                  candidate.skillLevel === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                  candidate.skillLevel === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {candidate.skillLevel}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Certificates:</span>
                <span className="flex items-center text-sm text-gray-900">
                  <Award className="w-4 h-4 mr-1 text-yellow-500" />
                  {candidate.certificates.length}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Status:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  candidate.completionStatus === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {candidate.completionStatus}
                </span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-xs text-gray-600 mb-2">Top Skills:</p>
              <div className="flex flex-wrap gap-1">
                {candidate.skillBadges.slice(0, 3).map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
                {candidate.skillBadges.length > 3 && (
                  <span className="text-xs text-gray-500">+{candidate.skillBadges.length - 3} more</span>
                )}
              </div>
            </div>
            
            <button
              onClick={() => setSelectedCandidate(candidate)}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Full Profile
            </button>
          </div>
        ))}
      </div>

      {/* Candidate Profile Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Candidate Profile</h2>
              <button
                onClick={() => setSelectedCandidate(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-4xl mx-auto mb-4">
                    {selectedCandidate.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedCandidate.name}</h3>
                  <p className="text-gray-600">{selectedCandidate.email}</p>
                  <p className="text-sm text-gray-500 mt-1">{selectedCandidate.course}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Skill Level</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedCandidate.skillLevel === 'Expert' ? 'bg-green-100 text-green-800' :
                      selectedCandidate.skillLevel === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                      selectedCandidate.skillLevel === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {selectedCandidate.skillLevel}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Career Path</h4>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      {selectedCandidate.careerPath}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-sm">
                      Contact Candidate
                    </button>
                    <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 text-sm">
                      Schedule Interview
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Skill Portfolio</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCandidate.skillBadges.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Verified Certificates</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {getCandidateCertificates(selectedCandidate.id).map((cert) => (
                      <div key={cert.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="font-medium text-gray-900">{cert.skill}</h5>
                            <p className="text-sm text-gray-600">Level: {cert.level}</p>
                          </div>
                          <div className="flex items-center text-green-600">
                            <Star className="w-4 h-4 mr-1" />
                            <span className="text-xs">Verified</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">Issued: {cert.issueDate}</p>
                        <p className="text-xs text-gray-500">By: {cert.organization}</p>
                        <div className="mt-2 pt-2 border-t border-gray-100">
                          <p className="text-xs text-gray-400">Blockchain Hash:</p>
                          <p className="text-xs font-mono text-gray-500 truncate">
                            {cert.blockchainHash}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Hiring Insights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                      <div className="text-xs text-gray-600">Skill Match</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">A+</div>
                      <div className="text-xs text-gray-600">Performance</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">High</div>
                      <div className="text-xs text-gray-600">Potential</div>
                    </div>
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

export default HiringPortfolios;
