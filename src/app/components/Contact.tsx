import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setSuccess(null);

  try {
    const response = await fetch(
      `https://api.altravionix.com/api/contact`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    // 🔥 SAFELY READ RESPONSE
    const text = await response.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch {
      throw new Error('Server returned invalid response');
    }

    if (!response.ok) {
      throw new Error(data?.message || 'Failed to submit form');
    }

    setSuccess('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });

    setTimeout(() => setSuccess(null), 5000);
  } catch (err: any) {
    console.error('Contact API error:', err);
    setError(err.message || 'Something went wrong. Please try again later.');
  } finally {
    setLoading(false);
  }
};


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Build{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Your Idea
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Ready to start your next project? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're here to help bring your vision to life. Whether you have a question about our services,
                pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-md border border-indigo-100">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900 mb-1">Email Us</div>
                  <a href="mailto:ajay@altravionix.com" className="text-indigo-600">
                    ajay@altravionix.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-md border border-purple-100">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900 mb-1">Call Us</div>
                  <a href="tel:+8087936880" className="text-purple-600">
                    +91 8087936880 / +91 8793314670
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-md border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900 mb-1">Visit Us</div>
                  <p className="text-gray-600">
                    Flat No. 04, Sai Kamal Building, Sonar Ali, Dahiwali

                    <br />

Tal-Karjat, Dist -Raigad
Maharashtra – 410201
India                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-10 shadow-lg border border-indigo-100">
            
            {/* Success Message */}
            {success && (
              <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  <span className="font-medium">{success}</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-800 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">❌</span>
                  <span className="font-medium">{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="name" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white"
              >
                <option value="">Select a service</option>
                <option value="app-development">Application Development</option>
                <option value="web-development">Website Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="ai-solutions">AI Solutions</option>
                <option value="consultation">General Consultation</option>
              </select>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl transition-all disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={18} className="inline ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}