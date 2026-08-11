const products = [
  {
    brand: "Dolce & Gabbana",
    name: "D&G Pour Homme EDT",
    price: "Desde $ 1150.00",
    image: `${import.meta.env.BASE_URL}images/products/dg-pour-homme.png`,
  },
  {
    brand: "Giorgio Armani",
    name: "Acqua di Giò EDT",
    price: "Desde $ 1500.00",
    image: `${import.meta.env.BASE_URL}images/products/adg-edt.png`,
  },
  {
    brand: "Bvlgari",
    name: "Bvlgari Man in Black EDP",
    price: "Desde $ 2400.00",
    image: `${import.meta.env.BASE_URL}images/products/bvlgari-man-in-black-edp.png`,
  },
  {
    brand: "Versace",
    name: "Eros Flame EDP",
    price: "Desde $ 1600.00",
    image: `${import.meta.env.BASE_URL}images/products/eros-flame-edp.png`,
  },
      {
    brand: "Jean Paul Gaultier",
    name: "Le Beau Le Parfum",
    price: "Desde $ 2700.00",
    image: `${import.meta.env.BASE_URL}images/products/le-beau-le-parfum.png`,
  },
  {
    brand: "Prada",
    name: "Prada L'homme EDT",
    price: "Desde $ 2200.00",
    image: `${import.meta.env.BASE_URL}images/products/prada-lhomme-edt.png`,
  },
  {
    brand: "Creed",
    name: "Aventus",
    price: "Desde $ 6600.00",
    image: `${import.meta.env.BASE_URL}images/products/aventus.png`,
  },
  {
    brand: "Rasasi",
    name: "Hawas ICE",
    price: "Desde $ 1600.00",
    image: `${import.meta.env.BASE_URL}images/products/hawas-ice.png`,
  }
  
];




export default function NewArrivals() {
  return (
    <section className="relative mx-auto max-w-[1440px] bg-surface-container-low/30 px-5 py-28 md:px-20">

      {/* Iluminación decorativa */}
      <div className="dramatic-lighting pointer-events-none absolute inset-0" />

      {/* Encabezado */}
      <div className="relative z-10 mb-16 flex flex-col items-end justify-between border-b border-outline-variant/20 pb-6 md:flex-row">

        <div className="w-full md:w-auto">
          <h2 className="mb-2 font-headline-lg text-4xl text-primary md:text-5xl">
            Novedades Exclusivas
          </h2>

          <p className="font-body-md font-light text-on-surface-variant">
            Últimas incorporaciones aaa nuestra galería olfativa.
          </p>
        </div>

        <a
          href="#"
          className="mt-4 flex items-center font-label-sm text-sm uppercase tracking-widest text-on-surface transition-colors hover:text-primary md:mt-0"
        >
          Ver Todas

          <span className="material-symbols-outlined ml-2 text-sm">
            trending_flat
          </span>
        </a>

      </div>

      {/* Productos */}
      <div className="relative z-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* Aquí van los productos */}

      {products.map((product) => (
<div key={product.name} className="group cursor-pointer">

  {/* Imagen */}
  <div className="mb-6 h-80 overflow-hidden rounded-lg bg-[#1a1a1a]">
    <img
      src={product.image}
      alt={product.name}
      className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
    />
  </div>

  {/* Texto */}
  <div className="text-center">

    <p className="mb-2 text-xs uppercase tracking-widest text-on-surface-variant">
      {product.brand}
    </p>

    <h3 className="mb-3 font-headline-md text-2xl text-on-surface transition-colors group-hover:text-primary">
      {product.name}
    </h3>

    <p className="text-base text-primary">
      {product.price}
    </p>

  </div>

</div>
      ))}

      </div>

    </section>
  );
}