import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Users, 
  MessageCircle, 
  BookOpen, 
  Video, 
  Calendar, 
  Share2, 
  ThumbsUp, 
  MessageSquare, 
  Plus,
  Send,
  Paperclip,
  Star,
  Award
} from 'lucide-react';

const GroupDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('discussions');
  const [newMessage, setNewMessage] = useState('');

  // Mock data - in a real app, this would be fetched based on the ID
  const group = {
    id: '1',
    name: 'JavaScript Crashers',
    description: 'Learn modern JavaScript, React, and web development together. We focus on practical projects and peer-to-peer learning.',
    members: 24,
    level: 'Intermediate',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['JavaScript', 'React', 'Web Dev'],
    mentor: 'Alex Kim',
    lastActive: '2 hours ago',
    gradient: 'from-yellow-400 to-orange-500'
  };

  const discussions = [
    {
      id: '1',
      title: 'Help with React Hooks useState vs useEffect',
      author: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2 hours ago',
      replies: 8,
      upvotes: 12,
      solved: false,
      preview: 'I\'m confused about when to use useState vs useEffect in my React components...'
    },
    {
      id: '2',
      title: 'Best practices for JavaScript async/await',
      author: 'Marcus Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '4 hours ago',
      replies: 15,
      upvotes: 23,
      solved: true,
      preview: 'What are the best practices when working with async/await in JavaScript?'
    },
    {
      id: '3',
      title: 'Project showcase: My first React app',
      author: 'Elena Rodriguez',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '6 hours ago',
      replies: 6,
      upvotes: 18,
      solved: false,
      preview: 'I just finished my first React application and would love to get feedback...'
    }
  ];

  const resources = [
    {
      id: '1',
      title: 'Complete React Hooks Cheatsheet',
      type: 'PDF',
      author: 'Alex Kim',
      downloads: 45,
      time: '3 days ago',
      fileSize: '2.1 MB'
    },
    {
      id: '2',
      title: 'JavaScript ES6+ Features Guide',
      type: 'Document',
      author: 'Sarah Chen',
      downloads: 32,
      time: '1 week ago',
      fileSize: '1.5 MB'
    },
    {
      id: '3',
      title: 'React Project Templates',
      type: 'ZIP',
      author: 'Marcus Johnson',
      downloads: 28,
      time: '2 weeks ago',
      fileSize: '5.3 MB'
    }
  ];

  const chatMessages = [
    {
      id: '1',
      author: 'Alex Kim',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
      message: 'Hey everyone! Don\'t forget about our live session tomorrow at 3 PM',
      time: '10:30 AM',
      isMentor: true
    },
    {
      id: '2',
      author: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      message: 'Thanks for the reminder! Looking forward to the React components deep dive',
      time: '10:35 AM',
      isMentor: false
    },
    {
      id: '3',
      author: 'Marcus Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      message: 'I\'ll be there! Should I prepare any specific questions?',
      time: '10:42 AM',
      isMentor: false
    }
  ];

  const upcomingSessions = [
    {
      id: '1',
      title: 'React Components Deep Dive',
      mentor: 'Alex Kim',
      date: 'Today',
      time: '3:00 PM',
      duration: '30 min',
      attendees: 8,
      maxAttendees: 15
    },
    {
      id: '2',
      title: 'JavaScript Debugging Workshop',
      mentor: 'Sarah Chen',
      date: 'Tomorrow',
      time: '2:00 PM',
      duration: '45 min',
      attendees: 12,
      maxAttendees: 20
    }
  ];

  const tabs = [
    { id: 'discussions', name: 'Discussions', icon: MessageCircle },
    { id: 'resources', name: 'Resources', icon: BookOpen },
    { id: 'chat', name: 'Chat', icon: MessageSquare },
    { id: 'sessions', name: 'Sessions', icon: Video },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Group Header */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-8">
        <div className="relative h-64">
          <img
            src={group.image}
            alt={group.name}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${group.gradient} opacity-80`}></div>
          <div className="absolute inset-0 flex items-end">
            <div className="p-8 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 text-yellow-300 fill-current" />
                  <span className="text-sm font-medium">{group.rating}</span>
                </div>
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                  {group.level}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{group.name}</h1>
              <p className="text-lg text-white/90 mb-4 max-w-2xl">{group.description}</p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4" />
                  <span>Mentor: {group.mentor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 border-t">
          <div className="flex flex-wrap gap-2 mb-4">
            {group.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white text-gray-600 text-sm rounded-full border"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Last active: {group.lastActive}</p>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                Join Group
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl border border-gray-200 mb-8">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm transition-colors ${
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
          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Discussions</h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                  <Plus className="h-4 w-4" />
                  <span>New Discussion</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div
                    key={discussion.id}
                    className="p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={discussion.avatar}
                        alt={discussion.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{discussion.title}</h3>
                          {discussion.solved && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                              Solved
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{discussion.preview}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>By {discussion.author}</span>
                            <span>{discussion.time}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{discussion.upvotes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{discussion.replies}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Shared Resources</h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                  <Plus className="h-4 w-4" />
                  <span>Upload Resource</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{resource.title}</h3>
                          <p className="text-sm text-gray-600">
                            {resource.type} • {resource.fileSize} • By {resource.author}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {resource.downloads} downloads • {resource.time}
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat Tab */}
          {activeTab === 'chat' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Group Chat</h2>
              
              <div className="bg-gray-50 rounded-xl p-4 h-96 overflow-y-auto mb-4">
                <div className="space-y-4">
                  {chatMessages.map((message) => (
                    <div key={message.id} className="flex items-start space-x-3">
                      <img
                        src={message.avatar}
                        alt={message.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-sm text-gray-900">
                            {message.author}
                          </span>
                          {message.isMentor && (
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">
                              Mentor
                            </span>
                          )}
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-sm text-gray-700">{message.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-500 hover:text-purple-600 transition-colors">
                  <Paperclip className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Sessions Tab */}
          {activeTab === 'sessions' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming Sessions</h2>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                  <Plus className="h-4 w-4" />
                  <span>Schedule Session</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <Video className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{session.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Hosted by {session.mentor}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{session.date} at {session.time}</span>
                            </div>
                            <span>Duration: {session.duration}</span>
                            <span>{session.attendees}/{session.maxAttendees} attending</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        to={`/session/${session.id}`}
                        className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                      >
                        Join Session
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;