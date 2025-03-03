import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-[var(--font-geist-sans)]`}>
      <header className="sticky top-0 z-10 border-b border-yellow-100 bg-white/80 backdrop-blur-sm w-full">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <span className="text-yellow-500">Porta</span>
            <span className="text-gray-800">folio</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-yellow-500 transition-colors">
              Sobre mí
            </a>
            <a href="#projects" className="text-gray-600 hover:text-yellow-500 transition-colors">
              Proyectos
            </a>
            <a href="#skills" className="text-gray-600 hover:text-yellow-500 transition-colors">
              Habilidades
            </a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-500 transition-colors">
              Contacto
            </a>
          </nav>
          <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-50 px-4 py-2 rounded-md transition-colors">
            Descargar CV
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="container py-20 md:py-32 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Hola, soy <span className="text-yellow-500">Lizbeth Rebolledo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-md">
              Desarrolladora web especializado en crear experiencias digitales elegantes y funcionales, Experta en Backend.
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md flex items-center transition-colors">
                Ver proyectos <FiArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-50 px-4 py-2 rounded-md transition-colors">
                Contactar
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                <FiGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                <FiMail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow-100 overflow-hidden border-4 border-yellow-200">
              <Image 
                src="/placeholder.svg" 
                alt="Tu foto" 
                width={320}
                height={320}
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}