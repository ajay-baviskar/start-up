import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { WhyChooseUs } from '@/app/components/WhyChooseUs';
import { Process } from '@/app/components/Process';
import { About } from '@/app/components/About';
import { Team } from '@/app/components/Team';
import { ComingSoon } from '@/app/components/ComingSoon';
import { Testimonials } from '@/app/components/Testimonials';
import { Careers } from '@/app/components/Careers';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <About />
        {/* <Team /> */}
        {/* <Testimonials /> */}
        <ComingSoon />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}