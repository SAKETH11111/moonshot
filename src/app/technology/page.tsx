import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "~/components/layout/animated-section"; // Import AnimatedSection

export default function TechnologyPage() {
  const coreInnovations = [
    {
      title: "Metal-Organic Framework (MOF) Sheets",
      description: "Our custom-engineered MOF sheets possess an ultra-high surface area, acting like molecular sponges that selectively and efficiently grab CO₂ molecules directly from the ambient air, even at low concentrations.",
      details: [
        "Exceptional CO₂ selectivity over other atmospheric gases.",
        "Robust and durable material designed for long operational life.",
        "Optimized for maximum air contact and CO₂ uptake.",
      ],
      imagePlaceholder: "Diagram of MOF sheet structure capturing CO₂ molecules.",
    },
    {
      title: "Electro-Swing Adsorption (ESA)",
      description: "Instead of relying on energy-intensive heat or pressure changes, Corbent utilizes a proprietary electro-swing process. A brief, low-energy electric pulse alters the MOF's affinity, causing it to release the captured CO₂ in a concentrated stream.",
      details: [
        "Drastically reduces energy consumption by up to 90% compared to traditional thermal swing.",
        "Rapid cycling times for continuous CO₂ capture and release.",
        "Eliminates the need for large heating/cooling infrastructure.",
      ],
      imagePlaceholder: "Animation/diagram showing CO₂ release via electro-swing.",
    },
    {
      title: "Modular, Containerized Design",
      description: "Each Corbent 'carbon vacuum' is a self-contained unit built within a standard shipping container. This modularity allows for mass production, rapid deployment, and scalability to meet diverse carbon removal needs.",
      details: [
        "Factory-manufactured for quality control and cost-efficiency.",
        "Easily transportable and deployable in various locations.",
        "Scalable by simply adding more modules, from small to gigaton-scale projects.",
      ],
      imagePlaceholder: "Image of container modules being deployed or in a facility.",
    },
    {
      title: "Permanent Storage via Basalt Mineralization",
      description: "The captured, concentrated CO₂ is then prepared for permanent sequestration. We partner with leading mineralization providers to inject the CO₂ into basalt rock formations, where it reacts and turns into stable carbonate minerals in under two years, locking it away safely for millennia.",
      details: [
        "Geologically stable and verifiable permanent storage.",
        "Leverages natural geological processes for CO₂ solidification.",
        "Ensures no leakage and contributes to durable carbon removal.",
      ],
      imagePlaceholder: "Diagram illustrating CO₂ injection and mineralization in basalt.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Wrap intro section */}
      <AnimatedSection tag="section" className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-serif">
            Our Core Technology
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Discover the innovations that make Corbent&apos;s direct air capture a game-changer for climate action.
          </p>
        </div>
      </AnimatedSection>

      {coreInnovations.map((innovation, index) => (
        // Wrap each innovation section
        <AnimatedSection
          tag="section"
          key={innovation.title}
          className={`w-full py-12 md:py-20 ${index % 2 === 0 ? "bg-background" : "bg-background"}`}
          delay={index * 0.1} // Add a small delay based on index
        >
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`md:order-${index % 2 === 0 ? 1 : 2}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl font-serif">
                {innovation.title}
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                {innovation.description}
              </p>
              <ul className="mt-6 space-y-3">
                {innovation.details.map((detail) => (
                  <li key={detail} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /> {/* Use text-primary */}
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`md:order-${index % 2 === 0 ? 2 : 1} mt-8 md:mt-0`}>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-sm text-muted-foreground p-4 text-center">
                  [Visual Placeholder: {innovation.imagePlaceholder}]
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </main>
  );
}