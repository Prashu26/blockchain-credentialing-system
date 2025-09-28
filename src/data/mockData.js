// Mock data for the blockchain credentialing system

export const mockCertificates = [
  {
    id: 'CERT-001',
    learnerName: 'Arjun Sharma',
    skill: 'React Development',
    level: 'Advanced',
    issueDate: '2024-01-15',
    organization: 'IIT Delhi Tech Academy',
    blockchainHash: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
    status: 'Verified',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  },
  {
    id: 'CERT-002',
    learnerName: 'Priya Patel',
    skill: 'Blockchain Development',
    level: 'Expert',
    issueDate: '2024-02-20',
    organization: 'IIIT Hyderabad Blockchain Institute',
    blockchainHash: '0x2b3c4d5e6f7890abcdef1234567890abcdef1234',
    status: 'Verified',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  },
  {
    id: 'CERT-003',
    learnerName: 'Rahul Kumar',
    skill: 'Data Science',
    level: 'Intermediate',
    issueDate: '2024-03-10',
    organization: 'IISc Bangalore Data Center',
    blockchainHash: '0x3c4d5e6f7890abcdef1234567890abcdef123456',
    status: 'Pending',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  }
];

export const mockLearners = [
  {
    id: 'LEARNER-001',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@gmail.com',
    course: 'Full Stack Development',
    completionStatus: 'Completed',
    skillLevel: 'Advanced',
    certificates: ['CERT-001'],
    skillBadges: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    careerPath: 'Frontend Developer → Full Stack Developer → Tech Lead'
  },
  {
    id: 'LEARNER-002',
    name: 'Priya Patel',
    email: 'priya.patel@gmail.com',
    course: 'Blockchain Fundamentals',
    completionStatus: 'Completed',
    skillLevel: 'Expert',
    certificates: ['CERT-002'],
    skillBadges: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3'],
    careerPath: 'Blockchain Developer → DeFi Specialist → Blockchain Architect'
  },
  {
    id: 'LEARNER-003',
    name: 'Rahul Kumar',
    email: 'rahul.kumar@gmail.com',
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
    learnerName: 'Arjun Sharma',
    organization: 'Wipro Technologies',
    verificationStatus: 'Verified',
    timestamp: '2024-03-15 10:30:00',
    verifier: 'Rekha Menon, HR Manager'
  },
  {
    id: 'VER-002',
    certificateId: 'CERT-002',
    learnerName: 'Priya Patel',
    organization: 'Infosys Blockchain Labs',
    verificationStatus: 'Verified',
    timestamp: '2024-03-14 14:20:00',
    verifier: 'Kiran Reddy, CTO'
  },
  {
    id: 'VER-003',
    certificateId: 'CERT-003',
    learnerName: 'Rahul Kumar',
    organization: 'Tata Consultancy Services',
    verificationStatus: 'Pending',
    timestamp: '2024-03-16 09:15:00',
    verifier: 'Anita Singh, Team Lead'
  }
];

export const mockAnalytics = {
  certificatesIssued: {
    'React Development': 1250,
    'Blockchain Development': 892,
    'Data Science': 1430,
    'Machine Learning': 967,
    'Cybersecurity': 743
  },
  verificationStats: {
    verified: 4285,
    pending: 367,
    expired: 48
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
  transactionCount: 52847,
  gasUsed: '₹2.34 INR equivalent',
  carbonFootprint: '847.3 kg CO₂ saved'
};
