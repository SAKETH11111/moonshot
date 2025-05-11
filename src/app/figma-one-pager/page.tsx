"use client";

import React from 'react';
import { AnimatedSection } from '~/components/layout/animated-section';

const FigmaOnePagerPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <AnimatedSection delay={0.2}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-serif mb-8 text-center">
          Figma Design Overview
        </h1>
        <div className="flex justify-center max-w-3xl mx-auto"> {/* Added max-w-3xl and mx-auto */}
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="1200" // Increased height
            src="https://embed.figma.com/design/MblmNjdIfOQYX68msKGNYs/Untitled?node-id=0-1&embed-host=share"
            allowFullScreen
            title="Figma Design Embed"
          ></iframe>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default FigmaOnePagerPage;