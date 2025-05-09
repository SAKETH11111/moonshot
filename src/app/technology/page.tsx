import Image from "next/image"; // Import Next.js Image component
import { CheckCircle2 } from "lucide-react"; // Keep CheckCircle2 for list items
import { AnimatedSection } from "~/components/layout/animated-section"; // Import AnimatedSection
// Accordion imports removed
// Lucide icons for placeholders (Layers, Zap, Container, Archive) are removed as we'll use actual images
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

// Import the new images
import MofSheetsImage from "./Capturing CO₂ with MOF Sheets.png";
import EsaImage from "./Electro-Swing CO₂ Release Process.png";
import ModularDesignImage from "./Modular Air Filtration Design.png";
import BasaltStorageImage from "./Permanent CO₂ Storage via Basalt.png";


export default function TechnologyPage() {
  const coreInnovations = [
    {
      title: "Metal-Organic Framework (MOF) Sheets",
      tooltipText: "Advanced Molecular Sponges",
      description: "Our custom-engineered MOF sheets possess an ultra-high surface area, acting like molecular sponges that selectively and efficiently grab CO₂ molecules directly from the ambient air, even at low concentrations.",
      details: [
        "Exceptional CO₂ selectivity over other atmospheric gases.",
        "Robust and durable material designed for long operational life.",
        "Optimized for maximum air contact and CO₂ uptake.",
      ],
      imagePlaceholder: "Diagram of MOF sheet structure capturing CO₂ molecules.",
      // iconComponent: <Layers className="h-32 w-32 text-primary opacity-70" /> // Removed
      imageSrc: MofSheetsImage,
    },
    {
      title: "Electro-Swing Adsorption (ESA)",
      tooltipText: "Energy-Efficient CO₂ Release",
      description: "Instead of relying on energy-intensive heat or pressure changes, Corbent utilizes a proprietary electro-swing process. A brief, low-energy electric pulse alters the MOF's affinity, causing it to release the captured CO₂ in a concentrated stream.",
      details: [
        "Drastically reduces energy consumption by up to 90% compared to traditional thermal swing.",
        "Rapid cycling times for continuous CO₂ capture and release.",
        "Eliminates the need for large heating/cooling infrastructure.",
      ],
      imagePlaceholder: "Animation/diagram showing CO₂ release via electro-swing.",
      // iconComponent: <Zap className="h-32 w-32 text-primary opacity-70" /> // Removed
      imageSrc: EsaImage,
    },
    {
      title: "Modular, Containerized Design",
      tooltipText: "Scalable Carbon Capture Units",
      description: "Each Corbent 'carbon vacuum' is a self-contained unit built within a standard shipping container. This modularity allows for mass production, rapid deployment, and scalability to meet diverse carbon removal needs.",
      details: [
        "Factory-manufactured for quality control and cost-efficiency.",
        "Easily transportable and deployable in various locations.",
        "Scalable by simply adding more modules, from small to gigaton-scale projects.",
      ],
      imagePlaceholder: "Image of container modules being deployed or in a facility.",
      // iconComponent: <Container className="h-32 w-32 text-primary opacity-70" /> // Removed
      imageSrc: ModularDesignImage,
    },
    {
      title: "Permanent Storage via Basalt Mineralization",
      tooltipText: "CO₂ Locked in Stone",
      description: "The captured, concentrated CO₂ is then prepared for permanent sequestration. We partner with leading mineralization providers to inject the CO₂ into basalt rock formations, where it reacts and turns into stable carbonate minerals in under two years, locking it away safely for millennia.",
      details: [
        "Geologically stable and verifiable permanent storage.",
        "Leverages natural geological processes for CO₂ solidification.",
        "Ensures no leakage and contributes to durable carbon removal.",
      ],
      imagePlaceholder: "Diagram illustrating CO₂ injection and mineralization in basalt.",
      // iconComponent: <Archive className="h-32 w-32 text-primary opacity-70" /> // Removed
      imageSrc: BasaltStorageImage,
    },
  ];

  return (
    <TooltipProvider delayDuration={200}>
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
              <Tooltip>
                <TooltipTrigger asChild>
                  <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl font-serif cursor-help">
                    {innovation.title}
                  </h2>
                </TooltipTrigger>
                {innovation.tooltipText && (
                  <TooltipContent side="top" className="bg-secondary text-secondary-foreground">
                    <p>{innovation.tooltipText}</p>
                  </TooltipContent>
                )}
              </Tooltip>
              <p className="mt-4 text-muted-foreground md:text-lg">
                {innovation.description}
              </p>
              <ul className="mt-6 space-y-3">
                {innovation.details.map((detail) => (
                  <li key={detail} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`md:order-${index % 2 === 0 ? 2 : 1} mt-8 md:mt-0`}>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center p-4 overflow-hidden">
                {innovation.imageSrc ? (
                  <Image
                    src={innovation.imageSrc}
                    alt={innovation.imagePlaceholder || innovation.title}
                    className="object-contain w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <p className="text-sm text-muted-foreground">Visual coming soon</p>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
      </main>
    </TooltipProvider>
  );
}