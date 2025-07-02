import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  Users, 
  MessageCircle, 
  Share2, 
  Settings,
  Hand,
  BookOpen,
  Send
} from 'lucide-react';

const LiveSession = () => {
  const { id } = useParams();
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [newMessage, setNewMessage] = useState('');

  // Mock data for the session
  const session = {
    id: '1',
    title: 'React Components Deep Dive',
    mentor: 'Alex Kim',
    startTime: '3:00 PM',
    duration: '30 min',
    description: 'Learn advanced React component patterns and best practices'
  };

  const participants = [
    {
      id: '1',
      name: 'Alex Kim',
      role: 'Mentor',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
      isSpeaking: true,
      isHandRaised: false
    },
    {
      id: '2',
      name: 'Sarah Chen',
      role: 'Participant',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      isSpeaking: false,
      isHandRaised: true
    },
    {
      id: '3',
      name: 'Marcus Johnson',
      role: 'Participant',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      isSpeaking: false,
      isHandRaised: false
    },
    {
      id: '4',
      name: 'Elena Rodriguez',
      role: 'Participant',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      isSpeaking: false,
      isHandRaised: false
    }
  ];

  const chatMessages = [
    {
      id: '1',
      author: 'Alex Kim',
      message: 'Welcome everyone! Let\'s start with component composition',
      time: '3:02 PM',
      isMentor: true
    },
    {
      id: '2',
      author: 'Sarah Chen',
      message: 'Thanks for hosting this session!',
      time: '3:03 PM',
      isMentor: false
    },
    {
      id: '3',
      author: 'Marcus Johnson',
      message: 'Could you explain the difference between controlled and uncontrolled components?',
      time: '3:05 PM',
      isMentor: false
    },
    {
      id: '4',
      author: 'Alex Kim',
      message: 'Great question! Let me share my screen to show an example',
      time: '3:06 PM',
      isMentor: true
    }
  ];

  const resources = [
    {
      id: '1',
      title: 'React Components Cheatsheet',
      type: 'PDF',
      shared: 'Alex Kim'
    },
    {
      id: '2',
      title: 'Component Examples',
      type: 'Code',
      shared: 'Alex Kim'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-white">{session.title}</h1>
            <p className="text-sm text-gray-400">
              Hosted by {session.mentor} • Started at {session.startTime}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">{participants.length} participants</span>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-red-400">LIVE</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col">
          {/* Main Speaker Video */}
          <div className="flex-1 bg-gray-800 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src={participants[0].avatar}
                    alt={participants[0].name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                  />
                  <h3 className="text-2xl font-semibold text-white mb-2">{participants[0].name}</h3>
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                    {participants[0].role}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Session Controls Overlay */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-4 bg-gray-900/80 backdrop-blur-sm rounded-2xl px-6 py-3">
                <button
                  onClick={() => setIsVideoOn(!isVideoOn)}
                  className={`p-3 rounded-full transition-colors ${
                    isVideoOn ? 'bg-gray-700 text-white' : 'bg-red-600 text-white'
                  }`}
                >
                  {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                </button>
                
                <button
                  onClick={() => setIsAudioOn(!isAudioOn)}
                  className={`p-3 rounded-full transition-colors ${
                    isAudioOn ? 'bg-gray-700 text-white' : 'bg-red-600 text-white'
                  }`}
                >
                  {isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                </button>
                
                <button
                  onClick={() => setIsHandRaised(!isHandRaised)}
                  className={`p-3 rounded-full transition-colors ${
                    isHandRaised ? 'bg-yellow-600 text-white' : 'bg-gray-700 text-white'
                  }`}
                >
                  <Hand className="h-5 w-5" />
                </button>
                
                <button className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                
                <button className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors">
                  <Settings className="h-5 w-5" />
                </button>
                
                <button className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                  <Phone className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Participant Grid */}
          <div className="bg-gray-800 border-t border-gray-700 p-4">
            <div className="flex space-x-4 overflow-x-auto">
              {participants.slice(1).map((participant) => (
                <div
                  key={participant.id}
                  className={`flex-shrink-0 relative w-24 h-20 bg-gray-700 rounded-lg overflow-hidden ${
                    participant.isSpeaking ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  <img
                    src={participant.avatar}
                    alt={participant.name}
                    className="w-full h-full object-cover"
                  />
                  {participant.isHandRaised && (
                    <div className="absolute top-1 right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Hand className="h-2 w-2 text-white" />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1">
                    <p className="text-xs text-white truncate">{participant.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        {showChat && (
          <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
            {/* Sidebar Tabs */}
            <div className="border-b border-gray-200 p-4">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-3 py-2 bg-purple-100 text-purple-700 rounded-lg">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Chat</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-purple-600 rounded-lg">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">People</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-purple-600 rounded-lg">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm font-medium">Resources</span>
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((message) => (
                <div key={message.id} className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-white">
                        {message.author.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="text-sm font-medium text-gray-900">{message.author}</p>
                      {message.isMentor && (
                        <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">
                          Mentor
                        </span>
                      )}
                      <p className="text-xs text-gray-500">{message.time}</p>
                    </div>
                    <p className="text-sm text-gray-700">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <button className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveSession;