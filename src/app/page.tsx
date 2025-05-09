"use client";

import HeroGeometric from "~/components/kokonutui/hero-geometric";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { ArrowRight, CheckCircle2, Zap, Scaling, ShieldCheck, GitCommitHorizontal } from "lucide-react"; // Added more icons
import { motion } from "framer-motion";
import { AnimatedSection, itemVariants } from "~/components/layout/animated-section"; // Import AnimatedSection

const comparisonData = [
  {
    metric: "Energy Required (per ton CO₂)",
    corbent: "~0.18 MWh (90% less)",
    conventional: "1.8 - 2.5 MWh",
    highlightCorbent: true,
  },
  {
    metric: "Filter Capacity / Sorbent Lifetime",
    corbent: "High (MOF durability)",
    conventional: "Variable, often lower",
    highlightCorbent: true,
  },
  {
    metric: "Cost (per ton CO₂)",
    corbent: "$30 - $50",
    conventional: "$125 - $335+",
    highlightCorbent: true,
  },
  {
    metric: "Physical Footprint",
    corbent: "Modular, container-sized",
    conventional: "Often large industrial plants",
    highlightCorbent: true,
  },
  {
    metric: "Deployment Flexibility",
    corbent: "High (decentralized, scalable)",
    conventional: "Lower (centralized, fixed)",
    highlightCorbent: true,
  },
  {
    metric: "Regeneration Method",
    corbent: "Electro-swing (low energy)",
    conventional: "Thermal swing (high energy)",
    highlightCorbent: true,
  },
];

const roadmapPhases = [
  {
    icon: <Zap className="h-8 w-8 text-primary mb-3" />,
    title: "Phase 1: R&D & Validation",
    description: "Perfecting our MOF chemistry and electro-swing process. Successful pilot module deployment and performance verification.",
    status: "Current Focus",
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary mb-3" />,
    title: "Phase 2: Commercial Scale-Up",
    description: "Developing manufacturing partnerships and optimizing for mass production. First commercial installations and long-term operational testing.",
    status: "Next 2 Years",
  },
  {
    icon: <GitCommitHorizontal className="h-8 w-8 text-primary mb-3" />, // Representing deployment/integration
    title: "Phase 3: Gigaton Trajectory",
    description: "Expanding production capacity significantly. Deploying large-scale projects globally to make a tangible impact on atmospheric CO₂ levels.",
    status: "5 Years",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary mb-3" />, // Representing established impact
    title: "Phase 4: Global Climate Restoration",
    description: "Achieving gigaton-scale annual CO₂ removal. Contributing meaningfully to global climate goals and a sustainable future.",
    status: "10+ Years",
  },
];


export default function HomePage() {
  // Removed container and item variants, they are now in AnimatedSection

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroGeometric /> {/* Badge, title, subtitle are now props of HeroGeometric itself */}

      {/* Brief Problem Statement */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif text-primary">
              The Carbon Crisis: A Legacy We Must Address
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Centuries of industrial activity have left a staggering burden of over a trillion tons of CO₂ in our atmosphere. This legacy carbon is the primary driver of climate change, threatening ecosystems, economies, and our way of life. Conventional solutions to capture this CO₂ are often too slow, too expensive, or too energy-intensive to make a meaningful impact at the necessary scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif text-primary">
              Corbent&apos;s Revolution: Efficient, Scalable, Permanent
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              We&apos;re rewriting the rules of direct air capture. Our breakthrough technology utilizes advanced Metal-Organic Frameworks (MOFs) and an innovative electro-swing process to remove CO₂ with unprecedented efficiency and minimal energy.
            </p>
          </AnimatedSection>
          
          <AnimatedSection
            tag="div" // Use div instead of section
            staggerChildren={0.1}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-card/60 dark:bg-card/80 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                <CardHeader className="items-center text-center">
                  <Zap className="h-12 w-12 text-secondary mb-3" />
                <CardTitle className="text-2xl font-semibold font-serif text-foreground">MOF-Powered Capture</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">Ultra-efficient Metal-Organic Frameworks act like sponges, selectively capturing CO₂ directly from the air.</p>
              </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="bg-card/60 dark:bg-card/80 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                <CardHeader className="items-center text-center">
                  <Scaling className="h-12 w-12 text-secondary mb-3" /> {/* Changed icon */}
                <CardTitle className="text-2xl font-semibold font-serif text-foreground">Electro-Swing Release</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">A low-energy electric pulse releases captured CO₂, using 90% less energy than traditional methods.</p>
              </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="bg-card/60 dark:bg-card/80 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                <CardHeader className="items-center text-center">
                  <ShieldCheck className="h-12 w-12 text-secondary mb-3" /> {/* Changed icon */}
                <CardTitle className="text-2xl font-semibold font-serif text-foreground">Modular & Mineralized</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">Container-sized modules for scalable deployment, with CO₂ permanently stored as stone in basalt formations.</p>
              </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif text-primary">
              Corbent vs. Conventional DAC
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              See how our next-generation technology stacks up against traditional methods.
            </p>
          </AnimatedSection>
          <AnimatedSection
            tag="div"
            delay={0.2} // Add delay here
            className="max-w-5xl mx-auto bg-card/60 dark:bg-card/80 p-0 rounded-xl shadow-xl overflow-hidden backdrop-blur-sm"
          >
            <Table>
              <TableCaption className="py-4 text-sm text-muted-foreground">
                Corbent&apos;s technology offers significant advantages in energy, cost, and scalability.
              </TableCaption>
              <TableHeader>
                <TableRow className="border-b-foreground/20">
                  <TableHead className="w-[250px] sm:w-[300px] text-left text-base font-semibold text-foreground">Metric</TableHead>
                  <TableHead className="text-center text-base font-semibold text-primary">Corbent</TableHead>
                  <TableHead className="text-center text-base font-semibold text-muted-foreground">Conventional DAC</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((item) => (
                  <TableRow key={item.metric} className="border-b-foreground/10 last:border-b-0 hover:bg-muted/30 dark:hover:bg-muted/20">
                    <TableCell className="font-medium text-foreground/90 py-4">{item.metric}</TableCell>
                    <TableCell className={`text-center font-semibold py-4 ${item.highlightCorbent ? 'text-primary' : 'text-foreground/90'}`}>
                      {item.highlightCorbent && <CheckCircle2 className="inline-block mr-1 sm:mr-2 h-5 w-5 text-primary" />} {/* Changed text-teal-500 to text-primary */}
                      {item.corbent}
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground py-4">
                      {item.conventional}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AnimatedSection>
        </div>
      </section>

      {/* Visual Timeline/Roadmap Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-primary/5 dark:bg-primary/10 text-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif text-primary">
              Our Roadmap to Gigaton Scale
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are on a mission to remove CO₂ at a scale that matters. Here’s our phased approach to achieving global impact.
            </p>
          </AnimatedSection>
          <AnimatedSection
            tag="div"
            staggerChildren={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          >
            {roadmapPhases.map((phase) => (
              <motion.div variants={itemVariants} key={phase.title}>
                <Card className="bg-card/60 dark:bg-card/80 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col text-center items-center h-full">
                  <CardHeader className="items-center">
                    {phase.icon}
                    <CardTitle className="text-xl font-semibold font-serif text-foreground">{phase.title}</CardTitle>
                  <CardDescription className="text-xs text-secondary font-medium">{phase.status}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="w-full py-20 md:py-32 bg-background text-center">
        <AnimatedSection className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-serif">
            Join the Climate Solution
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground md:text-xl">
            Interested in partnering, investing, or learning more about Corbent&apos;s mission? We&apos;d love to connect.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              <a href="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </AnimatedSection>
      </section>

      {/* Visual Timeline/Roadmap Section */}
      {/* ... (previous timeline code) ... */}

      {/* Call to Action Section */}
      {/* ... (previous CTA code) ... */}
      {/* Removed stray comment terminator from here */}
    </main>
  );
}
