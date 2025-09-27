// Mock data for the blockchain credentialing system

export const mockCertificates = [
  {
    id: 'CERT-001',
    learnerName: 'John Doe',
    skill: 'React Development',
    level: 'Advanced',
    issueDate: '2024-01-15',
    organization: 'Tech Academy',
    blockchainHash: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
    status: 'Verified',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  },
  {
    id: 'CERT-002',
    learnerName: 'Jane Smith',
    skill: 'Blockchain Development',
    level: 'Expert',
    issueDate: '2024-02-20',
    organization: 'Crypto Institute',
    blockchainHash: '0x2b3c4d5e6f7890abcdef1234567890abcdef1234',
    status: 'Verified',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  },
  {
    id: 'CERT-003',
    learnerName: 'Mike Johnson',
    skill: 'Data Science',
    level: 'Intermediate',
    issueDate: '2024-03-10',
    organization: 'Data University',
    blockchainHash: '0x3c4d5e6f7890abcdef1234567890abcdef123456',
    status: 'Pending',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  }
];

export const mockLearners = [
  {
    id: 'LEARNER-001',
    name: 'John Doe',
    email: 'john.doe@email.com',
    course: 'Full Stack Development',
    completionStatus: 'Completed',
    skillLevel: 'Advanced',
    certificates: ['CERT-001'],
    skillBadges: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    careerPath: 'Frontend Developer → Full Stack Developer → Tech Lead'
  },
  {
    id: 'LEARNER-002',
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    course: 'Blockchain Fundamentals',
    completionStatus: 'Completed',
    skillLevel: 'Expert',
    certificates: ['CERT-002'],
    skillBadges: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3'],
    careerPath: 'Blockchain Developer → DeFi Specialist → Blockchain Architect'
  },
  {
    id: 'LEARNER-003',
    name: 'Mike Johnson',
    email: 'mike.johnson@email.com',
    course: 'Data Analytics',
    completionStatus: 'In Progress',
    skillLevel: 'Intermediate',
    certificates: ['CERT-003'],
    skillBadges: ['Python', 'SQL', 'Tableau', 'Machine Learning'],
    careerPath: 'Data Analyst → Data Scientist → ML Engineer'
  }
];

export const mockVerificationLogs = [
  {
    id: 'VER-001',
    certificateId: 'CERT-001',
    learnerName: 'John Doe',
    organization: 'Tech Company A',
    verificationStatus: 'Verified',
    timestamp: '2024-03-15 10:30:00',
    verifier: 'HR Manager'
  },
  {
    id: 'VER-002',
    certificateId: 'CERT-002',
    learnerName: 'Jane Smith',
    organization: 'Blockchain Startup',
    verificationStatus: 'Verified',
    timestamp: '2024-03-14 14:20:00',
    verifier: 'CTO'
  },
  {
    id: 'VER-003',
    certificateId: 'CERT-003',
    learnerName: 'Mike Johnson',
    organization: 'Data Corp',
    verificationStatus: 'Pending',
    timestamp: '2024-03-16 09:15:00',
    verifier: 'Team Lead'
  }
];

export const mockAnalytics = {
  certificatesIssued: {
    'React Development': 45,
    'Blockchain Development': 32,
    'Data Science': 28,
    'Machine Learning': 22,
    'Cybersecurity': 18
  },
  verificationStats: {
    verified: 85,
    pending: 12,
    expired: 3
  },
  skillDemand: {
    'React': 92,
    'Python': 88,
    'Blockchain': 75,
    'Machine Learning': 82,
    'Cybersecurity': 78
  },
  employmentStats: {
    'React Development': 94,
    'Blockchain Development': 89,
    'Data Science': 91,
    'Machine Learning': 87,
    'Cybersecurity': 93
  }
};

export const mockSkillBadges = [
  { name: 'React', level: 'Advanced', color: 'blue' },
  { name: 'Node.js', level: 'Intermediate', color: 'green' },
  { name: 'Python', level: 'Expert', color: 'yellow' },
  { name: 'Blockchain', level: 'Advanced', color: 'purple' },
  { name: 'Machine Learning', level: 'Intermediate', color: 'red' },
  { name: 'Cybersecurity', level: 'Expert', color: 'indigo' }
];

export const mockCareerPathways = [
  {
    current: 'Frontend Developer',
    next: ['Full Stack Developer', 'UI/UX Designer', 'React Specialist'],
    recommended: 'Full Stack Developer',
    requiredSkills: ['Node.js', 'Database Management', 'API Development']
  },
  {
    current: 'Data Analyst',
    next: ['Data Scientist', 'Business Intelligence Analyst', 'ML Engineer'],
    recommended: 'Data Scientist',
    requiredSkills: ['Machine Learning', 'Advanced Statistics', 'Deep Learning']
  }
];

export const mockBlockchainStatus = {
  network: 'Hyperledger Fabric',
  status: 'Active',
  lastBlock: '0x7f8e9d0c1b2a3456789abcdef1234567890abcdef',
  transactionCount: 1247,
  gasUsed: '0.00234 ETH',
  carbonFootprint: '2.1 kg CO₂ saved'
};
