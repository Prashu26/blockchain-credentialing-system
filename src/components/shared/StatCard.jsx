import React from 'react';

const StatCard = ({ title, value, icon: Icon, color = 'ocean', trend, trendValue }) => {
  return (
    <div className="backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all duration-300 group hover:scale-105 border" 
         style={{
           background: 'rgba(255, 255, 255, 0.1)',
           borderColor: 'rgba(0, 150, 199, 0.3)',
           boxShadow: '0 8px 32px rgba(0, 150, 199, 0.2)'
         }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-white mb-2" style={{color: '#0096C7'}}>{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          {trend && (
            <div className="flex items-center mt-3 text-sm font-medium text-white">
              <span className="mr-1 text-lg" style={{color: trend === 'up' ? '#0096C7' : '#0077B6'}}>
                {trend === 'up' ? '↗' : '↘'}
              </span>
              <span style={{color: '#0096C7'}}>{trendValue}</span>
            </div>
          )}
        </div>
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg" 
             style={{
               background: 'linear-gradient(135deg, #0096C7, #0077B6)',
               boxShadow: '0 4px 15px rgba(0, 150, 199, 0.4)'
             }}>
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
