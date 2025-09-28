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
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#001629'}}>
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
      
      <div className="relative z-10 max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{textShadow: '0 0 30px rgba(0, 150, 199, 0.7)'}}>
            <span style={{color: '#0096C7', textShadow: '0 0 20px rgba(0, 150, 199, 0.8)'}}>
              Career Pathways
            </span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-medium">
            Discover your <span style={{color: '#0096C7'}}>next career steps</span> and <span style={{color: '#0096C7'}}>skill development opportunities</span>
          </p>
          <div className="flex justify-center">
            <div className="text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center space-x-2" style={{
              background: 'linear-gradient(135deg, #0096C7, #0077B6)',
              boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
            }}>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>🤖 AI-Powered Recommendations</span>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 mr-3" style={{color: '#0096C7'}} />
            <h2 className="text-xl font-semibold text-white">Your Career Journey</h2>
          </div>
          
          <div className="backdrop-blur-sm rounded-xl p-6 border" 
               style={{
                 background: 'rgba(255, 255, 255, 0.05)',
                 borderColor: 'rgba(0, 150, 199, 0.3)'
               }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Current Position</h3>
                <p className="text-gray-300">Frontend Developer</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold" style={{color: '#0096C7'}}>85%</div>
                <div className="text-sm text-gray-300">Career Score</div>
              </div>
            </div>
            
            <div className="w-full rounded-full h-3 mb-4" style={{background: 'rgba(255, 255, 255, 0.1)'}}>
              <div className="h-3 rounded-full" style={{ 
                width: '85%',
                background: 'linear-gradient(135deg, #0096C7, #0077B6)'
              }}></div>
            </div>
            
            <p className="text-sm text-gray-300">
              You're on track to become a Full Stack Developer. Complete the recommended skills to reach your goal.
            </p>
          </div>
        </div>

        {/* Career Pathways */}
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <h2 className="text-xl font-semibold text-white mb-6">Recommended Career Paths</h2>
          <div className="space-y-6">
            {mockCareerPathways.map((pathway, index) => (
              <div key={index} className="backdrop-blur-sm rounded-xl p-6 border transition-shadow hover:shadow-lg" 
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     borderColor: 'rgba(0, 150, 199, 0.3)',
                     boxShadow: '0 4px 15px rgba(0, 150, 199, 0.1)'
                   }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">From {pathway.current}</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" 
                        style={{
                          background: 'rgba(0, 255, 150, 0.2)',
                          color: '#00ff96'
                        }}>
                    Recommended
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-white px-4 py-2 rounded-lg font-medium" 
                       style={{background: 'linear-gradient(135deg, #0096C7, #0077B6)'}}>
                    {pathway.current}
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                  <div className="text-white px-4 py-2 rounded-lg font-medium" 
                       style={{background: 'rgba(0, 255, 150, 0.3)', color: '#00ff96'}}>
                    {pathway.recommended}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Alternative Paths:</h4>
                    <div className="space-y-2">
                      {pathway.next.filter(path => path !== pathway.recommended).map((path, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-200">
                          <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
                          <span>{path}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pathway.requiredSkills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full text-sm font-medium" 
                              style={{
                                background: 'rgba(255, 193, 7, 0.2)',
                                color: '#ffc107'
                              }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t" style={{borderColor: 'rgba(0, 150, 199, 0.3)'}}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Estimated Timeline: 3-6 months</span>
                    <button className="ocean-button">
                      Start Learning Path
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Gap Analysis */}
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 mr-3" style={{color: '#ff6b6b'}} />
            <h2 className="text-xl font-semibold text-white">Skill Gap Analysis</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b" style={{borderColor: 'rgba(0, 150, 199, 0.3)'}}>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Skill</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Priority</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Time to Learn</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Market Demand</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {skillGaps.map((gap, index) => (
                  <tr key={index} className="border-b hover:bg-opacity-50 transition-colors" 
                      style={{
                        borderColor: 'rgba(0, 150, 199, 0.2)',
                        backgroundColor: index % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)'
                      }}>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-3" style={{color: '#0096C7'}} />
                        <span className="font-medium text-white">{gap.skill}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        gap.priority === 'High' 
                          ? 'text-red-300' 
                          : 'text-yellow-300'
                      }`} style={{
                        background: gap.priority === 'High' 
                          ? 'rgba(255, 99, 99, 0.2)' 
                          : 'rgba(255, 193, 7, 0.2)'
                      }}>
                        {gap.priority}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white">{gap.timeToLearn}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="w-16 rounded-full h-2 mr-2" style={{background: 'rgba(255, 255, 255, 0.2)'}}>
                          <div 
                            className="h-2 rounded-full" 
                            style={{ 
                              width: `${gap.demand}%`,
                              background: 'linear-gradient(135deg, #00ff96, #00d484)'
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-300">{gap.demand}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-sm font-medium hover:underline transition-colors" 
                              style={{color: '#0096C7'}}>
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
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 mr-3" style={{color: '#00ff96'}} />
            <h2 className="text-xl font-semibold text-white">Recommended Courses</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCourses.map((course, index) => (
              <div key={index} className="backdrop-blur-sm rounded-xl p-6 border hover:shadow-lg transition-shadow" 
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     borderColor: 'rgba(0, 150, 199, 0.3)',
                     boxShadow: '0 4px 15px rgba(0, 150, 199, 0.1)'
                   }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 rounded-full text-xs font-medium" 
                        style={{
                          background: 'rgba(0, 150, 199, 0.2)',
                          color: '#0096C7'
                        }}>
                    {course.duration}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-300">{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-gray-300 mb-3">{course.provider}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 rounded text-xs" 
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: '#d1d5db'
                            }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`font-semibold ${course.price === 'Free' ? 'text-green-400' : 'text-white'}`}>
                    {course.price}
                  </span>
                  <button className="ocean-button">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <h2 className="text-xl font-semibold text-white mb-4">Learning Progress</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg" 
                 style={{
                   background: 'rgba(0, 255, 150, 0.1)',
                   borderColor: 'rgba(0, 255, 150, 0.3)'
                 }}>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3" style={{color: '#00ff96'}} />
                <div>
                  <h3 className="font-medium text-white">React Advanced Concepts</h3>
                  <p className="text-sm text-gray-300">Completed • 40 hours</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium" 
                    style={{
                      background: 'rgba(0, 255, 150, 0.2)',
                      color: '#00ff96'
                    }}>
                Completed
              </span>
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg" 
                 style={{
                   background: 'rgba(0, 150, 199, 0.1)',
                   borderColor: 'rgba(0, 150, 199, 0.3)'
                 }}>
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 mr-3" style={{color: '#0096C7'}} />
                <div>
                  <h3 className="font-medium text-white">Node.js Fundamentals</h3>
                  <p className="text-sm text-gray-300">In Progress • 15/30 hours</p>
                </div>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full text-sm font-medium" 
                      style={{
                        background: 'rgba(0, 150, 199, 0.2)',
                        color: '#0096C7'
                      }}>
                  50%
                </span>
                <div className="w-24 rounded-full h-2 mt-2" style={{background: 'rgba(255, 255, 255, 0.2)'}}>
                  <div className="h-2 rounded-full" 
                       style={{ 
                         width: '50%',
                         background: 'linear-gradient(135deg, #0096C7, #0077B6)'
                       }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPathways;
