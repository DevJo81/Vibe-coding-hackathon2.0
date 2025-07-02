import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Plus, Search, Filter, BookOpen, Clock, Star } from 'lucide-react';

const StudyGroups = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const categories = [
    { id: 'all', name: 'All Groups' },
    { id: 'programming', name: 'Programming' },
    { id: 'science', name: 'Science' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'languages', name: 'Languages' },
    { id: 'business', name: 'Business' },
  ];

  const studyGroups = [
    {
      id: '1',
      name: 'JavaScript Crashers',
      description: 'Learn modern JavaScript, React, and web development together.',
      members: 24,
      category: 'programming',
      level: 'Intermediate',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['JavaScript', 'React', 'Web Dev'],
      lastActive: '2 hours ago',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: '2',
      name: 'Bio Buddies',
      description: 'Exploring the fascinating world of biology and life sciences.',
      members: 18,
      category: 'science',
      level: 'Beginner',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Biology', 'Anatomy', 'Genetics'],
      lastActive: '4 hours ago',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: '3',
      name: 'Calculus Champions',
      description: 'Master calculus concepts through collaborative problem solving.',
      members: 31,
      category: 'mathematics',
      level: 'Advanced',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Calculus', 'Math', 'Problem Solving'],
      lastActive: '1 hour ago',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: '4',
      name: 'Python Pioneers',
      description: 'From basics to advanced Python programming and data science.',
      members: 42,
      category: 'programming',
      level: 'All Levels',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Python', 'Data Science', 'AI'],
      lastActive: '30 minutes ago',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      id: '5',
      name: 'Chemistry Club',
      description: 'Discover the magic of chemistry through experiments and theory.',
      members: 19,
      category: 'science',
      level: 'Intermediate',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Chemistry', 'Lab Work', 'Organic'],
      lastActive: '6 hours ago',
      gradient: 'from-red-400 to-orange-500'
    },
    {
      id: '6',
      name: 'Spanish Speakers',
      description: 'Practice Spanish conversation and grammar in a supportive environment.',
      members: 28,
      category: 'languages',
      level: 'Intermediate',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Spanish', 'Conversation', 'Grammar'],
      lastActive: '3 hours ago',
      gradient: 'from-pink-400 to-red-500'
    }
  ];

  const filteredGroups = studyGroups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || group.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const CreateGroupModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Study Group</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Group Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter group name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={3}
              placeholder="Describe your study group"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              <option value="programming">Programming</option>
              <option value="science">Science</option>
              <option value="mathematics">Mathematics</option>
              <option value="languages">Languages</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setShowCreateModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Groups</h1>
          <p className="text-gray-600">Find and join study groups that match your interests</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Plus className="h-5 w-5 mr-2" />
          Create Group
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search groups, topics, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map((group) => (
          <Link
            key={group.id}
            to={`/groups/${group.id}`}
            className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${group.gradient} opacity-80`}></div>
              <div className="absolute top-4 left-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-4 w-4 text-yellow-300 fill-current" />
                    <span className="text-white text-sm font-medium">{group.rating}</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">{group.name}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{group.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {group.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{group.members}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{group.level}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{group.lastActive}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredGroups.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No groups found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or create a new group</p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create Group
          </button>
        </div>
      )}

      {showCreateModal && <CreateGroupModal />}
    </div>
  );
};

export default StudyGroups;