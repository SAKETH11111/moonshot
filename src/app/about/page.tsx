"use client"; // Add this directive

import { Zap, Leaf, Factory, Globe, Youtube, Linkedin, Rss as Substack } from "lucide-react"; // Icons for values, added social
import { AnimatedSection, itemVariants } from "~/components/layout/animated-section"; // Import AnimatedSection
import { motion } from "framer-motion"; // Import motion for item variants
import Image from "next/image"; // Import Next Image
import {
  Card,
  // CardContent, // Unused
  CardDescription,
  // CardFooter, // Unused
  // CardHeader, // Unused
  CardTitle,
} from "~/components/ui/card"; // Import Card components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { RainbowButton } from "~/components/ui/rainbow-button"; // Import RainbowButton
import { SparklesText } from "~/components/ui/sparkles-text"; // Import SparklesText
import { Squares } from "~/components/ui/squares-background"; // Import Squares

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
    <TooltipProvider delayDuration={200}>
      <main className="flex min-h-screen flex-col items-center relative"> {/* Added relative */}
        {/* Full Page Squares Background */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}> {/* Restored z-index, removed temp green bg */}
          <Squares 
            direction="diagonal"
            speed={0.2} 
            squareSize={35} 
            borderColor="hsl(var(--border) / 0.1)" 
            hoverFillColor="hsl(var(--primary) / 0.05)" 
            className="w-full h-full" // Removed opacity classes for now
          />
        </div>

        {/* Hero Section */}
        {/* Removed Squares from here, it's now page-wide */}
        <AnimatedSection tag="section" className="w-full relative pt-16 md:pt-24 pb-8 md:pb-12" animationStyle="fadeInUp"> {/* Adjusted padding as background is separate */}
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10"> {/* Content needs to be above background */}
            <Tooltip>
              <TooltipTrigger asChild>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-serif cursor-help">
                  About Corbent
                </h1>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-secondary text-secondary-foreground">
                <p>Our Story and Purpose</p>
              </TooltipContent>
            </Tooltip>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Pioneering the next generation of direct air capture to restore our climate.
          </p>
        </div>
      </AnimatedSection>

      {/* Mission Statement Section */}
      <AnimatedSection tag="section" className="w-full py-12 md:py-20 bg-transparent relative z-10" animationStyle="fadeInLeft"> {/* bg-transparent, relative z-10 */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center p-6 rounded-lg bg-background/80 backdrop-blur-sm shadow-xl"> {/* Added a semi-transparent card-like bg for readability */}
            <Tooltip>
              <TooltipTrigger asChild>
                <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl font-serif cursor-help">
                  Our Mission
                </h2>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-secondary text-secondary-foreground">
                <p>Our Driving Force</p>
              </TooltipContent>
            </Tooltip>
            <p className="mt-6 text-xl text-foreground md:text-2xl leading-relaxed">
              To remove legacy carbon dioxide from the atmosphere at gigaton scale, leveraging breakthrough technology to create a sustainable and healthy planet for future generations.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Company Values Section */}
      <section className="w-full py-12 md:py-20 bg-transparent relative z-10">  {/* bg-transparent, relative z-10 */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Optional: Add a card-like background for the title if needed for readability */}
          <AnimatedSection className="text-center mb-12 md:mb-16 p-4 rounded-lg bg-background/80 backdrop-blur-sm shadow-md inline-block" animationStyle="zoomIn">
            <Tooltip>
              <TooltipTrigger asChild>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif cursor-help">
                  Our Core Values
                </h2>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-secondary text-secondary-foreground">
                <p>What We Stand For</p>
              </TooltipContent>
            </Tooltip>
          </AnimatedSection>
          <AnimatedSection
            tag="div"
            staggerChildren={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          >
            {companyValues.map((value) => (
              <motion.div
                variants={itemVariants}
                key={value.title}
                whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 10px 25px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
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

      {/* Team Section */}
      <AnimatedSection tag="section" className="w-full py-12 md:py-20 bg-transparent relative z-10" animationStyle="fadeInRight"> {/* bg-transparent, relative z-10 */}
        <div className="container mx-auto px-4 md:px-6 text-center">
          {/* Optional: Add a card-like background for the title if needed for readability */}
          <div className="inline-block p-4 rounded-lg bg-background/80 backdrop-blur-sm shadow-md mb-8">
            <Tooltip>
            <TooltipTrigger asChild>
              {/* Using SparklesText for the heading */}
              <div className="mb-8 cursor-help">
                <SparklesText text="Meet Our Team" className="text-4xl sm:text-5xl md:text-6xl" colors={{first: "hsl(var(--primary))", second: "hsl(var(--secondary))"}} />
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-secondary text-secondary-foreground">
              <p>The People Behind Corbent</p>
            </TooltipContent>
            </Tooltip>
          </div>
          
          {/* New Team Card Layout */}
          <div className="mt-0 flex justify-center"> {/* Removed mt-12 as title has mb-8 */}
            <motion.div
              variants={itemVariants} // You might want to define specific variants for this card
              initial="hidden" // Example initial state
              animate="visible" // Example animate state
              whileHover={{ scale: 1.02, boxShadow: "0px 15px 30px rgba(var(--primary-rgb), 0.2)" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-full max-w-4xl" // Wider card
            >
              <Card className="overflow-hidden shadow-2xl md:flex md:flex-row bg-card/80 backdrop-blur-sm">
                {/* Left Side - PFP */}
                <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                  <Image
                    src="https://i.ibb.co/8Cd1Lkh/Rudaiba-Tarannum-photo.jpg"
                    alt="Rudaiba Tarannum"
                    layout="fill"
                    objectFit="cover"
                    className="md:rounded-l-lg md:rounded-r-none rounded-t-lg"
                  />
                </div>

                {/* Right Side - Info, Socials, LessWrong Link */}
                <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-between">
                  <div>
                    <CardTitle className="text-3xl lg:text-4xl font-bold text-primary font-serif">
                      Rudaiba Tarannum
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground mt-1">
                      Founder
                    </CardDescription>
                    
                    <p className="mt-4 text-foreground/90 leading-relaxed">
                      Rudaiba is driving Corbent&amp;apos;s mission to develop and deploy next-generation direct air capture technology, aiming for gigaton-scale CO₂ removal.
                    </p>

                    <div className="mt-6 flex space-x-4">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                        <Youtube className="h-7 w-7" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                        <Linkedin className="h-7 w-7" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Substack">
                        <Substack className="h-7 w-7" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/50">
                    <h4 className="text-xl font-semibold text-foreground mb-3 font-serif">
                      Our Vision for Climate Restoration
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Dive deeper into Corbent&amp;apos;s master plan and the science behind our approach on LessWrong.
                    </p>
                    <a
                      href="/moonshot/article"
                      target="_self" // Changed to _self as it's an internal link now
                      rel="noopener noreferrer"
                      className="inline-block" // To allow button to take its own width
                    >
                      <RainbowButton>
                        Read Our Article
                      </RainbowButton>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
      </main>
    </TooltipProvider>
  );
}
