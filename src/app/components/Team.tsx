import { Linkedin, Mail } from 'lucide-react';

export function Team() {
  const leaders = [
    {
      name: 'Sarah Mitchell',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHdvbWFufGVufDF8fHx8MTc2ODc5NzU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'With over 15 years of experience in technology and business strategy, Sarah leads Altravionix with a vision to democratize advanced technology for businesses of all sizes. She has successfully scaled multiple tech startups and holds an MBA from Stanford.',
      expertise: ['Business Strategy', 'Digital Transformation', 'Leadership', 'Growth Management'],
      linkedin: '#',
      email: 'sarah@Altravionix.com',
    },
    {
      name: 'David Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODg2ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'David is a technology visionary with expertise in AI, cloud architecture, and software engineering. He has led engineering teams at major tech companies and holds a PhD in Computer Science. His passion is building scalable, innovative solutions.',
      expertise: ['AI & Machine Learning', 'Cloud Architecture', 'Full-Stack Development', 'DevOps'],
      linkedin: '#',
      email: 'david@Altravionix.com',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Meet Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600">
            Guided by experienced leaders who are passionate about innovation and excellence
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                <img 
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            
              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-1 text-gray-900">{leader.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{leader.role}</p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {leader.bio}
                </p>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <div className="text-xl font-bold text-gray-900 mb-3">Expertise:</div>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-sm rounded-full border border-indigo-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex gap-3">
                  <a 
                    href={leader.linkedin}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all text-sm"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <a 
                    href={`mailto:${leader.email}`}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 border-2 border-indigo-600 rounded-full hover:bg-indigo-50 transition-all text-sm"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
