import { Zap, TrendingUp, Shield, Code } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Zap size={28} />,
      title: 'Fast Delivery',
      description: 'Agile development process ensures quick turnaround without compromising quality.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Scalable Solutions',
      description: 'Build once, scale infinitely. Our solutions grow with your business needs.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Shield size={28} />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for peace of mind.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Code size={28} />,
      title: 'Modern Tech Stack',
      description: 'Latest technologies and best practices for future-proof applications.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Why <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600">
            We combine innovation, expertise, and dedication to deliver exceptional results
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-gray-900">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
