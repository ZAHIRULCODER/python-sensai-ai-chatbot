import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto p-4">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
            Your AI Python Coding Tutor for
            <br />
            Young & Curious Minds
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Learn Python the fun way! Interactive lessons, coding challenges,
            and AI-powered tutoring to spark creativity.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/chat">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="mt-5 md:mt-0">
          <div>
            <Image
              src="/banner-3.jpeg"
              width={1280}
              height={720}
              alt="Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
