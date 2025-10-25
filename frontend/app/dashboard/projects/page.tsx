import React from 'react';
import { DashboardLayout } from '@/ui/dashboard';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Community School Project',
      type: 'Charity',
      raised: 6500,
      target: 10000,
      status: 'Active',
      endDate: '2024-02-15',
      donors: 45
    },
    {
      id: 2,
      title: '$1000 Crypto Giveaway',
      type: 'Giveaway',
      raised: 1000,
      target: 1000,
      status: 'Active',
      endDate: '2024-01-30',
      participants: 150
    },
    {
      id: 3,
      title: 'Employee Q4 Rewards',
      type: 'Event Gifting',
      raised: 2500,
      target: 2500,
      status: 'Completed',
      endDate: '2024-01-15',
      recipients: 25
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Projects</h1>
            <p className="text-gray-600">Manage all your campaigns and initiatives</p>
          </div>
          <button className="bg-gradient-to-r from-[#0FA47A] to-[#16BFA8] text-white font-semibold py-2 px-4 rounded-lg hover:from-[#16BFA8] hover:to-[#0FA47A] transition-all duration-300">
            Create New Project
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.type === 'Charity' ? 'bg-green-100 text-green-700' :
                    project.type === 'Giveaway' ? 'bg-purple-100 text-purple-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {project.type}
                  </span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Active' ? 'bg-green-100 text-green-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Raised</span>
                  <span className="font-semibold text-gray-900">
                    ${project.raised.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Target</span>
                  <span className="font-semibold text-gray-900">
                    ${project.target.toLocaleString()}
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#0FA47A] h-2 rounded-full"
                    style={{ width: `${(project.raised / project.target) * 100}%` }}
                  ></div>
                </div>

                <div className="flex justify-between text-xs text-gray-500">
                  <span>
                    {project.type === 'Giveaway' ? `${project.participants} participants` :
                     project.type === 'Charity' ? `${project.donors} donors` :
                     `${project.recipients} recipients`}
                  </span>
                  <span>Ends {new Date(project.endDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex space-x-2 mt-4">
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                  View Details
                </button>
                {project.status === 'Active' && (
                  <button className="flex-1 bg-[#0FA47A] text-white py-2 px-3 rounded-lg hover:bg-[#16BFA8] transition-colors text-sm">
                    Manage
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600">📊</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Raised</p>
                <p className="text-2xl font-bold text-gray-900">$10K</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-[#0FA47A]">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectsPage;
