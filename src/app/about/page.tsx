"use client"; // Add this directive

import { Zap, Leaf, Factory, Globe } from "lucide-react"; // Icons for values
import { AnimatedSection, itemVariants } from "~/components/layout/animated-section"; // Import AnimatedSection
import { motion } from "framer-motion"; // Import motion for item variants

export default function AboutUsPage() {
  const companyValues = [
    {
      icon: <Zap className="h-10 w-10 text-primary mb-4" />,
      title: "Scientific Integrity",
      description: "Our work is grounded in rigorous research, data-driven innovation, and transparent processes. We are committed to advancing climate solutions with the highest standards of scientific excellence.",
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary mb-4" />,
      title: "Climate Impact",
      description: "Our primary goal is to make a significant, measurable, and lasting positive impact on the global climate by removing legacy CO₂ emissions at scale.",
    },
    {
      icon: <Factory className="h-10 w-10 text-primary mb-4" />,
      title: "Manufacturing Mindset",
      description: "We are focused on developing a technology that is not only effective but also manufacturable, scalable, and economically viable for widespread global deployment.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary mb-4" />,
      title: "Global Collaboration",
      description: "Addressing climate change requires a collective effort. We believe in fostering partnerships and collaborations across industries, academia, and governments worldwide.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <AnimatedSection tag="section" className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-serif">
            About Corbent
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Pioneering the next generation of direct air capture to restore our climate.
          </p>
        </div>
      </AnimatedSection>

      {/* Mission Statement Section */}
      <AnimatedSection tag="section" className="w-full py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl font-serif">
              Our Mission
            </h2>
            <p className="mt-6 text-xl text-foreground md:text-2xl leading-relaxed">
              To remove legacy carbon dioxide from the atmosphere at gigaton scale, leveraging breakthrough technology to create a sustainable and healthy planet for future generations.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Company Values Section */}
      <section className="w-full py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              Our Core Values
            </h2>
          </AnimatedSection>
          <AnimatedSection
            tag="div"
            staggerChildren={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          >
            {companyValues.map((value) => (
              <motion.div variants={itemVariants} key={value.title}>
                <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {value.icon}
                  <h3 className="text-2xl font-semibold text-foreground mb-2 font-serif">{value.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{value.description}</p> {/* Added flex-grow */}
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <AnimatedSection tag="section" className="w-full py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif mb-8">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are a passionate group of scientists, engineers, and innovators dedicated to solving one of the world&apos;s most pressing challenges.
            <br /><br />
            (Team member profiles will be added here soon.)
          </p>
          <div className="mt-12 p-8 bg-muted/50 rounded-lg">
            <p className="text-muted-foreground">[Team Section Placeholder - Future team members will be showcased here with photos and bios.]</p>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}