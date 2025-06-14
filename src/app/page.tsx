"use client"
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen w-full font-sans">
      {/* HEADER sticky */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
          <h1 className="text-2xl font-bold">Tu Nombre</h1>
          <nav className="flex gap-6 text-gray-800">
            <Link href="#home" className="hover:text-indigo-600">Home</Link>
            <Link href="#about" className="hover:text-indigo-600">About</Link>
            <Link href="#services" className="hover:text-indigo-600">Services</Link>
            <Link href="#portfolio" className="hover:text-indigo-600">Portfolio</Link>
            <Link href="#contact" className="hover:text-indigo-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div>

        {/* HERO */}
        <section id="home" className="h-screen min-h-screen flex items-center px-8 bg-white" style={{
          clear: 'both',
          float: 'left',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
        }}>
          <div className="flex h-[100%] w-1/2 justify-center items-center flex-col">
            <h3 className="text-5xl font-bold text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="mr-2 text-transparent" style={{ WebkitTextStroke: '1px black' }}>Nathalia</span>
              Mendez
            </h3>
            <p className="text-2xl text-gray-600 mb-8">Comunicadora Social & Creadora de contenido</p>
            <a href="#contact" className="inline-block text-black border border-black px-8 py-3 rounded hover:bg-black hover:text-white transition">Hire Me</a>
          </div>
          <div className="h-[100%] w-1/2 bg-red-500" style={{
            clipPath: 'ellipse(70% 80% at 70% 50%)',
            bottom: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50%'
          }}>
            <div style={{ backgroundImage: "url(https://shanereact.ibthemespro.com/img/slider/2.jpg)", backgroundPosition: "50%", backgroundRepeat: "no-repeat", backgroundSize: 'cover', left: 0, bottom: 0, position: 'absolute', right: 0, top: 0 }}></div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="h-screen w-full bg-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 mx-auto">
          <div className="shadow-2xl rounded-lg overflow-hidden">
            <img
              src={'https://shanereact.ibthemespro.com/img/about/2.jpg'}
              alt="Profile"
              width={510}
              height={510}
              style={{ boxShadow: '0 0 40px rgba(0, 0, 0, .2)' }}
            />
          </div>

          {/* Texto */}
          <div className="max-w-xl">
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 mb-4 uppercase text-sm font-semibold">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Creadora de contenido &amp; Comunicadora social
            </h2>
            <p className="text-gray-600 mb-6 text-justify">
              Comunicadora social en formación, actualmente en sexto semestre, con enfoque en comunicación digital y gestión de redes sociales. Me he desempeñado como community manager, creando contenido estratégico, visualmente atractivo y orientado a resultados. Manejo herramientas como Adobe Photoshop, Premiere Pro, Audition, After Effects, CapCut y Canva para diseño gráfico, edición de video y audio. Además, cuento con experiencia en la gestión y análisis de redes sociales mediante Meta Business Suite y Metricool. Me destaco por mi creatividad, pensamiento visual, redacción persuasiva y capacidad para conectar marcas con su audiencia de forma auténtica y efectiva.
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition"
            >
              Download CV
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-32 px-8 border-t border-gray-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "UI/UX Design", desc: "Clean and minimal interfaces that delight users." },
                { title: "Web Development", desc: "High quality websites with responsive layouts." },
                { title: "Branding", desc: "Create a unique brand identity for your business." },
              ].map((s, i) => (
                <div key={i} className="border border-gray-300 p-6 hover:bg-gray-50 transition">
                  <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="py-32 px-8 border-t border-gray-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Portfolio</h2>
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
          © {new Date().getFullYear()} Tu Nombre — All rights reserved.
        </footer>
      </div>
    </main>
  );
}
