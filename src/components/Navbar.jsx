export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 h-20 w-full bg-white">
      <nav className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-5 md:px-20">
        <div className="flex items-center gap-10">
          <a
            href="#"
            className="font-serif text-2xl font-bold tracking-widest text-black"
          >
            BREGA PERFUMERIA
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#catalogo"
              className="border-b-2 border-[#735c00] pb-1 text-sm font-semibold uppercase tracking-widest text-[#735c00]"
            >
              Catálogo
            </a>

            <a
              href="#marcas"
              className="text-sm font-semibold uppercase tracking-widest text-black transition hover:text-[#735c00]"
            >
              Marcas
            </a>

            <a
              href="#perfumes"
              className="text-sm font-semibold uppercase tracking-widest text-black transition hover:text-[#735c00]"
            >
              Perfumes
            </a>

            <a
              href="#estuches"
              className="text-sm font-semibold uppercase tracking-widest text-black transition hover:text-[#735c00]"
            >
              Estuches
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button
            type="button"
            className="text-xl transition hover:opacity-60"
            aria-label="Buscar"
          >
            🔍
          </button>

          <a
            href="#cuenta"
            className="text-xl transition hover:opacity-60"
            aria-label="Cuenta"
          >
            👤
          </a>

          <a
            href="#carrito"
            className="relative text-xl transition hover:opacity-60"
            aria-label="Carrito"
          >
            🛍️

            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#735c00]" />
          </a>
        </div>
      </nav>
    </header>
  )
}