"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonToggle } from "./components/Header/ButtonToggle";


export default function Home() {


  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkSize = () => setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    checkSize();

    window.addEventListener("resize", checkSize);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkSize);
    }
  }, []);

  return (
    <main className="min-h-screen w-full font-sans">
      {/* HEADER sticky */}
      <header className={`block lg:fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-white shadow-md  ${isScrolled ? "bg-white lg:shadow-md" : "lg:bg-transparent lg:shadow-none"
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
          <h1 className="text-2xl font-bold text-black">Nathalia Mendez</h1>
          <ButtonToggle isOpen={isOpen} setIsOpen={setIsOpen} color={'#000'} className='lg:hidden' />

          <nav className="flex gap-6 text-black hidden lg:flex">
            <Link href="#home" className="hover:text-indigo-600">Home</Link>
            <Link href="#about" className="hover:text-indigo-600">Sobre mi</Link>
            <Link href="#services" className="hover:text-indigo-600">Servicios</Link>
            <Link href="#portfolio" className="hover:text-indigo-600">Portafolio</Link>
            <Link href="#contact" className="hover:text-indigo-600">Contacto</Link>
          </nav>
        </div>
        {/* <MenuToggle isOpen={isOpen} /> */}

        <div className="fixed bg-black z-50 w-full">
          <div className={`fixed top-0 left-0 h-full w-full bg-black shadow flex items-center justify-center opacity-98 transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <ButtonToggle isOpen={isOpen} setIsOpen={setIsOpen} color={"#fff"} style={{ position: 'absolute', top: 15, right: 15 }} />
            <ul className="flex flex-col gap-4 text-white font-semibold text-2xl">
              <Link href="#home" className="hover:text-indigo-600">Home</Link>
              <Link href="#about" className="hover:text-indigo-600">Sobre mi</Link>
              <Link href="#services" className="hover:text-indigo-600">Servicios</Link>
              <Link href="#portfolio" className="hover:text-indigo-600">Portafolio</Link>
              <Link href="#contact" className="hover:text-indigo-600">Contacto</Link>
            </ul>
          </div>
        </div>
        {/* )} */}
      </header>

      {/* MAIN CONTENT */}
      <div>

        {/* HERO */}
        <section id="home" className="h-[70%] lg:h-screen lg:min-h-screen flex items-center justify-center lg:px-8 bg-white"
          style={{
            clear: 'both',
            float: 'left',
            height: '70vh',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
          }}
        >
          <div className="flex h-[100%] w-full lg:w-1/2 sm:justify-center sm:items-center flex-col z-10 bg-black opacity-80 absolute top-0 left-0 right-0 bottom-0 pl-8">
            <h3
              className="text-3xl sm:text-5xl font-bold text-white sm:text-black mt-50"
              style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="mr-2 text-transparent" style={{ WebkitTextStroke: isDesktop ? '1px black' : '1px white' }}>Nathalia</span>
              Mendez
            </h3>
            <p className="text-xl text-white sm:text-gray-600 mb-8">Comunicadora Social & Creadora de contenido</p>
            <a href="#contact" className="inline-block text-black border border-black px-8 py-3 rounded hover:bg-black hover:text-white transition">Escribeme</a>
          </div>
          <div className="h-[100%] lg:h-[100%] w-full lg:w-1/2 absolute top-0 right-0 bottom-0 bg-red-500" style={{
            clipPath: isDesktop ? "ellipse(70% 80% at 70% 50%)" : "none",
          }}>
            <div
              // style={{ backgroundImage: "url(https://shanereact.ibthemespro.com/img/slider/2.jpg)", backgroundPosition: "50%", backgroundRepeat: "no-repeat", backgroundSize: 'cover', left: 0, bottom: 0, position: 'absolute', right: 0, top: 0 }}
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

        {/* ABOUT */}
        <section
          className=""
        // className="h-screen w-full bg-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 mx-auto"
        >
          <div
            // className="shadow-2xl rounded-lg overflow-hidden w-full h-[700px]"
            // style={{ height: '70px' }}
            className="flex w-full h-[510px] md:h-[510px] lg:h-[510px] xl:h-[510px] 2xl:h-[510px] md:mb-0 pt-2 flex justify-center items-center"
          >
            <img
              src={'https://shanereact.ibthemespro.com/img/about/2.jpg'}
              alt="Profile"
              style={{ boxShadow: isDesktop ? '0 0 40px rgba(0, 0, 0, .2)' : '' }}
              className="h-[90%] w-[90%] object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex-col max-w-xl justify-center items-center px-8 pb-8">
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 mb-4 uppercase text-sm font-semibold">
              Sobre mi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center">
              Creadora de contenido &amp; Comunicadora social
            </h2>
            <p className="text-gray-600 mb-6 text-justify">
              Comunicadora social en formación, actualmente en sexto semestre, con enfoque en comunicación digital y gestión de redes sociales. Me he desempeñado como community manager, creando contenido estratégico, visualmente atractivo y orientado a resultados. Manejo herramientas como Adobe Photoshop, Premiere Pro, Audition, After Effects, CapCut y Canva para diseño gráfico, edición de video y audio. Además, cuento con experiencia en la gestión y análisis de redes sociales mediante Meta Business Suite y Metricool. Me destaco por mi creatividad, pensamiento visual, redacción persuasiva y capacidad para conectar marcas con su audiencia de forma auténtica y efectiva.
            </p>
            <a
              href="#"
              className="block bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition text-center"
            >
              Descargar CV
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-8 px-8 bg-[#F9F9F9] flex items-center justify-center">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold mb-12 text-black">Servicios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Fotografía y Filmación",
                  desc: "Capturo momentos auténticos y creo piezas audiovisuales que transmiten emociones y cuentan historias impactantes.",
                  mediaType: "video",
                  src: "/videos/filmmaker.mp4"

                },
                {
                  title: "Gestión de Redes Sociales",
                  desc: "Estrategias digitales creativas para conectar marcas con su audiencia, generando contenido visual atractivo y resultados medibles.",
                  mediaType: "image",
                  src: "/images/social-media.jpeg"
                },
                {
                  title: "Diseño y Edición Multimedia",
                  desc: "Edición de video y audio con herramientas profesionales para dar vida a ideas de forma dinámica y profesional.",
                  mediaType: "image",
                  src: "/images/edicion-multimedia.jpeg"
                }
              ].map((s, i) => (
                <div key={i} className="border p-6 hover:bg-gray-50 transition rounded-lg" style={{ boxShadow: '0 0 40px rgba(0, 0, 0, .2)' }}>
                  {
                    s.mediaType === "image" ?
                      <img
                        src={s.src}
                        alt={s.title}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      :
                      <video
                        src={s.src}
                        controls
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', height: 'auto' }}
                      />
                  }
                  <h3 className="text-2xl font-semibold mb-4 text-black text-center mt-3 h-15">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="py-32 px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-black">Portfolio</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
                  <img src={`/project${i}.jpg`} alt={`Project ${i}`} className="w-full h-60 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">Project {i}</h3>
                    <p className="text-gray-600 text-sm">Short description of the project.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 px-8 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              I’m currently taking on freelance projects. If you’d like to work together, feel free to drop me a message.
            </p>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="border p-4 rounded" />
              <input type="email" placeholder="Email" className="border p-4 rounded" />
              <textarea rows="5" placeholder="Message" className="border p-4 rounded"></textarea>
              <button type="submit" className="border border-black px-8 py-3 rounded hover:bg-black hover:text-white transition">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-8 py-8 border-t border-gray-200 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} César Rincón — All rights reserved.
        </footer>
      </div >
    </main >
  );
}
