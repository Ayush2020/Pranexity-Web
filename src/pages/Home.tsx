import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Code, Rocket, Users, BarChart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/pranexity-logo.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Home = () => {
  const aboutSection = useScrollAnimation();
  const servicesSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with cutting-edge technology.",
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Transform your business operations with innovative digital solutions and strategies.",
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Expert guidance to help you make informed decisions and drive business growth.",
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize your operations and maximize performance.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/30"
      >
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-10 animate-scale-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full group-hover:bg-accent/30 transition-all duration-500"></div>
              
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Empowering Your Digital Future
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-white/95 max-w-2xl mx-auto drop-shadow-md">
            Innovative solutions that drive growth, efficiency, and success for your business.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6 h-auto hover:scale-105 transition-all duration-300 shadow-[var(--shadow-glow)]">
              Get Started 
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutSection.ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${aboutSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                About Pranexity
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We are a forward-thinking technology company dedicated to helping businesses
                thrive in the digital age. With years of experience and a passion for innovation,
                we deliver solutions that make a real difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experts combines technical excellence with strategic thinking to
                create solutions that not only meet your needs today but scale with your
                business tomorrow.
              </p>
            </div>
            <div className={`rounded-xl overflow-hidden shadow-[var(--shadow-large)] transition-all duration-700 delay-200 ${aboutSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesSection.ref} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-700 ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your business growth
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className={`transition-all duration-700 ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: servicesSection.isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSection.ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/40"></div>
        <div className={`relative z-10 container mx-auto max-w-4xl text-center transition-all duration-700 ${ctaSection.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-white/95">
            Let's discuss how we can help you achieve your goals.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6 h-auto shadow-[var(--shadow-glow)]">
              Contact Us 
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
