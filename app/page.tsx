import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
       <Header/>
      {/* <ScrollUp /> */}
      <Hero />
       <Features />
      <Pricing />
      {/*<Footer /> */}
    </>
  );
}
