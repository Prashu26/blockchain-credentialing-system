import React from 'react';
import { Award, Users, Shield, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import StatCard from '../shared/StatCard';
import { mockBlockchainStatus } from '../../data/mockData';

const DashboardOverview = () => {
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
              Admin Dashboard
            </span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-medium">
            Monitor <span style={{color: '#0096C7'}}>system performance</span> and <span style={{color: '#0096C7'}}>blockchain activity</span>
          </p>
          <div className="flex justify-center">
            <div className="text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center space-x-2" style={{
              background: 'linear-gradient(135deg, #0096C7, #0077B6)',
              boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
            }}>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span>🔗 Blockchain Active</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StatCard 
            title="Total Certificates" 
            value="12,847" 
            trend="+12%" 
            icon={Award}
            color="ocean" 
          />
          <StatCard 
            title="Verified This Month" 
            value="2,341" 
            trend="+8%" 
            icon={CheckCircle}
            color="ocean" 
          />
          <StatCard 
            title="Active Institutions" 
            value="284" 
            trend="+15%" 
            icon={Users}
            color="ocean" 
          />
          <StatCard 
            title="Blockchain Transactions" 
            value="45,293" 
            trend="+23%" 
            icon={TrendingUp}
            color="ocean" 
          />
        </div>

        {/* Quick Actions */}
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border mb-12" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3" style={{color: '#0096C7'}} />
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 flex items-center justify-center text-white font-medium" 
                    style={{
                      background: 'linear-gradient(135deg, #0096C7, #0077B6)',
                      borderColor: 'rgba(0, 150, 199, 0.3)',
                      boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
                    }}>
              <Award className="w-5 h-5 mr-3" />
              Issue Certificate
            </button>
            <button className="backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 flex items-center justify-center text-white font-medium" 
                    style={{
                      background: 'linear-gradient(135deg, #0096C7, #0077B6)',
                      borderColor: 'rgba(0, 150, 199, 0.3)',
                      boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
                    }}>
              <Shield className="w-5 h-5 mr-3" />
              Verify Certificate
            </button>
            <button className="backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 flex items-center justify-center text-white font-medium" 
                    style={{
                      background: 'linear-gradient(135deg, #0096C7, #0077B6)',
                      borderColor: 'rgba(0, 150, 199, 0.3)',
                      boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
                    }}>
              <TrendingUp className="w-5 h-5 mr-3" />
              View Analytics
            </button>
          </div>
        </div>

        {/* System Status */}
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border mb-12" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Shield className="w-8 h-8 mr-3" style={{color: '#0096C7'}} />
            System Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="backdrop-blur-sm rounded-xl p-6 border" 
                 style={{
                   background: 'rgba(255, 255, 255, 0.1)',
                   borderColor: 'rgba(0, 150, 199, 0.3)',
                   boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
                 }}>
              <span className="text-gray-300 font-medium">Blockchain Network</span>
              <p className="text-xl font-bold text-white mt-2" style={{color: '#0096C7'}}>{mockBlockchainStatus.network}</p>
            </div>
            <div className="backdrop-blur-sm rounded-xl p-6 border" 
                 style={{
                   background: 'rgba(255, 255, 255, 0.1)',
                   borderColor: 'rgba(0, 150, 199, 0.3)',
                   boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
                 }}>
              <span className="text-gray-300 font-medium">Network Status</span>
              <div className="flex items-center mt-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <p className="text-xl font-bold text-white">{mockBlockchainStatus.status}</p>
              </div>
            </div>
            <div className="backdrop-blur-sm rounded-xl p-6 border" 
                 style={{
                   background: 'rgba(255, 255, 255, 0.1)',
                   borderColor: 'rgba(0, 150, 199, 0.3)',
                   boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
                 }}>
              <span className="text-gray-300 font-medium">Total Transactions</span>
              <p className="text-xl font-bold text-white mt-2">{mockBlockchainStatus.transactionCount}</p>
            </div>
            <div className="backdrop-blur-sm rounded-xl p-6 border" 
                 style={{
                   background: 'rgba(255, 255, 255, 0.1)',
                   borderColor: 'rgba(0, 150, 199, 0.3)',
                   boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
                 }}>
              <span className="text-gray-300 font-medium">🌊 CO₂ Saved</span>
              <p className="text-xl font-bold mt-2" style={{color: '#0096C7'}}>{mockBlockchainStatus.carbonFootprint}</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border" 
             style={{
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(0, 150, 199, 0.3)',
               boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
             }}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Clock className="w-8 h-8 mr-3" style={{color: '#0096C7'}} />
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105" 
                 style={{
                   background: 'rgba(255, 255, 255, 0.1)',
                   borderColor: 'rgba(0, 150, 199, 0.3)',
                   boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
                 }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" 
                     style={{
                       background: 'linear-gradient(135deg, #0096C7, #0077B6)',
                       boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
                     }}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white">Certificate issued to Arjun Sharma</p>
                  <p className="text-gray-300 text-sm">React Development - Advanced Level</p>
                </div>
                <span className="text-gray-400 text-sm font-medium">2 hours ago</span>
              </div>
            </div>
            
            <div className="backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105" 
                 style={{
                   background: 'rgba(255, 255, 255, 0.1)',
                   borderColor: 'rgba(0, 150, 199, 0.3)',
                   boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
                 }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" 
                     style={{
                       background: 'linear-gradient(135deg, #0096C7, #0077B6)',
                       boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
                     }}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white">Certificate verified by Tech Company A</p>
                  <p className="text-gray-300 text-sm">CERT-001 - Blockchain verification successful ✅</p>
                </div>
                <span className="text-gray-400 text-sm font-medium">4 hours ago</span>
              </div>
            </div>
            
            <div className="backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105" 
                 style={{
                   background: 'rgba(255, 255, 255, 0.1)',
                   borderColor: 'rgba(0, 150, 199, 0.3)',
                   boxShadow: '0 4px 15px rgba(0, 150, 199, 0.2)'
                 }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" 
                     style={{
                       background: 'linear-gradient(135deg, #0096C7, #0077B6)',
                       boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
                     }}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white">New user registered</p>
                  <p className="text-gray-300 text-sm">Priya Patel joined as learner 🌊</p>
                </div>
                <span className="text-gray-400 text-sm font-medium">6 hours ago</span>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default DashboardOverview;
