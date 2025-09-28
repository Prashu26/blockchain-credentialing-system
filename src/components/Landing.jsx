import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Building2, 
  Users, 
  Shield, 
  Zap,
  ArrowRight,
  Lock,
  Play,
  Sparkles
} from 'lucide-react';

const Landing = ({ onUserTypeSelect }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const userTypes = [
    {
      id: 'learner',
      title: 'Learner',
      subtitle: 'Track & manage skills',
      description: 'Access your digital certificates, skill passport, and career pathways',
      icon: GraduationCap,
      color: '#0096C7',
      bgColor: 'rgba(0, 150, 199, 0.1)',
      hoverBg: 'rgba(0, 150, 199, 0.2)'
    },
    {
      id: 'education',
      title: 'Educational Institute',
      subtitle: 'Institute access',
      description: 'Manage learners, issue certificates, and track educational progress',
      icon: Building2,
      color: '#0096C7',
      bgColor: 'rgba(0, 150, 199, 0.1)',
      hoverBg: 'rgba(0, 150, 199, 0.2)'
    },
    {
      id: 'hiring',
      title: 'Hiring Organization',
      subtitle: 'Recruitment access',
      description: 'Verify credentials, review portfolios, and make informed hiring decisions',
      icon: Users,
      color: '#0096C7',
      bgColor: 'rgba(0, 150, 199, 0.1)',
      hoverBg: 'rgba(0, 150, 199, 0.2)'
    },
    {
      id: 'admin',
      title: 'Admin',
      subtitle: 'Full system control',
      description: 'Complete platform administration and blockchain management',
      icon: Shield,
      color: '#0096C7',
      bgColor: 'rgba(0, 150, 199, 0.1)',
      hoverBg: 'rgba(0, 150, 199, 0.2)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden" style={{backgroundColor: '#001629'}}>
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
      
      <motion.div 
        className="relative z-10 max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section - Spotify Style */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          {/* #0096C7 Logo */}
          <motion.div 
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, #0096C7, #0077B6, #023E8A)`,
              boxShadow: "0 25px 50px -12px rgba(0, 150, 199, 0.6)"
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 15,
              boxShadow: "0 25px 50px -12px rgba(0, 150, 199, 0.8)"
            }}
            transition={{ duration: 0.3 }}
          >
            <Zap className="w-12 h-12 text-white" />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight"
            variants={itemVariants}
            style={{textShadow: '0 0 30px rgba(0, 150, 199, 0.7)'}}
          >
            <span style={{color: '#0096C7', textShadow: '0 0 20px rgba(0, 150, 199, 0.8)'}}>
              BlockCredential
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-medium"
            variants={itemVariants}
          >
            Your professional credentials, <span style={{color: '#0096C7'}}>verified</span> and <span style={{color: '#0096C7'}}>secured</span> on blockchain
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join thousands of professionals, institutions, and organizations building trust through verifiable credentials.
          </motion.p>
        </motion.div>

        {/* User Type Cards - Spotify Style */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {userTypes.map((userType, index) => {
            const Icon = userType.icon;
            return (
              <motion.div
                key={userType.id}
                className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 cursor-pointer group relative overflow-hidden"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                onHoverStart={() => setHoveredCard(userType.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => onUserTypeSelect(userType.id)}
                style={{
                  background: hoveredCard === userType.id 
                    ? `linear-gradient(135deg, ${userType.bgColor}, rgba(0,0,0,0.8))` 
                    : 'rgba(24, 24, 27, 0.5)'
                }}
              >
                {/* Spotify-style Gradient Overlay on Hover */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${userType.color}15, transparent)`
                  }}
                />
                
                {/* Play Button Inspired Icon */}
                <motion.div 
                  className="relative flex items-center mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mr-4 relative"
                    style={{ backgroundColor: userType.color }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                    <motion.div 
                      className="absolute inset-0 rounded-2xl"
                      style={{ backgroundColor: userType.color }}
                      whileHover={{ 
                        boxShadow: `0 20px 40px ${userType.color}40`,
                        scale: 1.05 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  {/* Spotify-style Play Button on Hover */}
                  <motion.div
                    className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 absolute right-0 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                  </motion.div>
                </motion.div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {userType.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 font-medium text-lg group-hover:text-gray-300 transition-colors duration-300">
                    {userType.subtitle}
                  </p>
                  
                  <p className="text-gray-500 leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {userType.description}
                  </p>

                  <motion.div 
                    className="flex items-center text-green-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ x: 8 }}
                  >
                    <span className="mr-2">Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Spotify-style Border Glow */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    border: `1px solid ${userType.color}30`,
                    boxShadow: `0 0 20px ${userType.color}20`
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action - Spotify Style */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.button
            className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center mx-auto space-x-3 mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onUserTypeSelect('learner')}
          >
            <Sparkles className="w-6 h-6" />
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          {/* Spotify-style Secondary Info */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-400 text-sm"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-2 text-green-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-blue-400" />
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-purple-400" />
              <span>Instant Verification</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Spotify-style Floating Elements */}
      <motion.div
        className="absolute top-32 left-32 w-2 h-2 bg-green-400 rounded-full"
        animate={{
          y: [-20, 20, -20],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-64 right-48 w-3 h-3 bg-blue-400 rounded-full"
        animate={{
          x: [-15, 15, -15],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-48 w-1 h-1 bg-purple-400 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default Landing;