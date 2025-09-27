import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter, TrendingUp } from 'lucide-react';

const EducationReports = () => {
  const [selectedReport, setSelectedReport] = useState('monthly');
  const [dateRange, setDateRange] = useState('last-month');

  const reportTypes = [
    { id: 'monthly', name: 'Monthly Summary', description: 'Comprehensive monthly performance report' },
    { id: 'student', name: 'Student Progress', description: 'Individual student progress tracking' },
    { id: 'course', name: 'Course Analytics', description: 'Course-wise performance metrics' },
    { id: 'certification', name: 'Certification Report', description: 'Certificate issuance and verification data' },
  ];

  const generateReport = () => {
    // Mock report generation
    alert(`Generating ${reportTypes.find(r => r.id === selectedReport)?.name} report for ${dateRange}...`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Generate comprehensive reports and export data</p>
        </div>
        <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
          Export Ready
        </div>
      </div>

      {/* Report Generation */}
      <div className="dashboard-card">
        <div className="flex items-center mb-6">
          <FileText className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Generate Report</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Report Type</h3>
            <div className="space-y-3">
              {reportTypes.map((report) => (
                <div
                  key={report.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedReport === report.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedReport(report.id)}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedReport === report.id}
                      onChange={() => setSelectedReport(report.id)}
                      className="mr-3"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{report.name}</h4>
                      <p className="text-sm text-gray-600">{report.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Date Range</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="last-week">Last Week</option>
                  <option value="last-month">Last Month</option>
                  <option value="last-quarter">Last Quarter</option>
                  <option value="last-year">Last Year</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Export Format</h4>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-2" />
                    PDF Report
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-2" />
                    Excel Data
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    CSV Export
                  </label>
                </div>
              </div>
              
              <button
                onClick={generateReport}
                className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Generate & Download Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">1,247</div>
            <div className="text-sm text-gray-600">Total Enrollments</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">89%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">145</div>
            <div className="text-sm text-gray-600">Certificates Issued</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">4.7</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Reports</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-blue-500 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Monthly Summary - December 2024</h3>
                <p className="text-sm text-gray-600">Generated on Dec 31, 2024</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                <Download className="w-4 h-4 inline mr-1" />
                Download
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-green-500 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Student Progress Report - Q4 2024</h3>
                <p className="text-sm text-gray-600">Generated on Dec 28, 2024</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                <Download className="w-4 h-4 inline mr-1" />
                Download
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-purple-500 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Course Analytics - Full Stack Development</h3>
                <p className="text-sm text-gray-600">Generated on Dec 25, 2024</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                <Download className="w-4 h-4 inline mr-1" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Automated Reports */}
      <div className="dashboard-card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Automated Report Schedule</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
            <div>
              <h3 className="font-medium text-green-900">Weekly Progress Summary</h3>
              <p className="text-sm text-green-700">Every Monday at 9:00 AM</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              Active
            </span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div>
              <h3 className="font-medium text-blue-900">Monthly Analytics Report</h3>
              <p className="text-sm text-blue-700">First day of each month at 8:00 AM</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              Active
            </span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">Quarterly Performance Review</h3>
              <p className="text-sm text-gray-700">End of each quarter</p>
            </div>
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
              Scheduled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationReports;
