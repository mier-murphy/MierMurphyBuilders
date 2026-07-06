import ScrollReveal from "@/components/ScrollReveal";
import clientApple from "@/assets/client-apple.png";
import clientPinterest from "@/assets/client-pinterest.png";
import clientAsurion from "@/assets/client-asurion.png";
import clientBigArts from "@/assets/client-bigarts.png";

const clients = [
  { name: "Apple", logo: clientApple },
  { name: "Pinterest", logo: clientPinterest },
  { name: "Asurion", logo: clientAsurion },
  { name: "Big Arts", logo: clientBigArts },
];

const ClientItem = ({ client }: { client: (typeof clients)[number] }) => (
  <div className="flex shrink-0 flex-col items-center gap-3 group">
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border-2 border-primary/20 group-hover:border-primary group-hover:shadow-lg transition-all duration-500 overflow-hidden bg-background flex items-center justify-center p-3">
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
    <span className="font-sans text-xs md:text-sm font-semibold tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-500 whitespace-nowrap uppercase">
      {client.name}
    </span>
  </div>
);

const ClientsBar = () => {
  return (
    <section className="py-16 md:py-20 bg-muted overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-serif text-2xl md:text-3xl text-center font-bold mb-12 text-foreground">
            Our <span className="text-primary">Clients</span>
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />

        <div className="marquee">
          <div className="marquee__group">
            {clients.map((client) => (
              <ClientItem key={client.name} client={client} />
            ))}
          </div>

          <div className="marquee__group" aria-hidden="true">
            {clients.map((client) => (
              <ClientItem key={`${client.name}-duplicate`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsBar;