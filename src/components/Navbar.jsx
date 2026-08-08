export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-outline-variant/30 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-20">

        {/* Logo */}
        <a
          href="#"
          className="font-headline text-2xl tracking-tight text-primary md:text-3xl"
        >
          Brega Perfumería
        </a>

        {/* Navegación */}
        <div className="hidden items-center gap-8 md:flex">
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

          <a
            href="#perfumeros"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            Perfumeros
          </a>
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-5 text-primary md:gap-6">

          {/* Buscador */}
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

        </div>
      </div>
    </nav>
  )
}