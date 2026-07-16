import ScrollReveal from "@/components/ScrollReveal";
import clientApple from "@/assets/apple.avif";
import clientPinterest from "@/assets/pin_edited.avif";
import clientAsurion from "@/assets/asurion.avif";
import clientBigArts from "@/assets/bigarts.avif";

const clients = [
  { name: "Apple", logo: clientApple },
  { name: "Pinterest", logo: clientPinterest },
  { name: "Asurion", logo: clientAsurion },
  { name: "Big Arts", logo: clientBigArts },
];

const ClientItem = ({ client }: { client: (typeof clients)[number] }) => (
  <div className="flex shrink-0 flex-col items-center gap-3 group ">
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border-2 border-primary/20 group-hover:border-primary group-hover:shadow-lg transition-all duration-500 overflow-hidden bg-background flex items-center justify-center p-3">
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="w-full h-full object-contain"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
    <span className="font-sans text-xs md:text-sm font-semibold tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-500 whitespace-nowrap uppercase">
      {client.name}
    </span>
  </div>
);

const ClientsBar = () => {
  return (
    <section className="py-16 md:py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-serif text-2xl md:text-3xl text-center font-bold mb-12 text-foreground">
            Our <span className="text-primary">Clients</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal >
          <div className="flex flex-wrap items-center justify-center gap-x-15 gap-y-12 md:gap-x-40">
            {clients.map((client) => (
              <ClientItem key={client.name} client={client} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClientsBar;