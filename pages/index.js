import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiCode,
  FiPenTool,
  FiBriefcase,
} from "react-icons/fi";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100 transform transition-transform duration-300 hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ name, description, technologies, image }) {
  return (
    <div className="overflow-hidden group bg-white rounded-lg shadow-sm border border-yellow-100 transform transition-transform duration-300 hover:scale-105">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800">{name}</h3>
          <div className="flex gap-2">
            <a
              href="#"
              className="text-gray-500 hover:text-yellow-500 transition-colors"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-yellow-500 transition-colors"
            >
              <FiExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-[var(--font-geist-sans)]`}
    >
      <header className="sticky top-0 z-10 border-b border-yellow-100 bg-white/80 backdrop-blur-sm w-full transform transition-transform duration-300 hover:scale-105">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <span className="text-yellow-500">Porta</span>
            <span className="text-gray-800">folio</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-yellow-500 transition-colors scroll-smooth"
            >
              Sobre mí
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-yellow-500 transition-colors scroll-smooth"
            >
              Proyectos
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-yellow-500 transition-colors scroll-smooth"
            >
              Habilidades
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-yellow-500 transition-colors scroll-smooth"
            >
              Contacto
            </a>
          </nav>
          <a
            href="/CV_Lizbeth.pdf"
            download
            className="border border-yellow-500 text-yellow-500 hover:bg-yellow-50 px-4 py-2 rounded-md transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </header>

      <main className="w-full min-h-screen px-4 py-8 bg-yellow-50">
        <section className="pl-20 max-w-7xl mx-auto py-20 md:py-32 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Hola, soy{" "}
              <span className="text-yellow-500">Lizbeth Rebolledo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-md">
              Desarrolladora web especializado en crear experiencias digitales
              elegantes y funcionales, Experta en Backend y componentes electronicos.
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
              <a
                href="https://github.com/Lixxth"
                className="text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/lizbeth-guadalupe-hern%C3%A1ndez-rebolledo-09194a197/"
                className="text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a
                href=""
                className="text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <FiMail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80 md:w-80 md:h-80 rounded-full bg-yellow-100 overflow-hidden border-4 border-yellow-200 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/Fotos/lizprogramadora.jpg"
                alt="Tu foto"
                width={520}
                height={520}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className="pl-20 py-20 bg-yellow-50 animate-fade-in">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Sobre <span className="text-yellow-500">Mí</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  Soy un desarrolladora web apasionado por crear soluciones
                  digitales con especialidad en Backend. Tambine cuento con
                  experiencia en diseño y desarrollo frontend, me especializo en
                  construir interfaces intuitivas y atractivas. Ademas de dar un
                  correcto funcionamiento a las bases de datos y manejo de
                  informacvion.
                </p>
                <p className="text-gray-600 mb-4">
                  Mi enfoque combina creatividad y precisión técnica para
                  entregar proyectos que no solo se ven bien, sino que también
                  funcionan perfectamente. Tanto en desarrollo como en componentes electronicos como arduino y ESP32, Siempre estoy aprendiendo nuevas
                  tecnologías y mejorando mis habilidades. 
                </p>
                <div className="mt-6">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white w-40 h-16 rounded-xl">
                    Más sobre mí
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100 transform transition-transform duration-300 hover:scale-105">
                  <h3 className="font-bold text-xl mb-2 text-yellow-500">
                    Educación
                  </h3>
                  <p className="text-gray-600">
                    Estudiante reconocida de 8to semestre en el Tecnologico II
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100 transform transition-transform duration-300 hover:scale-105">
                  <h3 className="font-bold text-xl mb-2 text-yellow-500">
                    Experiencia
                  </h3>
                  <p className="text-gray-600">
                    Desarroladora Fulstack en Case
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100 transform transition-transform duration-300 hover:scale-105">
                  <h3 className="font-bold text-xl mb-2 text-yellow-500">
                    Experiencia
                  </h3>
                  <p className="text-gray-600">Colaboradora en Molusco</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100 transform transition-transform duration-300 hover:scale-105">
                  <h3 className="font-bold text-xl mb-2 text-yellow-500">
                    Experiencia
                  </h3>
                  <p className="text-gray-600">
                    Participe y conclui el programa Oracle Next Education F2 T7
                    Back-end
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100 transform transition-transform duration-300 hover:scale-105">
                  <h3 className="font-bold text-xl mb-2 text-yellow-500">
                    Ubicación
                  </h3>
                  <p className="text-gray-600">Chihuahua, Mexico</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100 transform transition-transform duration-300 hover:scale-105">
                  <h3 className="font-bold text-xl mb-2 text-yellow-500">
                    Intereses
                  </h3>
                  <p className="text-gray-600">
                    Diseño, Tecnología, Videojuegos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="pl-20 py-20 animate-fade-in">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Mis <span className="text-yellow-500">Proyectos</span>
            </h2>

            <div className="w-full">
              <div className="flex justify-center mb-8">
                <div className="bg-yellow-50 p-1 rounded-full">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeTab === "all"
                        ? "bg-white text-gray-800"
                        : "text-gray-600 hover:text-yellow-500"
                    }`}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => setActiveTab("web")}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeTab === "web"
                        ? "bg-white text-gray-800"
                        : "text-gray-600 hover:text-yellow-500"
                    }`}
                  >
                    Web
                  </button>
                  <button
                    onClick={() => setActiveTab("design")}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeTab === "design"
                        ? "bg-white text-gray-800"
                        : "text-gray-600 hover:text-yellow-500"
                    }`}
                  >
                    Diseño
                  </button>
                  <button
                    onClick={() => setActiveTab("app")}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeTab === "app"
                        ? "bg-white text-gray-800"
                        : "text-gray-600 hover:text-yellow-500"
                    }`}
                  >
                    Apps
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeTab === "all" &&
                  [
                    {
                      name: "CASE CMR",
                      description: "Sofware de lamdas remotas desentralizado para secretarias de abogados",
                      technologies: [ "Next.js", "Tailwind","MongoDB"],
                      image: "/Proyectos/casecmr.png",
                    },
                    {
                      name: "Pagina web de Case CMR",
                      description: "Pagina web de case cmr para la venta dels sofware y contacto con el cliente",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/casecmr.png",
                    },
                    {
                      name: "Michimemo",
                      description: "Aplicacion progresive web app, de recordatorios de tareas",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/michimemo..png",
                    },
                    {
                      name: "Molusco",
                      description: "Colaboradora de molusco",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/molusco.jpg",
                    },
                    {
                      name: "Kirabelak",
                      description: "Desarrollo de pagina web para kirabelak hecha por y para fotografos",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/kirabel.png",
                    },
                    {
                      name: "1 2 3 signans",
                      description: "Aplicacion movil para traducir lenguahe de señas a texto",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/123.png",
                    },
                  ].map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                {activeTab === "web" &&
                  [
                    {
                      name: "Pagina web de Case CMR",
                      description: "Pagina web de case cmr para la venta dels sofware y contacto con el cliente",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/casecmr.png",
                    },
                    {
                      name: "Michimemo",
                      description: "Aplicacion progresive web app, de recordatorios de tareas",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/michimemo..png",
                    },
                    {
                      name: "Paysol",
                      description: "Pagina web desentralizada que ayudaba a pagos con criptomonedas y split de cuentas",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/paysol.png",
                    },
                  ].map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                {activeTab === "design" &&
                  [
                    {
                      name: "Pagina web de Case CMR",
                      description: "Pagina web de case cmr para la venta dels sofware y contacto con el cliente",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/casecmr.png",
                    },
                    {
                      name: "Michimemo",
                      description: "Aplicacion progresive web app, de recordatorios de tareas",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/michimemo..png",
                    },
                    {
                      name: "Kirabelak",
                      description: "Desarrollo de pagina web para kirabelak hecha por y para fotografos",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/kirabel.png",
                    },
                  ].map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                {activeTab === "app" &&
                  [
                    {
                      name: "Michimemo",
                      description: "Aplicacion progresive web app, de recordatorios de tareas",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/michimemo..png",
                    },
                    {
                      name: "1 2 3 signans",
                      description: "Aplicacion movil para traducir lenguahe de señas a texto",
                      technologies: ["React", "Next.js", "Tailwind"],
                      image: "/Proyectos/123.png",
                    },
                  ].map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="pl-20 py-20 bg-yellow-50 animate-fade-in">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Mis <span className="text-yellow-500">Habilidades</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCard
                icon={<FiCode className="h-8 w-8 text-yellow-500" />}
                title="Desarrollo Frontend"
                skills={[
                  "HTML/CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                ]}
              />

              <SkillCard
                icon={<FiCode className="h-8 w-8 text-yellow-500" />}
                title="Desarrollo Backend"
                skills={[
                  "HTML/CSS",
                  "JavaScript",
                  "Sprintboot",
                  "Progress",
                  "MySql",
                  "MongoDB",
                  "Node.js",
                  "Express", 
                  "Java",
                  "Python",
                ]}
              />

              <SkillCard
                icon={<FiPenTool className="h-8 w-8 text-yellow-500" />}
                title="Diseño UI/UX"
                skills={[
                  "Figma",
                  "Adobe XD",
                  "Diseño Responsivo",
                  "Prototipado",
                  "Wireframing",
                ]}
              />

              <SkillCard
                icon={<FiBriefcase className="h-8 w-8 text-yellow-500" />}
                title="Otras Habilidades"
                skills={[
                  "Git/GitHub",
                  "SEO",
                  "Optimización Web",
                  "Accesibilidad",
                  "Testing",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pl-20 animate-fade-in">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              <span className="text-yellow-500">Contacta</span> Conmigo
            </h2>

            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Información de Contacto
                  </h3>
                  <p className="text-gray-600">
                    ¿Tienes un proyecto en mente o simplemente quieres charlar?
                    No dudes en contactarme.
                  </p>

                  <div className="flex items-center gap-3 text-gray-600">
                    <FiMail className="h-5 w-5 text-yellow-500" />
                    <span>Lizbeth78765@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <FiLinkedin className="h-5 w-5 text-yellow-500" />
                    <span>linkedin.com/in/lizbeth-guadalupe-hernández-rebolledo</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <FiGithub className="h-5 w-5 text-yellow-500" />
                    <span>github.com/Lixxth</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="tuemail@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Tu mensaje..."
                    ></textarea>
                  </div>

                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors">
                    Enviar Mensaje
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-xl">
                <span className="text-yellow-400">Porta</span>
                <span className="text-white">folio</span>
              </div>
              <p className="text-gray-400 mt-2">
                © {new Date().getFullYear()} Todos los derechos reservados hecho con ❤️ por Lizbeth Rebolledo
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/Lixxth"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/lizbeth-guadalupe-hern%C3%A1ndez-rebolledo-09194a197/"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <FiMail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
