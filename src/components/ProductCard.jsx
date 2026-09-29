export default function ProductCard({ product }) {
  return (
    <article className="group">
      {/* Imagen */}
      <div className="product-image-container relative aspect-[3/4] bg-surface-container-lowest mb-6 overflow-hidden flex items-center justify-center">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,202,80,0.1)_0%,transparent_70%)] pointer-events-none z-10" />

        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-2/3 object-contain relative z-20"
          />
        )}

        {/* Etiqueta Nuevo */}
        {product.isNew && (
          <div className="absolute top-4 left-4 z-30">
            <span className="bg-background border border-outline-variant px-3 py-1 text-on-surface-variant uppercase tracking-widest text-[10px]">
              Nuevo
            </span>
          </div>
        )}
      </div>

      {/* Información */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <span className="text-on-surface-variant uppercase tracking-widest mb-2 text-xs">
          {product.brand}
        </span>

        <h2 className="font-headline-md text-headline-md text-on-background mb-1">
          {product.name}
        </h2>

        <p className="text-primary mt-2">
          ${product.price}
        </p>

        <div className="flex gap-2 mt-4">
          {product.families.map((family) => (
            <span
              key={family}
              className="text-[10px] uppercase tracking-widest text-on-secondary-container border-b border-outline-variant/30 pb-1"
            >
              {family}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}