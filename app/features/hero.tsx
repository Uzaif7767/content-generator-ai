"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full pt-10 md:pt-16 pb-10 relative">
      {/* Header with Centered Logo */}
      <header className="absolute top-0 left-0 w-full py-4 flex justify-center items-center bg-transparent">
        <Image src="/logo.png" width={300} height={140} alt="Logo" priority />
      </header>
      
      {/* Hero Content */}
      <div className="space-y-6 text-center mt-16">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            AI-Powered Content Generation
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl font-medium">
            Generate high-quality, engaging content instantly with the power of AI.
            Let automation boost your creativity and productivity.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
        <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="animate-bounce h-11 mt-5 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Start Creating <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
        </div>
        <div className="hero-image-wrapper mt-20 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner1.avif"
              width={1280}
              height={720}
              alt="AI Content Generator Banner"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
