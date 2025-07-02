import React, { useState } from 'react';
import { User, Award, BookOpen, MessageCircle, Calendar, Settings, Edit3, Trophy, Star } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userStats = [
    { label: 'Groups Joined', value: '8', icon: User, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Questions Asked', value: '23', icon: MessageCircle, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Sessions Hosted', value: '12', icon: Calendar, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Karma Points', value: '1,247', icon: Trophy, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  const achievements = [
    {
      id: '1',
      name: 'First Steps',
      description: 'Joined your first study group',
      icon: '🎯',
      earned: true,
      date: '2 weeks ago'
    },
    {
      id: '2',
      name: 'Helper',
      description: 'Answered 10 questions',
      icon: '🤝',
      earned: true,
      date: '1 week ago'
    },
    {
      id: '3',
      name: 'Knowledge Sharer',
      description: 'Shared 5 study materials',
      icon: '📚',
      earned: true,
      date: '5 days ago'
    },
    {
      id: '4',
      name: 'Session Leader',
      description: 'Hosted your first live session',
      icon: '🎤',
      earned: true,
      date: '3 days ago'
    },
    {
      id: '5',
      name: 'Rising Star',
      description: 'Earned 1000+ karma points',
      icon: '⭐',
      earned: true,
      date: 'Yesterday'
    },
    {
      id: '6',
      name: 'Mentor',
      description: 'Become a verified peer mentor',
      icon: '👨‍🏫',
      earned: false,
      date: null
    }
  ];

  const recentActivity = [
    {
      id: '1',
      type: 'answer',
      content: 'Answered a question about React hooks in JavaScript Crashers',
      time: '2 hours ago',
      karma: '+15'
    },
    {
      id: '2',
      type: 'resource',
      content: 'Shared "React Hooks Cheatsheet" in JavaScript Crashers',
      time: '1 day ago',
      karma: '+25'
    },
    {
      id: '3',
      type: 'session',
      content: 'Hosted "JavaScript Debugging Workshop" session',
      time: '2 days ago',
      karma: '+50'
    },
    {
      id: '4',
      type: 'join',
      content: 'Joined Python Pioneers study group',
      time: '3 days ago',
      karma: '+5'
    }
  ];

  const studyGroups = [
    {
      id: '1',
      name: 'JavaScript Crashers',
      role: 'Peer Mentor',
      joined: '2 months ago',
      contributions: 45,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: '2',
      name: 'Python Pioneers',
      role: 'Member',
      joined: '3 days ago',
      contributions: 2,
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      id: '3',
      name: 'Bio Buddies',
      role: 'Member',
      joined: '1 month ago',
      contributions: 12,
      gradient: 'from-green-400 to-blue-500'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'achievements', name: 'Achievements', icon: Award },
    { id: 'activity', name: 'Activity', icon: MessageCircle },
    { id: 'groups', name: 'Groups', icon: BookOpen },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <Award className="h-5 w-5 text-white" />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Alex Kim</h1>
                <p className="text-lg text-gray-600 mb-2">Peer Mentor • Computer Science Student</p>
                <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>4.9 rating</span>
                  </div>
                  <span>•</span>
                  <span>Joined 6 months ago</span>
                </div>
              </div>
              <button className="mt-4 md:mt-0 flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Edit3 className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </div>
            
            <p className="text-gray-700 leading-relaxed max-w-2xl">
              Passionate about web development and helping others learn. I love breaking down complex 
              concepts into simple, understandable explanations. Always excited to learn something new 
              and share knowledge with the community.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {userStats.map((stat, index) => {
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

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl border border-gray-200 mb-8">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  {achievements.filter(a => a.earned).slice(0, 3).map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-100">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{achievement.name}</p>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Groups</h3>
                <div className="space-y-3">
                  {studyGroups.slice(0, 3).map((group) => (
                    <div key={group.id} className="p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-200">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${group.gradient} rounded-lg flex items-center justify-center`}>
                          <BookOpen className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900">{group.name}</h4>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              group.role === 'Peer Mentor' 
                                ? 'bg-purple-100 text-purple-700' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {group.role}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">{group.contributions} contributions</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">All Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                      achievement.earned
                        ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 hover:border-yellow-300'
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{achievement.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{achievement.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                      {achievement.earned ? (
                        <p className="text-xs text-green-600 font-medium">Earned {achievement.date}</p>
                      ) : (
                        <p className="text-xs text-gray-500">Not earned yet</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'answer' ? 'bg-blue-100' :
                        activity.type === 'resource' ? 'bg-green-100' :
                        activity.type === 'session' ? 'bg-purple-100' :
                        'bg-gray-100'
                      }`}>
                        {activity.type === 'answer' && <MessageCircle className="h-5 w-5 text-blue-600" />}
                        {activity.type === 'resource' && <BookOpen className="h-5 w-5 text-green-600" />}
                        {activity.type === 'session' && <Calendar className="h-5 w-5 text-purple-600" />}
                        {activity.type === 'join' && <User className="h-5 w-5 text-gray-600" />}
                      </div>
                      <div>
                        <p className="text-gray-900">{activity.content}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-green-600">{activity.karma}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Groups Tab */}
          {activeTab === 'groups' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Study Groups</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studyGroups.map((group) => (
                  <div key={group.id} className="p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${group.gradient} rounded-xl flex items-center justify-center`}>
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{group.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          group.role === 'Peer Mentor' 
                            ? 'bg-purple-100 text-purple-700' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {group.role}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Joined {group.joined}</p>
                      <p>{group.contributions} contributions</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Account Settings</h3>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                  <input
                    type="text"
                    defaultValue="Alex Kim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    rows={4}
                    defaultValue="Passionate about web development and helping others learn. I love breaking down complex concepts into simple, understandable explanations."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="alex.kim@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                    Save Changes
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;