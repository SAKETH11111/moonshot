"use client"; // Add this directive

import { Zap, Leaf, Factory, Globe } from "lucide-react"; // Icons for values
import { AnimatedSection, itemVariants } from "~/components/layout/animated-section"; // Import AnimatedSection
import { motion } from "framer-motion"; // Import motion for item variants
import Image from "next/image"; // Import Next Image
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"; // Import Card components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

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
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section */}
        <AnimatedSection tag="section" className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-background/80" animationStyle="fadeInUp">
          <div className="container mx-auto px-4 md:px-6 text-center">
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
      <AnimatedSection tag="section" className="w-full py-12 md:py-20 bg-background" animationStyle="fadeInLeft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
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
      <section className="w-full py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16" animationStyle="zoomIn">
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
      <AnimatedSection tag="section" className="w-full py-12 md:py-20 bg-background" animationStyle="fadeInRight">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif mb-8 cursor-help">
                Meet Our Team
              </h2>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-secondary text-secondary-foreground">
              <p>The People Behind Corbent</p>
            </TooltipContent>
          </Tooltip>
          <div className="mt-12 flex justify-center"> {/* Centering the card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 10px 25px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-full max-w-md" // Made card slightly wider
            >
              <Card className="overflow-hidden text-center h-full flex flex-col shadow-2xl"> {/* Added more shadow */}
                <CardHeader className="p-0 relative">
                  <div className="w-full h-80 relative"> {/* Increased image height */}
                    <Image
                      src="https://i.ibb.co/ZznVWGJD/Rudaiba-pic.jpg" // Placeholder, user to provide direct link
                      alt="Rudaiba Tarannum"
                      width={400}
                      height={400}
                      className="rounded-t-lg object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-8 flex-grow mt-4"> {/* Added mt-4 to prevent overlap */}
                  <CardTitle className="text-3xl font-bold text-primary font-serif">Rudaiba Tarannum</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground mt-2">Founder</CardDescription>
                  {/* Bio removed as per request */}
                </CardContent>
                <CardFooter className="p-4 bg-muted/30 border-t flex justify-center"> {/* Centering footer content */}
                  <p className="text-xs text-muted-foreground">Founder</p>
                </CardFooter>
              </Card>
            </motion.div>
            {/* Add more team members here as needed */}
          </div>
        </div>
      </AnimatedSection>
      </main>
    </TooltipProvider>
  );
}