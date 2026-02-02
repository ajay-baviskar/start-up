import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full">
              <Sparkles size={16} className="text-indigo-600" />
              <span className="text-sm text-indigo-700 font-semibold">AI Solutions Coming Soon</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Building Scalable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Digital & AI Solutions
              </span>{' '}
              for Modern Businesses
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We create cutting-edge applications, responsive websites, and data-driven digital marketing strategies
              that help your business thrive in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Get a Free Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full border-2 border-indigo-600 hover:bg-indigo-50 transition-all"
              >
                View Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="bg-white rounded-2xl p-4 shadow-md border border-indigo-100">
                <div className="text-3xl font-bold text-indigo-600">3+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-md border border-purple-100">
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-md border border-pink-100">
                <div className="text-3xl font-bold text-pink-600">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl blur-3xl opacity-40"></div>
            <div className="w-full rounded-3xl overflow-hidden bg-stone-100">
              <img
                src="https://mixed-yellow-gull.myfilebase.com/ipfs/QmNTj8f6CGUBpJfLWR8p93yKC2wcUf3baKJA8fnCdsTT8r"
                alt="AI and Software Development"
                loading="eager"
                decoding="async"
                className="w-full h-auto lg:h-[500px] object-cover object-center"
                style={{
                  imageRendering: "auto",
                  transform: "translateZ(0)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
