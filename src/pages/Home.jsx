import React from "react";
import CardAboutUs from "../component/CardAboutUs";

function Home() {
  return (
    <>
      <header
        id="main-header"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#inicio"
            className="text-3xl font-black text-white tracking-wider hover:text-accent-pink transition-colors duration-200"
          >
            SKYRED
          </a>

          <div className="hidden md:flex space-x-8">
            <a
              href="#sobre-nosotros"
              className="text-white hover:text-accent-gold transition-colors duration-200"
            >
              Sobre Nosotros
            </a>
            <a
              href="#galeria"
              className="text-white hover:text-accent-gold transition-colors duration-200"
            >
              Galería
            </a>
            <a
              href="#equipo"
              className="text-white hover:text-accent-gold transition-colors duration-200"
            >
              Equipo
            </a>
            <a
              href="#contacto"
              className="text-white hover:text-accent-gold transition-colors duration-200"
            >
              Contacto
            </a>
          </div>

          <div className="md:hidden">
            <button id="mobile-menu-btn" className="text-white">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className="hidden md:hidden bg-text-dark/90 backdrop-blur-lg"
        >
          <a
            href="#sobre-nosotros"
            className="block text-white text-center py-3 hover:bg-accent-gold hover:text-text-dark transition-colors duration-200"
          >
            Sobre Nosotros
          </a>
          <a
            href="#galeria"
            className="block text-white text-center py-3 hover:bg-accent-gold hover:text-text-dark transition-colors duration-200"
          >
            Galería
          </a>
          <a
            href="#equipo"
            className="block text-white text-center py-3 hover:bg-accent-gold hover:text-text-dark transition-colors duration-200"
          >
            Equipo
          </a>
          <a
            href="#contacto"
            className="block text-white text-center py-3 hover:bg-accent-gold hover:text-text-dark transition-colors duration-200"
          >
            Contacto
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="h-screen flex items-center justify-center relative bg-black"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://placehold.co/1920x1080/211e1e/f3f3f3?text=Foto+Hero+Impresionante"
            alt="Fotografía de portada"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white hover:text-accent-pink transition-colors duration-200 mb-4">
            SKYRED
          </h1>
          <p className="text-xl md:text-3xl font-light text-bg-light">
            El arte la imagen.
          </p>
        </div>

        <a
          href="#sobre-nosotros"
          className="absolute z-10 bottom-10 text-accent-gold animate-bounce"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </section>

      <section id="sobre-nosotros" className="py-24 px-6">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <CardAboutUs
              imagen="https://placehold.co/400x400/555/eee?text=Javier+Cruz"
              nombre="Javier Cruz"
              linkIzq="https://www.linkedin.com/in/javier-cruz-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-z/"
              linkDer="https://github.com/jcruz"
            />
            <CardAboutUs
              imagen="https://placehold.co/400x400/555/eee?text=Daniel+Landa"
              nombre="Daniel Landa"
              linkIzq="https://www.linkedin.com/in/daniel-landa-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-z/"
              linkDer="https://github.com/daniellanda"
            />
            <CardAboutUs
              imagen="https://placehold.co/400x400/555/eee?text=Roberto+Medina"
              nombre="Roberto Medina"
              linkIzq="https://www.linkedin.com/in/roberto-medina-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-z/"
              linkDer="https://github.com/robertomedina"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg md:text-xl text-text-dark/80 leading-relaxed mb-4">
              Somos un proyecto creado el 8 de noviembre del 2025 en Cuba,
              compuesto por artistas visuales con más de 6 años de experiencia
              en fotografía, diseño gráfico, filmaking, programación y
              marketing.
            </p>
            <p className="text-lg md:text-xl text-text-dark/80 leading-relaxed">
              Actualmente radicamos en La Habana. Contamos con miembros
              cualificados para asesorar sobre el recorrido en redes sociales y
              el mejoramiento de la imagen tanto de tu empresa como de tu marca
              personal.
            </p>
          </div>
        </div>
      </section>

      <section
        id="galeria"
        className="py-24 bg-text-dark text-bg-light overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Nuestro Enfoque
          </h2>
          <p className="text-lg md:text-xl text-bg-light/80 max-w-2xl mx-auto">
            No solo capturamos momentos, creamos visiones. (Desliza para ver)
          </p>
        </div>

        <div
          id="gallery-container"
          className="gallery-container flex items-center space-x-4 md:space-x-8 overflow-x-auto snap-x snap-mandatory py-12 px-4 md:px-8 lg:px-24"
        >
          <img
            src="https://placehold.co/600x800/555/eee?text=Foto+Galer%EDa+1"
            alt="Foto de galería 1"
            className="gallery-item w-64 md:w-80 lg:w-96 h-auto rounded-lg snap-center"
          />
          <img
            src="https://placehold.co/600x800/666/eee?text=Foto+Galer%EDa+2"
            alt="Foto de galería 2"
            className="gallery-item w-64 md:w-80 lg:w-96 h-auto rounded-lg snap-center"
          />
          <img
            src="https://placehold.co/600x800/777/eee?text=Foto+Galer%EDa+3"
            alt="Foto de galería 3"
            className="gallery-item w-64 md:w-80 lg:w-96 h-auto rounded-lg snap-center focused"
          />
          <img
            src="https://placehold.co/600x800/888/eee?text=Foto+Galer%EDa+4"
            alt="Foto de galería 4"
            className="gallery-item w-64 md:w-80 lg:w-96 h-auto rounded-lg snap-center"
          />
          <img
            src="https://placehold.co/600x800/999/eee?text=Foto+Galer%EDa+5"
            alt="Foto de galería 5"
            className="gallery-item w-64 md:w-80 lg:w-96 h-auto rounded-lg snap-center"
          />
          <img
            src="https://placehold.co/600x800/aaa/eee?text=Foto+Galer%EDa+6"
            alt="Foto de galería 6"
            className="gallery-item w-64 md:w-80 lg:w-96 h-auto rounded-lg snap-center"
          />
        </div>
      </section>

      <section id="equipo" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img
              src="https://placehold.co/700x500/211e1e/f3f3f3?text=Canon+R50V"
              alt="Cámara Canon R50V"
              className="rounded-lg shadow-xl w-full max-w-lg"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Nuestros Equipos
            </h2>
            <p className="text-lg md:text-xl text-text-dark/80 leading-relaxed mb-8">
              La <span className="font-bold text-text-dark">Canon R50V</span>,
              lanzada en el 2025, es el corazón de nuestro estudio. Confiamos en
              la mejor tecnología para garantizar la máxima calidad.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center group">
                <span className="text-accent-gold mr-3">►</span>
                <span className="text-xl text-text-dark/90 group-hover:text-accent-pink transition-colors duration-200">
                  Sensor APS-C de 24.2 MPX
                </span>
              </li>
              <li className="flex items-center group">
                <span className="text-accent-gold mr-3">►</span>
                <span className="text-xl text-text-dark/90 group-hover:text-accent-pink transition-colors duration-200">
                  Rendimiento superior en baja iluminación
                </span>
              </li>
              <li className="flex items-center group">
                <span className="text-accent-gold mr-3">►</span>
                <span className="text-xl text-text-dark/90 group-hover:text-accent-pink transition-colors duration-200">
                  Video 4K a 60FPS (sobresampleado de 6K)
                </span>
              </li>
              <li className="flex items-center group">
                <span className="text-accent-gold mr-3">►</span>
                <span className="text-xl text-text-dark/90 group-hover:text-accent-pink transition-colors duration-200">
                  Grabación C-Log 3 a 10-bit 4:2:2 (H.265)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="contacto" className="py-24 px-6 bg-gray-200/60">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            ¿Hacemos tu proyecto realidad?
          </h2>
          <p className="text-lg md:text-xl text-text-dark/80 max-w-xl mx-auto mb-12">
            Ponte en contacto con nosotros. Estamos listos para llevar tu marca
            al siguiente nivel.
          </p>

          <form action="#" method="POST" className="space-y-6 text-left">
            <div>
              <label
                forHtml="name"
                className="block text-sm font-bold text-text-dark/80 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold outline-none"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label
                forHtml="email"
                className="block text-sm font-bold text-text-dark/80 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold outline-none"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label
                forHtml="message"
                className="block text-sm font-bold text-text-dark/80 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold outline-none"
                placeholder="Cuéntanos sobre tu idea..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-accent-gold text-text-dark text-lg font-bold rounded-lg shadow-lg
                                             hover:bg-accent-pink hover:text-white hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-text-dark text-bg-light py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <a
            href="#inicio"
            className="text-3xl font-black text-white tracking-wider mb-4 inline-block"
          >
            DIGNITAS
          </a>
          <p className="text-bg-light/70 mb-6">
            Creado en Cuba. Radicado en La Habana.
          </p>

          <p className="text-sm text-bg-light/50">
            © 2025 SkyRed. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
