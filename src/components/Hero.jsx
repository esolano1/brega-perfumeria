export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-20">

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">

        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/hero.jpg')",
          }}
        />

        {/* Oscurecer imagen */}
        <div className="absolute inset-0 bg-[#131313]/60 mix-blend-multiply" />

        {/* Degradado inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />

      </div>

      {/* Contenido */}
      <div className="dramatic-lighting relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-32 text-center">

        <h1 className="mb-8 font-display text-5xl leading-tight tracking-tight text-primary drop-shadow-lg md:text-7xl lg:text-[84px] lg:leading-[92px]">
          Una Vida, Un Recuerdo, Una Fragancia
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-7 text-on-surface-variant md:text-lg">
          Descubre fragancias que cuentan historias, te hacen recordar, y te hacen sentir.
        </p>

        <button
          type="button"
          className="luxury-button-primary"
        >
          Ver todas las fragancias
        </button>

      </div>
    </section>
  )
}