import { useState } from 'react';
import { Brain, Bot, BarChart3, Sparkles, Zap, TrendingUp } from 'lucide-react';

export function ComingSoon() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const aiFeatures = [
    {
      icon: <Bot size={28} />,
      title: 'AI Chatbots',
      description: 'Intelligent conversational agents for customer support and engagement',
    },
    {
      icon: <Zap size={28} />,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline business operations',
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Predictive Analytics',
      description: 'Data-driven insights to forecast trends and make informed decisions',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'ML Integration',
      description: 'Custom machine learning models tailored to your business needs',
    },
  ];

  const handleNotify = async () => {
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch(
        'https://api.altravionix.com/api/notify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );


      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || 'Failed to subscribe');
      }

      setSuccess('You will be notified when we launch 🚀');
      setEmail('');

      // auto-hide success
      setTimeout(() => setSuccess(null), 5000);
    } catch (err: any) {
      console.error('Notify API error:', err);
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles size={20} className="text-yellow-400" />
            <span className="font-semibold">Launching Soon</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            AI-Powered{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations,
            enhance customer experiences, and gain competitive advantages.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all border border-white/20"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-xl flex items-center justify-center text-indigo-900 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Center Showcase */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain size={48} className="text-indigo-900" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Revolutionary AI Technology</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're developing advanced AI solutions including intelligent chatbots, automated workflows,
            predictive analytics, and custom machine learning models to revolutionize how you do business.
          </p>

          {/* Notify Me Form */}
          <div className="max-w-md mx-auto">
            {success && (
              <div className="mb-4 rounded-full bg-green-500/20 text-green-200 px-4 py-2 text-sm">
                ✅ {success}
              </div>
            )}

            {error && (
              <div className="mb-4 rounded-full bg-red-500/20 text-red-200 px-4 py-2 text-sm">
                ❌ {error}
              </div>
            )}

            <div className="max-w-md mx-auto">
              {/* Input + Button Row */}
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <button
                  onClick={handleNotify}
                  disabled={loading}
                  className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-pink-400 text-indigo-900 font-semibold rounded-full hover:shadow-2xl transition-all disabled:opacity-60"
                >
                  {loading ? '...' : 'Notify Me'}
                </button>
              </div>

              {/* Validation Message BELOW */}
              {email && !isValidEmail(email) && (
                <p className="mt-2 text-sm text-red-300 text-left">
                  Please enter a valid email address
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
