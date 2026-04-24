import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesCards from '@/components/ServicesCards';
import TrustedBrands from '@/components/TrustedBrands';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturesGrid from '@/components/FeaturesGrid';
import StatsAndProgress from '@/components/StatsAndProgress';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import TeamSection from '@/components/TeamSection';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesCards />
      <TrustedBrands />
      <WhyChooseUs />
      <FeaturesGrid />
      <StatsAndProgress />
      <ProjectsShowcase />
      <TeamSection />
      <Testimonials />
      <BlogPreview />
      <Footer />
    </main>
  );
}
