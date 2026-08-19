import perfumesImg from "../assets/categories/perfumes.webp";
import estuchesImg from "../assets/categories/estuches.webp";
import perfumerosImg from "../assets/categories/perfumeros.webp";

const categories = [
  {
    name: "Perfumes",
    image:
      perfumesImg,
  },
  {
    name: "Estuches",
    image: estuchesImg,
  },
  {
    name: "Perfumeros",
    image:
      perfumerosImg,
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