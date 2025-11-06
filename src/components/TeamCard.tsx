import { Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const TeamCard = ({ name, role, image, linkedin }: TeamCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-300 hover:-translate-y-1 border border-border">
      <div className="aspect-square bg-secondary overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-card-foreground">{name}</h3>
        <p className="text-muted-foreground mb-4">{role}</p>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">Connect</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
