import { Smartphone, Globe, TrendingUp, Brain, ArrowRight, Sparkles } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Smartphone size={32} />,
      title: 'Application Development',
      description: 'Custom mobile and web applications built with modern frameworks for Android, iOS, and cross-platform solutions.',
      features: ['Native iOS & Android', 'Cross-platform Apps', 'Progressive Web Apps', 'App Maintenance'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Globe size={32} />,
      title: 'Website Development',
      description: 'Responsive, high-performance websites tailored to your business needs, from corporate sites to full-scale e-commerce platforms.',
      features: ['Business Websites', 'E-commerce Stores', 'SaaS Platforms', 'CMS Integration'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to boost your online presence and drive measurable business growth.',
      features: ['SEO Optimization', 'Google & Social Ads', 'Content Marketing', 'Analytics & Reporting'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Brain size={32} />,
      title: 'AI Solutions',
      description: 'Cutting-edge AI-powered automation, intelligent chatbots, and advanced analytics to transform your business operations.',
      features: ['AI Chatbots', 'Process Automation', 'Predictive Analytics', 'ML Integration'],
      gradient: 'from-indigo-500 to-purple-500',
      comingSoon: true,
    },
  ];

  return (
    // MODIFIED: Changed 'py-20' to 'pt-0 pb-20' to remove top space
    <section id="services" className="pt-0 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10">
                {/* Coming Soon Badge */}
                {service.comingSoon && (
                  <div className="absolute top-0 right-0">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm rounded-full shadow-lg">
                      <Sparkles size={14} />
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                {/* <button className={`flex items-center gap-2 font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                  Learn More
                  <ArrowRight size={16} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}