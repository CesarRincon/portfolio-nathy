import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  console.log("isDesktop", isDesktop, mounted);
  useEffect(() => {
    if ((!mounted, !isDesktop)) return;

    if (textRef.current && containerRef.current && bgRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 0, height: "100%" },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" },
      );

      gsap.fromTo(
        bgRef.current,
        {
          clipPath: isDesktop
            ? "ellipse(0% 0% at 70% 50%)"
            : "inset(0% 0% 90% 0%)",
        },
        {
          clipPath: isDesktop
            ? "ellipse(70% 80% at 70% 50%)"
            : "inset(0% 0% 0% 0%)", // equivale a none
          duration: 1.5,
          ease: "power3.inOut",
          delay: 0.3,
        },
      );
    }
  }, [mounted]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className={
        mounted
          ? "relative clear-both float-left w-full min-h-screen overflow-hidden flex items-center justify-center lg:px-8 bg-white"
          : "relative clear-both float-left w-full min-h-screen overflow-hidden flex items-center justify-center lg:px-8 bg-white opacity-0"
      }
    >
      <div
        ref={textRef}
        className="flex h-[100%] w-full lg:w-1/2 sm:justify-center sm:items-center flex-col z-10 bg-black lg:bg-white opacity-90 absolute top-0 left-0 right-0 bottom-0 pl-8"
      >
        <h3
          className="text-3xl md:text-5xl font-bold text-white lg:text-black mt-50 lg:mt-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <span
            className="mr-2 text-transparent"
            style={{
              WebkitTextStroke: isDesktop ? "1px black" : "1px white",
            }}
          >
            Nathalia
          </span>
          Mendez
        </h3>
        <p className="text-xl text-white sm:text-gray-600 mb-8">
          Comunicadora Social & Creadora de contenido
        </p>
        <a
          href="#contact"
          className="inline-block text-white lg:text-black border border-white lg:border-black px-8 py-3 rounded hover:bg-black hover:text-white transition w-[40%] text-center md:w-[50%]"
        >
          Escribeme
        </a>
      </div>

      <div
        ref={bgRef}
        className="h-[100%] lg:h-[100%] w-full lg:w-1/2 absolute top-0 right-0 bottom-0"
        style={{
          clipPath: isDesktop ? "ellipse(70% 80% at 70% 50%)" : "none",
        }}
      >
        <div
          className="
            absolute inset-0 
            bg-[url('https://shanereact.ibthemespro.com/img/slider/2.jpg')]
            bg-center 
            bg-no-repeat
            bg-cover
          "
        ></div>
      </div>
    </section>
  );
};
