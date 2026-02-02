import { Heart, TrendingUp, Users, Zap } from 'lucide-react';

export function Careers() {
  const benefits = [
    {
      icon: <Heart size={28} />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Users size={28} />,
      title: 'Great Team',
      description: 'Work with talented and passionate professionals',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Zap size={28} />,
      title: 'Flexible Work',
      description: 'Remote options and flexible working hours',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Join Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600">
            Build your career with us and help shape the future of technology. We're always looking for talented, passionate individuals.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">Why Work With Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Don't See Your Role?</h3>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for exceptional talent. Send us your resume and let's talk!
          </p>
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:shadow-xl transition-all"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}