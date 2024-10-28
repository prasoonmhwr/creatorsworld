'use client'
import Link from "next/link";
import { Canvas } from '@react-three/fiber'
import Experience from "../ui/ThreeDExperience";
import { useEffect, useState } from "react";

const Hero = () => {
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

  // Update canvas height when the window is resized
  useEffect(() => {
      const handleResize = () => {
          setCanvasHeight(window.innerHeight);
          setCanvasWidth(window.innerWidth)
      };
      window.addEventListener('resize', handleResize);
      // Cleanup listener on unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark w-full h-full "
      >
        <div className=" relative">
          <Canvas shadows camera={ { fov: 30, near: 0.1, far: 500, position: [ 0, 7, 25 ] } } style={{ height: canvasHeight , width: canvasWidth}}>
            <Experience />
          </Canvas>
          <div className="container max-w-[1252px]">
          <div className=" flex flex-wrap absolute z-1 top-8 pt-[120px]   md:pt-[150px]  xl:pt-[180px]  2xl:pt-[440px] ">
            <div className="w-full max-w-[1252px] px-4">
              <div className=" max-w-[550px] text-left">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white md:text-3xl sm:leading-tight lg:text-7xl md:leading-tight text-left">
                Revolutionize Your Creator Journey
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl text-left">
                Turn your video content into compelling blog posts instantly. Break content boundaries, reach new audiences, and scale your influence without the extra hours.
                </p>
                <div className="flex flex-col items-center justify-left space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get Pro
                  </Link>

                  <Link
                    href="https://github.com/krishhh16/DevWare"
                    className="inline-block px-8 py-4 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    Star on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
       
      
      </section>
    </>
  );
};

export default Hero;
