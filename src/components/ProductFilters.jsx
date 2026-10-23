
export default function ProductFilters() {
  return (
    <aside className="space-y-10">

      {/* Encabezado */}
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <h2 className="font-headline text-xl text-on-background">
          Filtros
        </h2>

        <button
          type="button"
          className="text-xs uppercase tracking-widest text-on-surface-variant"
        >
          Limpiar
        </button>
      </div>

      {/* Marcas */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-on-background">
          Marcas
        </h3>

        <div className="space-y-3">
          {["Creed", "Xerjoff", "Dior", "Tom Ford"].map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-3 text-sm text-on-surface-variant"
            >
              <input type="checkbox" className="accent-primary" />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Género */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-on-background">
          Género
        </h3>

        <div className="space-y-3">
          {["Masculino", "Femenino", "Unisex"].map((gender) => (
            <label
              key={gender}
              className="flex cursor-pointer items-center gap-3 text-sm text-on-surface-variant"
            >
              <input type="checkbox" className="accent-primary" />
              {gender}
            </label>
          ))}
        </div>
      </div>

      {/* Concentración */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-on-background">
          Concentración
        </h3>

        <div className="space-y-3">
          {["EDT", "EDP", "Parfum", "Elixir"].map((concentration) => (
            <label
              key={concentration}
              className="flex cursor-pointer items-center gap-3 text-sm text-on-surface-variant"
            >
              <input type="checkbox" className="accent-primary" />
              {concentration}
            </label>
          ))}
        </div>
      </div>

      {/* Familias olfativas */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-on-background">
          Familia olfativa
        </h3>

        <div className="space-y-3">
          {["Amaderada", "Cítrica", "Floral", "Oriental", "Aromática"].map((family) => (
            <label
              key={family}
              className="flex cursor-pointer items-center gap-3 text-sm text-on-surface-variant"
            >
              <input type="checkbox" className="accent-primary" />
              {family}
            </label>
          ))}
        </div>
      </div>

      {/* Precio */}
      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-on-background">
          Precio máximo
        </h3>

        <input
          type="range"
          min="0"
          max="10000"
          step="500"
          defaultValue="10000"
          className="w-full accent-primary"
        />

        <div className="mt-2 flex justify-between text-xs text-on-surface-variant">
          <span>$0</span>
          <span>$10,000</span>
        </div>
      </div>

    </aside>
  );
}
