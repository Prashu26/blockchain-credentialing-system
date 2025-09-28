import React from 'react';
import { BarChart3, TrendingUp, Target, Award, Users, Briefcase } from 'lucide-react';
import Chart from '../shared/Chart';
import { mockAnalytics } from '../../data/mockData';

const LearnerAnalytics = () => {
  const skillDemandData = {
    labels: Object.keys(mockAnalytics.skillDemand),
    datasets: [
      {
        label: 'Market Demand (%)',
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

  const mySkillsData = {
    labels: ['React', 'JavaScript', 'HTML/CSS', 'Git', 'Problem Solving'],
    datasets: [
      {
        label: 'My Skill Level',
        data: [90, 85, 95, 80, 88],
        backgroundColor: 'rgba(147, 51, 234, 0.8)',
        borderColor: 'rgb(147, 51, 234)',
        borderWidth: 2,
      },
      {
        label: 'Industry Average',
        data: [75, 70, 80, 65, 70],
        backgroundColor: 'rgba(156, 163, 175, 0.8)',
        borderColor: 'rgb(156, 163, 175)',
        borderWidth: 2,
      },
    ],
  };

  const learningProgressData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Hours Learned',
        data: [20, 35, 45, 30, 55, 40],
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const skillGapAnalysis = [
    { skill: 'Node.js', currentLevel: 30, requiredLevel: 80, gap: 50, priority: 'High' },
    { skill: 'Database Management', currentLevel: 40, requiredLevel: 75, gap: 35, priority: 'High' },
    { skill: 'API Development', currentLevel: 50, requiredLevel: 80, gap: 30, priority: 'Medium' },
    { skill: 'DevOps', currentLevel: 20, requiredLevel: 70, gap: 50, priority: 'Medium' },
    { skill: 'Testing', currentLevel: 60, requiredLevel: 80, gap: 20, priority: 'Low' }
  ];

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
              Learning Analytics
            </span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-medium">
            Track your <span style={{color: '#0096C7'}}>progress</span> and discover <span style={{color: '#0096C7'}}>market opportunities</span>
          </p>
          <div className="flex justify-center">
            <div className="text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center space-x-2" style={{
              background: 'linear-gradient(135deg, #0096C7, #0077B6)',
              boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
            }}>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>🧠 AI-Powered Insights</span>
            </div>
          </div>
        </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="dashboard-card text-center">
          <Award className="w-8 h-8 text-blue-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">85%</div>
          <div className="text-sm text-gray-600">Skill Match Rate</div>
          <div className="text-xs text-green-600 mt-1">↗ +12% vs market avg</div>
        </div>
        <div className="dashboard-card text-center">
          <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">240</div>
          <div className="text-sm text-gray-600">Learning Hours</div>
          <div className="text-xs text-green-600 mt-1">↗ +40 hrs this month</div>
        </div>
        <div className="dashboard-card text-center">
          <Target className="w-8 h-8 text-purple-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">92%</div>
          <div className="text-sm text-gray-600">Career Readiness</div>
          <div className="text-xs text-green-600 mt-1">↗ +8% improvement</div>
        </div>
        <div className="dashboard-card text-center">
          <Briefcase className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">94%</div>
          <div className="text-sm text-gray-600">Employment Potential</div>
          <div className="text-xs text-green-600 mt-1">Above average</div>
        </div>
      </div>

      {/* Skill Comparison */}
      <div className="dashboard-card">
        <div className="flex items-center mb-6">
          <BarChart3 className="w-6 h-6 text-purple-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">My Skills vs Industry Average</h2>
        </div>
        <Chart
          type="bar"
          data={mySkillsData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                max: 100
              }
            }
          }}
        />
      </div>

      {/* Market Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          type="bar"
          data={skillDemandData}
          title="Market Demand for Your Skills"
        />
        <Chart
          type="pie"
          data={employmentData}
          title="Employment Rates by Skill Area"
        />
      </div>

      {/* Learning Progress */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Learning Progress Over Time</h2>
        <Chart
          type="line"
          data={learningProgressData}
          options={{
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }}
        />
      </div>

      {/* Skill Gap Analysis */}
      <div className="dashboard-card">
        <div className="flex items-center mb-6">
          <Target className="w-6 h-6 text-red-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Skill Gap Analysis</h2>
        </div>
        
        <div className="space-y-4">
          {skillGapAnalysis.map((skill, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <h3 className="font-medium text-gray-900 mr-3">{skill.skill}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    skill.priority === 'High' 
                      ? 'bg-red-100 text-red-800' 
                      : skill.priority === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {skill.priority} Priority
                  </span>
                </div>
                <span className="text-sm text-gray-600">{skill.gap}% gap</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Current Level</span>
                  <span>{skill.currentLevel}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${skill.currentLevel}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Required Level</span>
                  <span>{skill.requiredLevel}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${skill.requiredLevel}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mt-3 flex justify-end">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Find Learning Resources →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Insights */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Career Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Strengths</h3>
            <div className="space-y-2">
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">Strong in Frontend Technologies</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">Excellent Problem-Solving Skills</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">High Learning Velocity</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Opportunities</h3>
            <div className="space-y-2">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">Full Stack Development Path</span>
              </div>
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">High Demand for React Skills</span>
              </div>
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">Remote Work Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Recommendations</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Focus on Backend Skills</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Learning Node.js and database management will make you a strong full-stack candidate. 
                  This combination is in high demand with 92% employment rate.
                </p>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Learning Path →
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                <Award className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Consider Specialization</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Your React skills are above average. Consider specializing in React ecosystem 
                  (Next.js, React Native) for premium opportunities.
                </p>
                <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                  Explore Specializations →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LearnerAnalytics;
