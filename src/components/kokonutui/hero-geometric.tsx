"use client"

import { motion } from "framer-motion"
// import { Pacifico } from "next/font/google" // Replaced with global font variable
import Image from "next/image"
import { cn } from "~/lib/utils"

// const pacifico = Pacifico({ // Replaced with global font variable
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-pacifico",
// })

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric({
  badge = "Corbent: Direct Air Capture",
  title1 = "Turning Air",
  title2 = "into Stone",
  subtitle = "Corbent is developing container-sized 'carbon vacuums' that capture CO₂ from the air using 90% less energy than conventional methods.",
}: {
  badge?: string
  title1?: string
  title2?: string
  subtitle?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background dark:bg-[#030303]"> {/* Use theme background */}
      {/* Grid background from v0 example */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Glow effects from v0 example */}
      <div className="absolute -bottom-16 -right-16 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-50 md:h-[500px] md:w-[500px] md:opacity-70"></div>
      <div className="absolute -top-16 -left-16 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl opacity-50 md:h-[500px] md:w-[500px] md:opacity-70"></div>
      
      {/* Existing adjusted gradients to primary (Teal) and secondary (Coral) - might need z-index adjustment if it should be on top of grid/glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-secondary/[0.05] blur-3xl dark:from-primary/[0.03] dark:to-secondary/[0.03]" />

      <div className="absolute inset-0 overflow-hidden"> {/* This container for ElegantShapes might need a z-index if shapes should be above grid/glows but below content */}
        {/* Shapes using primary (Teal) and secondary (Coral) with some neutral grays */}
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-primary/[0.15] dark:from-primary/[0.1]" // Teal
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-secondary/[0.15] dark:from-secondary/[0.1]" // Coral
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-foreground/[0.08] dark:from-white/[0.05]" // Neutral dark/light gray
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-primary/[0.1] dark:from-primary/[0.07]" // Lighter Teal
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-secondary/[0.1] dark:from-secondary/[0.07]" // Lighter Coral
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/[0.03] dark:bg-white/[0.03] border border-foreground/[0.08] dark:border-white/[0.08] mb-8 md:mb-12"
          >
            {/* Placeholder for Corbent Logo - MountainIcon for now */}
            {/* <Image src="/corbent-logo-mark.svg" alt="Corbent Logo" width={20} height={20} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
            <span className="text-sm text-foreground/60 dark:text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight text-foreground dark:text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80 dark:from-white dark:to-white/80 font-sans">{title1}</span> {/* Using font-sans for first part */}
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary dark:from-primary dark:via-teal-400 dark:to-secondary", // Corbent colors
                  "font-serif" // Using font-serif (Charter) for the second part
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-white/50 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 dark:from-[#030303] dark:via-transparent dark:to-[#030303]/80 pointer-events-none" />
    </div>
  )
}
