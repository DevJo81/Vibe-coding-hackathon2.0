import { Link } from 'react-router-dom';
import { Users, BookOpen, MessageCircle, Video, Trophy, ArrowRight, Star, Zap } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Join or create focused study groups with peers who share your learning goals.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Content Sharing',
      description: 'Share notes, lessons, diagrams, and resources with your study community.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Q&A Forum',
      description: 'Get quick help through dedicated discussion boards for each study group.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Video,
      title: 'Live Sessions',
      description: 'Host or join 30-minute peer tutoring sessions for real-time collaboration.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Trophy,
      title: 'Karma System',
      description: 'Earn reputation points and badges for helping others and sharing knowledge.',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Zap,
      title: 'Peer Mentoring',
      description: 'Connect with verified mentors and become one yourself as you grow.',
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Computer Science Student',
      content: 'Peerly helped me understand algorithms through peer explanations better than any textbook.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Biology Major',
      content: 'The study groups here are incredible. I went from struggling to leading sessions!',
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'Mathematics Student',
      content: 'Live sessions with peer mentors saved my calculus grade. Amazing platform!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn from{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                Each Other
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join a collaborative platform where students teach and learn together through 
              study groups, peer mentoring, and shared knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/groups"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Groups
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Learn Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make peer-to-peer learning effective and enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Students Everywhere
            </h2>
            <p className="text-xl text-gray-600">
              See how Peerly is transforming the way students learn together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Learning Together?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of students who are already helping each other succeed.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Join Peerly Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;