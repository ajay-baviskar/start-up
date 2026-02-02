import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Altravionix transformed our digital presence completely. Their team delivered an outstanding e-commerce platform that increased our sales by 300%. Highly professional and innovative!',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupHub',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Working with Altravionix was a game-changer. They built our mobile app from scratch and the results exceeded all expectations. The attention to detail and commitment to quality is unmatched.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Their digital marketing strategies delivered incredible ROI. We saw a 250% increase in qualified leads within 3 months. The team is responsive, creative, and results-driven.',
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            What Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className={`w-12 h-12 bg-gradient-to-r ${review.gradient} rounded-full flex items-center justify-center mb-6`}>
                <Quote size={24} className="text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <div className="text-xl font-bold text-gray-900">{review.name}</div>
                  <div className="text-gray-600">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
