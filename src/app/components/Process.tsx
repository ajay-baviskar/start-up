import { Search, Palette, Code, Rocket, BarChart } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '01',
      icon: <Search size={32} />,
      title: 'Discover',
      description: 'We understand your goals, audience, and requirements through detailed consultation.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: <Palette size={32} />,
      title: 'Design',
      description: 'Creating intuitive, beautiful interfaces and user experiences that align with your brand identity.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: <Code size={32} />,
      title: 'Develop',
      description: 'Building robust, scalable solutions using cutting-edge technologies and best coding practices.',
      color: 'from-orange-500 to-red-500',
    },
    {
      number: '04',
      icon: <Rocket size={32} />,
      title: 'Launch',
      description: 'Thorough testing, quality assurance, and seamless deployment to production environments.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      number: '05',
      icon: <BarChart size={32} />,
      title: 'Grow',
      description: 'Continuous monitoring, optimization, and support to ensure sustained growth and success.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600">
            A proven methodology that transforms ideas into successful digital products
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
          {/* Steps */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Number Badge */}
                <div className="text-center mb-4">
                  <div className={`inline-flex w-20 h-20 bg-gradient-to-r ${step.color} rounded-full items-center justify-center text-white text-2xl font-bold shadow-xl relative z-10 hover:scale-110 transition-transform`}>
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:rotate-6 transition-transform`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">Ready to start your project?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all"
          >
            Let's Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
