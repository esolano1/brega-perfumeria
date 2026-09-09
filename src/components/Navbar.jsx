import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-outline-variant/30 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-8 px-5 md:px-10 lg:px-16">

        {/* Logo */}
        <Link
        to="/"
        className="flex shrink-0 items-center gap-2 whitespace-nowrap font-headline text-xl tracking-tight text-primary md:text-2xl"
>
       <img
       src={`${import.meta.env.BASE_URL}images/logo.jpg`}
       alt="Logo de Brega Perfumería"
       className="h-10 w-auto"
      />
      Brega Perfumería
     </Link>

        {/* Navegación desktop */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          <a
            href="#catalogo"
            className="border-b border-primary pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary"
          >
            Catálogo
          </a>

          <a
            href="#marcas"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            Marcas
          </a>

          <a
            href="#perfumes"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            Perfumes
          </a>

          <a
            href="#estuches"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            Estuches
          </a>

          <Link
            to="/contact"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            Contacto
          </Link>

 {/*         <a
            href={`${import.meta.env.BASE_URL}contact`}
            className="text-xs font-semibold uppercase tracking-[0.12em] text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            Contacto
          </a>
*/}
        </div>

        {/* Acciones */}
        <div className="ml-auto flex shrink-0 items-center gap-4 text-primary md:gap-6">

          {/* Buscador desktop */}
          <div className="hidden items-center border-b border-outline-variant/50 pb-1 transition-colors focus-within:border-primary lg:flex">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-28 border-none bg-transparent text-xs text-on-surface outline-none transition-all duration-300 placeholder:text-on-surface-variant/50 focus:w-40"
            />

            <span className="material-symbols-outlined text-[21px]">
              search
            </span>
          </div>

          {/* Carrito */}
          <button
            type="button"
            aria-label="Carrito"
            className="border-none bg-transparent p-0 text-primary transition-colors duration-300 hover:text-primary-container"
          >
            <span className="material-symbols-outlined">
              shopping_cart
            </span>
          </button>

          {/* Cuenta */}
          <button
            type="button"
            aria-label="Cuenta"
            className="border-none bg-transparent p-0 text-primary transition-colors duration-300 hover:text-primary-container"
          >
            <span className="material-symbols-outlined">
              person
            </span>
          </button>

          {/* Menú hamburguesa */}
          <button
            type="button"
            aria-label="Menú"
            onClick={() => setMenuOpen(!menuOpen)}
            className="border-none bg-transparent p-0 text-primary md:hidden"
          >
            <span className="material-symbols-outlined text-[28px]">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>

        </div>
      </div>

      {/* Navegación móvil */}
      {menuOpen && (
        <div className="border-t border-outline-variant/30 bg-background px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            <a
              href="#catalogo"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-primary"
            >
              Catálogo
            </a>

            <a
              href="#marcas"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-on-surface-variant"
            >
              Marcas
            </a>

            <a
              href="#perfumes"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-on-surface-variant"
            >
              Perfumes
            </a>

            <a
              href="#estuches"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-on-surface-variant"
            >
              Estuches
            </a>

            <a
              href="#perfumeros"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-on-surface-variant"
            >
              Perfumeros
            </a>

            {/* Buscador móvil */}
            <div className="mt-2 flex items-center border-b border-outline-variant/50 pb-2">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full border-none bg-transparent text-sm text-on-surface outline-none placeholder:text-on-surface-variant/50"
              />

              <span className="material-symbols-outlined text-primary">
                search
              </span>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}