import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, MessageCircle, Calendar, TrendingUp, Award, Plus, Bell } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Study Groups', value: '8', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Questions Asked', value: '23', icon: MessageCircle, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Sessions Hosted', value: '12', icon: Calendar, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Karma Points', value: '1,247', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  const recentGroups = [
    {
      id: '1',
      name: 'JavaScript Crashers',
      members: 24,
      activity: 'Active discussion about React hooks',
      time: '2 hours ago',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: '2',
      name: 'Bio Buddies',
      members: 18,
      activity: 'New study material shared',
      time: '4 hours ago',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: '3',
      name: 'Calculus Champions',
      members: 31,
      activity: 'Live session starting soon',
      time: '6 hours ago',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  const upcomingSessions = [
    {
      title: 'React Components Deep Dive',
      group: 'JavaScript Crashers',
      time: 'Today, 3:00 PM',
      mentor: 'Alex Kim',
      attendees: 8
    },
    {
      title: 'Cell Biology Review',
      group: 'Bio Buddies',
      time: 'Tomorrow, 2:00 PM',
      mentor: 'Sarah Chen',
      attendees: 12
    },
    {
      title: 'Integration Techniques',
      group: 'Calculus Champions',
      time: 'Wed, 4:00 PM',
      mentor: 'Marcus Lee',
      attendees: 15
    }
  ];

  const achievements = [
    { name: 'First Question', icon: '🎯', description: 'Asked your first question' },
    { name: 'Helper', icon: '🤝', description: 'Answered 10 questions' },
    { name: 'Knowledge Sharer', icon: '📚', description: 'Shared 5 study materials' },
    { name: 'Session Leader', icon: '🎤', description: 'Hosted your first session' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-gray-600">Ready to learn something new today?</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <Link
            to="/groups"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Plus className="h-4 w-4 mr-2" />
            Join Group
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 ${stat.bg} rounded-xl`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Groups */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Study Groups</h2>
              <Link
                to="/groups"
                className="text-purple-600 hover:text-purple-700 font-medium text-sm"
              >
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentGroups.map((group) => (
                <Link
                  key={group.id}
                  to={`/groups/${group.id}`}
                  className="block p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${group.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {group.name}
                        </h3>
                        <span className="text-sm text-gray-500">{group.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{group.activity}</p>
                      <p className="text-xs text-gray-500 mt-2">{group.members} members</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Sessions */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Sessions</h2>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{session.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{session.group}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{session.time}</span>
                    <span>{session.attendees} attending</span>
                  </div>
                  <p className="text-xs text-purple-600 mt-2">Mentor: {session.mentor}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Achievements</h2>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-100">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{achievement.name}</p>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;