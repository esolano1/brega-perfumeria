export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-20">

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">

        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUgGh_Qsg4XT5nsXnZnZ_kRg7BDIJq6M-L-wckakWO19w22jrno6LPbw2otL3Y-qeakodt6-oGJob_BKj41BfeH6mCMBQP7pjNHhd-5pvmi-XWtrbwUON1yybIsHEKlM32TajppmLME1siaohgw49085Tu8fezRIl7kSRlx0bXzx27LP5-4DVLTSFOzM2eXJ3BTSoAI1gWbFW_3fkzD6KpYNtqQTneA-GAFYoIKILNOyViGmvBU7f59Mj456nScrJk')",
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
          La Esencia de la Distinción
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-7 text-on-surface-variant md:text-lg">
          Descubre fragancias que cuentan historias, elaboradas con precisión y
          envueltas en un aura de misterio y elegancia atemporal.
        </p>

        <button
          type="button"
          className="luxury-button-primary"
        >
          Explorar Colección
        </button>

      </div>
    </section>
  )
}