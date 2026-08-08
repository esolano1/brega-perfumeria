const categories = [
  {
    name: "Perfumes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPNt_xKjviTfR0UBZcrGQGyEIKgxsNzoi90CZpifFOsjMQZNB87DthNJEi91CHOiGnKPLrSLsHFe_9HjQPIAINVpaR7sn2ewqEw_k1iRiCjEv-IbHs4_h1bAY0IQBUn9ztw1yM0qLY7VwusknRevWqVIMh563DbPKzQVDNYEhXjXntnE_-sVAjeZojxM7jLrAdKqwmFUrDSCaHdA8vWFCZ1IdPrquBfNrWmNBFipTApWiPeMVMNk4",
  },
  {
    name: "Estuches",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMMypcdRxlzwAPHRnnpudoDP_H6PUXCBSvsXCyIMGke5YkoTMJYLVraktkSPswbuSQz677ruNW2sKu9KYgRgfPZ9dTcWUYPXqRo5hCUPjMKLOhzYbHY0G5TTOQ4qUNpWGKkObbXXNzAX2bN8ZhcBC3xeiEjgx1DfMyN4BHo481jAgvL0QaO30kozE6dG2H-mp6M5S51Yxk29q5Ejpmvnm09MH0kYUz2ffSLvrZ_rrzdtTbB1QH4nQ",
  },
  {
    name: "Perfumeros",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAB7QGJNxeOXpaTaaCLaM4AqVTtwwT0AvOd_fTJ1hkDFpY1RzRf0ydpJNfc7JTc1BPlNNqh2LMZNy0WIExMJ6BO-A5PBMjx_U_DKigLTzUVd5p_Pt6RY0FJrDzfEcO-wPzJdcb_NHvlz3u30YHSNYRG3vdcm5F21_dVlxXI8Wq_0JGmL-d1lMqwL3kWj3DPWiM2m0JhCwWMxj6XDmA9ZPiOszKJqX92-4h-UTzERzShneZEm5c6_zM",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-30 md:px-20">
      {/* Título */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-serif text-4xl text-primary md:text-5xl">
          Categorías Destacadas
        </h2>

        <div className="mx-auto h-px w-16 bg-primary/50" />
      </div>

      {/* Categorías */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {categories.map((category) => (
          <a
            key={category.name}
            href="#"
            className="group relative block h-96 overflow-hidden bg-[#121212]"
          >
            {/* Imagen */}
            <img
              src={category.image}
              alt={category.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Oscurecer imagen */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

            {/* Texto */}
            <div className="absolute bottom-8 left-8">
              <h3 className="mb-2 font-serif text-3xl text-white">
                {category.name}
              </h3>

              <span className="flex items-center text-xs font-semibold uppercase tracking-widest text-primary transition-transform duration-300 group-hover:translate-x-2">
                Ver colección
                <span className="ml-2">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}