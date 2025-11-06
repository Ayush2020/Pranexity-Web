import TeamCard from "@/components/TeamCard";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const missionSection = useScrollAnimation();
  const storySection = useScrollAnimation();
  const valuesSection = useScrollAnimation();
  const teamSection = useScrollAnimation();

  const team = [
    {
      name: "Rohit Vargee",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
    },
    {
      name: "John Smith",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
    },
    {
      name: "Ocean Sharma",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
    },
    {
      name: "David Willy",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      {/* Mission Section */}
      <section ref={missionSection.ref} className="container mx-auto max-w-6xl mb-20">
        <div className={`text-center mb-12 transition-all duration-700 ${missionSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl font-bold mb-6 text-foreground">About Pranaxity</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to empower businesses through innovative technology solutions
          </p>
        </div>

        <div ref={storySection.ref} className={`bg-card rounded-xl p-8 md:p-12 shadow-[var(--shadow-medium)] border border-border transition-all duration-700 delay-200 ${storySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-6 text-card-foreground">Our Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2025, Pranexity emerged from a simple belief: that technology should
              empower businesses, not complicate them. We started as a small team of passionate
              developers and strategists who saw the gap between what businesses needed and what
              technology companies were offering.
            </p>
            <p>
              Today, we've grown into a trusted partner for companies looking to navigate the
              digital landscape. Our approach combines technical excellence with a deep
              understanding of business challenges, ensuring that every solution we create
              drives real, measurable results.
            </p>
            <p>
              We believe in building long-term relationships with our clients, becoming not just
              a service provider, but a strategic partner in their growth journey. Our success
              is measured by the success of the businesses we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesSection.ref} className="container mx-auto max-w-6xl mb-20">
        <h2 className={`text-4xl font-bold mb-12 text-center text-foreground transition-all duration-700 ${valuesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "We constantly push boundaries to find better solutions for complex challenges.",
            },
            {
              title: "Integrity",
              description: "We believe in honest communication and transparent partnerships.",
            },
            {
              title: "Excellence",
              description: "We're committed to delivering the highest quality in everything we do.",
            },
          ].map((value, index) => (
            <div
              key={value.title}
              className={`bg-card p-8 rounded-xl shadow-[var(--shadow-medium)] border border-border transition-all duration-700 ${valuesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: valuesSection.isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamSection.ref} className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 transition-all duration-700 ${teamSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground">
            The passionate people behind Pranaxity's success
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.name} 
              className={`transition-all duration-700 ${teamSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: teamSection.isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
