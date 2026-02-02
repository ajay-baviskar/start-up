import { Target, Eye, Users, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Altravionix</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a startup-focused, innovation-driven technology company dedicated to helping businesses 
              navigate the digital landscape with confidence and creativity.
            </p>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our team of experts specializes in creating custom software solutions, building responsive 
              web platforms, and implementing cutting-edge AI technologies that drive real business results.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-indigo-600" size={24} />
                  <div className="text-3xl font-bold text-gray-900">3+</div>
                </div>
                <div className="text-xl text-gray-600">Expert Team Members</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-purple-600" size={24} />
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                </div>
                <div className="text-xl text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mission & Vision Cards */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-indigo-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <Target size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses with innovative technology solutions that drive growth, 
                    efficiency, and competitive advantage in the digital age. We strive to make 
                    cutting-edge technology accessible to companies of all sizes.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-purple-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <Eye size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading technology partner for startups and established businesses 
                    worldwide, recognized for our innovation, quality, and commitment to client 
                    success. We envision a future where every business can leverage AI and 
                    advanced technology to reach its full potential.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Highlight */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Innovation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Transparency</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}