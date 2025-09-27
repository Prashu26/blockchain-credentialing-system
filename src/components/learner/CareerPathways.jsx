import React from 'react';
import { ArrowRight, Target, BookOpen, Star, TrendingUp, CheckCircle } from 'lucide-react';
import { mockCareerPathways } from '../../data/mockData';

const CareerPathways = () => {
  const skillGaps = [
    { skill: 'Node.js', priority: 'High', timeToLearn: '2-3 months', demand: 92 },
    { skill: 'Database Management', priority: 'High', timeToLearn: '1-2 months', demand: 88 },
    { skill: 'API Development', priority: 'Medium', timeToLearn: '1 month', demand: 85 },
    { skill: 'DevOps', priority: 'Medium', timeToLearn: '3-4 months', demand: 78 }
  ];

  const recommendedCourses = [
    { 
      title: 'Advanced Node.js Development', 
      provider: 'Tech Academy', 
      duration: '8 weeks', 
      rating: 4.8,
      price: 'Free',
      skills: ['Node.js', 'Express.js', 'MongoDB']
    },
    { 
      title: 'Full Stack JavaScript', 
      provider: 'Code Institute', 
      duration: '12 weeks', 
      rating: 4.9,
      price: '$299',
      skills: ['React', 'Node.js', 'Database']
    },
    { 
      title: 'API Design & Development', 
      provider: 'Dev University', 
      duration: '6 weeks', 
      rating: 4.7,
      price: '$199',
      skills: ['REST API', 'GraphQL', 'Authentication']
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Career Pathways</h1>
          <p className="text-gray-600 mt-1">Discover your next career steps and skill development opportunities</p>
        </div>
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          AI-Powered Recommendations
        </div>
      </div>

      {/* Current Status */}
      <div className="dashboard-card">
        <div className="flex items-center mb-4">
          <Target className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Your Career Journey</h2>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Current Position</h3>
              <p className="text-gray-600">Frontend Developer</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-gray-600">Career Score</div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" style={{ width: '85%' }}></div>
          </div>
          
          <p className="text-sm text-gray-600">
            You're on track to become a Full Stack Developer. Complete the recommended skills to reach your goal.
          </p>
        </div>
      </div>

      {/* Career Pathways */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recommended Career Paths</h2>
        <div className="space-y-6">
          {mockCareerPathways.map((pathway, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">From {pathway.current}</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Recommended
                </span>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">
                  {pathway.current}
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium">
                  {pathway.recommended}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Alternative Paths:</h4>
                  <div className="space-y-2">
                    {pathway.next.filter(path => path !== pathway.recommended).map((path, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{path}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pathway.requiredSkills.map((skill, idx) => (
                      <span key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Estimated Timeline: 3-6 months</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                    Start Learning Path
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Gap Analysis */}
      <div className="dashboard-card">
        <div className="flex items-center mb-6">
          <TrendingUp className="w-6 h-6 text-red-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Skill Gap Analysis</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Skill</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Priority</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Time to Learn</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Market Demand</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {skillGaps.map((gap, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="font-medium text-gray-900">{gap.skill}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      gap.priority === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {gap.priority}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{gap.timeToLearn}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${gap.demand}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{gap.demand}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Find Courses
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="dashboard-card">
        <div className="flex items-center mb-6">
          <BookOpen className="w-6 h-6 text-green-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Recommended Courses</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCourses.map((course, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {course.duration}
                </span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600">{course.rating}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-3">{course.provider}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {course.skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${course.price === 'Free' ? 'text-green-600' : 'text-gray-900'}`}>
                  {course.price}
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Tracking */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Learning Progress</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">React Advanced Concepts</h3>
                <p className="text-sm text-gray-600">Completed • 40 hours</p>
              </div>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Completed
            </span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center">
              <BookOpen className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Node.js Fundamentals</h3>
                <p className="text-sm text-gray-600">In Progress • 15/30 hours</p>
              </div>
            </div>
            <div className="text-right">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                50%
              </span>
              <div className="w-24 bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPathways;
