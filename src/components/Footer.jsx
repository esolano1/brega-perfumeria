export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest py-section-gap font-body-md text-body-md text-primary">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-desktop text-center md:grid-cols-12 md:text-left">

        {/* Brand Column */}
        <div className="mb-12 flex flex-col items-center md:col-span-4 md:mb-0 md:items-start">
          <div className="mb-6 font-headline-lg text-headline-lg text-primary">
            Brega Perfumería
          </div>

          <p className="mb-8 max-w-xs font-light text-on-surface-variant">
            Fragancias excepcionales para almas distinguidas.
          </p>

          {/* Redes sociales */}
          <div className="flex space-x-6">
            <a
              className="text-on-surface-variant transition-colors hover:text-primary"
              href="#"
            >
              <span className="material-symbols-outlined">
                photo_camera
              </span>
            </a>

            <a
              className="text-on-surface-variant transition-colors hover:text-primary"
              href="#"
            >
              <span className="material-symbols-outlined">
                qr_code_2
              </span>
            </a>

            <a
              className="text-on-surface-variant transition-colors hover:text-primary"
              href="#"
            >
              <span className="material-symbols-outlined">
                mail
              </span>
            </a>
          </div>
        </div>

        {/* Explorar */}
        <div className="mb-8 md:col-span-2 md:col-start-7 md:mb-0">
          <h4 className="mb-6 font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Explorar
          </h4>

          <ul className="space-y-4">
            <li>
              <a
                className="inline-block text-on-surface-variant transition-all hover:translate-x-1 hover:text-primary"
                href="#catalogo"
              >
                Catálogo
              </a>
            </li>

            <li>
              <a
                className="inline-block text-on-surface-variant transition-all hover:translate-x-1 hover:text-primary"
                href="#marcas"
              >
                Marcas
              </a>
            </li>

            <li>
              <a
                className="inline-block text-on-surface-variant transition-all hover:translate-x-1 hover:text-primary"
                href="#novedades"
              >
                Novedades
              </a>
            </li>
          </ul>
        </div>

        {/* Empresa */}
        <div className="mb-8 md:col-span-2 md:mb-0">
          <h4 className="mb-6 font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Empresa
          </h4>

          <ul className="space-y-4">
            <li>
              <a
                className="inline-block text-on-surface-variant underline decoration-primary/30 transition-all hover:translate-x-1 hover:text-primary"
                href="#"
              >
                Historia
              </a>
            </li>

            <li>
              <a
                className="inline-block text-on-surface-variant underline decoration-primary/30 transition-all hover:translate-x-1 hover:text-primary"
                href="#"
              >
                Sostenibilidad
              </a>
            </li>

            <li>
              <a
                className="inline-block text-on-surface-variant underline decoration-primary/30 transition-all hover:translate-x-1 hover:text-primary"
                href="#"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="md:col-span-2">
          <h4 className="mb-6 font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Legal
          </h4>

          <ul className="space-y-4">
            <li>
              <a
                className="inline-block text-on-surface-variant underline decoration-primary/30 transition-all hover:translate-x-1 hover:text-primary"
                href="#"
              >
                Privacidad
              </a>
            </li>

            <li>
              <a
                className="inline-block text-on-surface-variant underline decoration-primary/30 transition-all hover:translate-x-1 hover:text-primary"
                href="#"
              >
                Términos y Condiciones
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-16 border-t border-outline-variant/10 px-margin-desktop pt-8 text-center">
        <p className="text-sm font-light text-on-surface-variant">
          © 2026 Brega Perfumería. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}