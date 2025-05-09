"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { Home, Cpu, Info } from "lucide-react" // Updated icons
import { useTheme } from "next-themes"
import Link from "next/link" // Import Link for navigation
import Image from "next/image" // Import Next.js Image component

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string // Will adapt this later
  iconColor: string // Will adapt this later
}

// Updated menu items for Corbent site
const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "/",
    // Using primary color gradient
    gradient: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.06) 50%, hsl(var(--primary) / 0.0) 100%)",
    iconColor: "text-primary",
  },
  {
    icon: <Cpu className="h-5 w-5" />, // Icon for Technology
    label: "Technology",
    href: "/technology",
     // Using secondary color gradient
    gradient: "radial-gradient(circle, hsl(var(--secondary) / 0.15) 0%, hsl(var(--secondary) / 0.06) 50%, hsl(var(--secondary) / 0.0) 100%)",
    iconColor: "text-secondary",
  },
  {
    icon: <Info className="h-5 w-5" />, // Icon for About
    label: "About",
    href: "/about",
     // Using primary color gradient again for variety
    gradient: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.06) 50%, hsl(var(--primary) / 0.0) 100%)",
    iconColor: "text-primary",
  },
  // Removed Settings and Profile items
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

// Renamed function to V0Navbar
export function V0Navbar() {
  const { theme } = useTheme()

  // const isDarkTheme = theme === "dark"; // Removed as it's unused

  return (
    <motion.nav
      className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden flex items-center" // Added flex items-center
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        // Updated class to use the utility defined in globals.css
        className={`absolute -inset-2 bg-gradient-radial from-transparent to-transparent rounded-3xl z-0 pointer-events-none`}
        variants={navGlowVariants}
      />
      {/* Corbent Logo */}
      <Link href="/" legacyBehavior passHref>
        <a className="mr-4 ml-2 z-10"> {/* Added margin for spacing */}
          <Image src="https://i.ibb.co/bRRTnbZF/corbent-logo.png" alt="Corbent Logo" width={30} height={30} />
        </a>
      </Link>
      <ul className="flex items-center gap-2 relative z-10">
        {menuItems.map((item, _index) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background: item.gradient, // This will be adapted
                  opacity: 0,
                  borderRadius: "16px",
                }}
              />
              {/* Reverting to legacyBehavior with passHref for motion.a */}
              <Link href={item.href} legacyBehavior passHref>
                <motion.a
                  className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                  variants={itemVariants}
                transition={sharedTransition}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
              >
                {/* Adapted icon color class */}
                <span className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}>
                  {item.icon}
                </span>
                  <span>{item.label}</span>
                </motion.a>
              </Link>
              {/* Reverting to legacyBehavior with passHref for motion.a */}
               <Link href={item.href} legacyBehavior passHref>
                <motion.a
                  className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                  variants={backVariants}
                transition={sharedTransition}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
              >
                 {/* Adapted icon color class */}
                <span className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}>
                  {item.icon}
                </span>
                  <span>{item.label}</span>
                </motion.a>
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}