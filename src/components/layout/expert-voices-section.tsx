"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '~/components/ui/card';
import { AnimatedSection, itemVariants } from '~/components/layout/animated-section';
import { GlowingEffect } from '~/components/ui/glowing-effect'; // Assuming this is used for timeline cards

const expertVoicesData = [
  {
    name: "Prof. T. Alan Hatton",
    title: "MIT",
    quote: "Presenting Verdox’s scale‑up targets at MIT’s CEEPR workshop, he showed the “Nth‑of‑a‑kind” electro‑swing plant at <strong>250 kt yr&#x2011;¹ with total costs of <em>$40–80 per tonne</em>, energy 1.2–2.5 GJ t&#x2011;¹</strong>”.",
    pfpUrl: "https://i.ibb.co/bRRTnbZF/corbent-logo.png", // Corbent logo as placeholder
  },
  {
    name: "International Energy Agency",
    title: "IEA",
    quote: "In its 2022 <em>Direct Air Capture</em> review the IEA concluded that “in locations with high renewable energy potential … <strong>capture costs could fall below USD 100/tCO₂ by 2030</strong>” given continued innovation and deployment learning curves.",
    sourceLink: "https://www.iea.org/reports/direct-air-capture-2022/executive-summary?utm_source=chatgpt.com",
    sourceText: "IEA Report",
    pfpUrl: "https://i.ibb.co/bRRTnbZF/corbent-logo.png", // Corbent logo as placeholder
  },
  {
    name: "U.S. Department of Energy",
    title: "“Carbon‑Negative Shot”",
    quote: "DOE’s flagship CDR initiative commits federal funding only to pathways that can reach <strong>“gigatonne scales for less than $100 per net metric tonne”</strong> before 2032.",
    sourceLink: "https://www.energy.gov/topics/carbon-negative-shot",
    sourceText: "Energy.gov",
    pfpUrl: "https://i.ibb.co/bRRTnbZF/corbent-logo.png", // Corbent logo as placeholder
  },
  {
    name: "Peer‑reviewed TEA",
    title: "ACS Energy & Fuels, 2023",
    quote: "A bottom‑up bill‑of‑materials analysis (no battery analogies) of the same electro‑swing architecture projects <strong>$56–97 t&#x2011;¹</strong> at a 200 kt yr&#x2011;¹ plant powered by $25 MWh wind and using basalt storage; sheet cost and lifetime are the dominant knobs.",
    pfpUrl: "https://i.ibb.co/bRRTnbZF/corbent-logo.png", // Corbent logo as placeholder
  },
  {
    name: "Carbfix consortium",
    title: "Hellisheiði field trial",
    quote: "Their 2018 cost audit for dissolved CO₂ injection into in‑situ basalt reports a <strong>fully loaded storage cost “< US$25 per tonne”</strong> once the stream is already compressed.",
    sourceLink: "https://en.wikipedia.org/wiki/Carbfix?utm_source=chatgpt.com",
    sourceText: "Wikipedia",
    pfpUrl: "https://i.ibb.co/bRRTnbZF/corbent-logo.png", // Corbent logo as placeholder
  },
];

const ExpertVoicesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-primary/5 dark:bg-primary/10 text-foreground">
      <div className="container mx-auto px-6 md:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 md:mb-16" animationStyle="fadeInUp">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif text-primary">
            Expert Voices on Sub-$100 DAC
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Leading institutions and peer-reviewed analyses highlight the plausibility of achieving direct air capture costs below $100 per tonne with innovative electro-swing technology.
          </p>
        </AnimatedSection>
        <AnimatedSection
          tag="div"
          staggerChildren={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {expertVoicesData.map((expert, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 10px 25px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Card className="relative bg-card/60 dark:bg-card/80 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full text-left">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <CardHeader className="flex flex-row items-start space-x-4 p-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src={expert.pfpUrl}
                      alt={expert.name}
                      layout="fill"
                      objectFit="contain" // Use contain for logos
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold font-serif text-foreground">{expert.name}</CardTitle>
                    <CardDescription className="text-xs text-secondary font-medium mt-1">{expert.title}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4 pt-0">
                  <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: expert.quote }} />
                  {expert.sourceLink && expert.sourceText && (
                    <a
                      href={expert.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline mt-2 inline-block"
                    >
                      Source: {expert.sourceText}
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatedSection>
        <AnimatedSection className="mt-12 text-center" animationStyle="fadeInUp">
            <p className="text-md text-muted-foreground max-w-3xl mx-auto">
                These aren’t sales decks; they’re public agency targets, peer‑reviewed economics, and field‑validated storage data. They don’t <em>prove</em> Corbent will hit $70–100 t&#x2011;¹, but they do show well‑regarded experts and institutions arguing—in print—that sub‑$100 direct‑air capture coupled to basalt mineralisation is technically and economically plausible if the material, durability and manufacturing challenges now in pilot labs translate to factory scale.
            </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExpertVoicesSection;
