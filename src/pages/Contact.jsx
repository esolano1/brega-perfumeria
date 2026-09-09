import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function obtenerEstadoNegocio() {
  const ahora = new Date()

  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Mexico_City',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(ahora)

  const valores = Object.fromEntries(
    partes.map(({ type, value }) => [type, value])
  )

  const dias = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  }

  const dia = dias[valores.weekday]
  const minutosActuales =
    Number(valores.hour) * 60 + Number(valores.minute)

  // Lunes a viernes
  if (dia >= 1 && dia <= 5) {
    const apertura = 9 * 60
    const cierre = 19 * 60

    if (minutosActuales >= apertura && minutosActuales < cierre) {
      return {
        abierto: true,
        mensaje: 'Cierra a las 7:00 PM',
      }
    }

    if (minutosActuales < apertura) {
      return {
        abierto: false,
        mensaje: 'Abre hoy a las 9:00 AM',
      }
    }

    // Viernes después del cierre
    if (dia === 5) {
      return {
        abierto: false,
        mensaje: 'Abre mañana a las 10:00 AM',
      }
    }

    return {
      abierto: false,
      mensaje: 'Abre mañana a las 9:00 AM',
    }
  }

  // Sábado
  if (dia === 6) {
    const apertura = 10 * 60
    const cierre = 16 * 60

    if (minutosActuales >= apertura && minutosActuales < cierre) {
      return {
        abierto: true,
        mensaje: 'Cierra a las 4:00 PM',
      }
    }

    if (minutosActuales < apertura) {
      return {
        abierto: false,
        mensaje: 'Abre hoy a las 10:00 AM',
      }
    }

    return {
      abierto: false,
      mensaje: 'Abre el lunes a las 9:00 AM',
    }
  }

  // Domingo
  return {
    abierto: false,
    mensaje: 'Abre mañana a las 9:00 AM',
  }
}


export default function Contact() {

     const estado = obtenerEstadoNegocio()

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-on-background">
      <Navbar />

      <main className="mx-auto w-full max-w-[1440px] px-5 pb-28 pt-32 md:px-20">

        {/* Header */}
        <header className="mb-28 text-center">
          <h1 className="mb-2 font-headline text-4xl text-primary md:text-7xl">
            Contáctanos
          </h1>

          <p className="mx-auto max-w-2xl text-lg font-light text-on-surface-variant">
            Permítanos guiarle a través de nuestro stock de fragancias.
            Estamos a su disposición para cualquier consulta.
          </p>
        </header>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

          {/* Formulario */}
          <div className="relative overflow-hidden border border-outline-variant/30 bg-surface-container-highest/20 p-8 lg:col-span-7 md:p-12">

            <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />

            <h2 className="mb-8 font-headline text-3xl text-on-surface">
              Envíanos un mensaje
            </h2>

            <form className="relative z-10 space-y-8">

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-on-surface-variant"
                  >
                    Nombre Completo
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Su nombre"
                    className="w-full border-0 border-b border-outline-variant bg-transparent px-0 py-2 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-on-surface-variant"
                  >
                    Correo Electrónico
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="su@correo.com"
                    className="w-full border-0 border-b border-outline-variant bg-transparent px-0 py-2 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-0"
                  />
                </div>

              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-on-surface-variant"
                >
                  Asunto
                </label>

                    <select
                     id="subject"
                     className="w-full border-0 border-b border-outline-variant bg-background px-0 py-2 text-on-surface focus:border-primary focus:outline-none focus:ring-0"
                     >
                     <option className="bg-background text-on-surface" value="consulta">
                            Consulta de Fragancia
                     </option>

                     <option className="bg-background text-on-surface" value="cita">
                             Precios
                     </option>

                     <option className="bg-background text-on-surface" value="soporte">
                             Otra
                     </option>
                    </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-on-surface-variant"
                >
                  Mensaje
                </label>

                <textarea
                  id="message"
                  rows="4"
                  placeholder="¿Cómo podemos ayudarle?"
                  className="w-full resize-none border-0 border-b border-outline-variant bg-transparent px-0 py-2 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-0"
                />
              </div>

              <button
                type="button"
                className="w-full border border-primary bg-background px-8 py-3 text-xs font-semibold uppercase tracking-widest text-primary transition-colors duration-300 hover:bg-primary hover:text-background md:w-auto"
              >
                Enviar Mensaje
              </button>

            </form>
          </div>

          {/* Información */}
          <div className="flex flex-col gap-6 lg:col-span-5">

            <div className="flex-grow border border-outline-variant/20 bg-surface-container-low p-8">

              <h3 className="mb-6 font-headline text-3xl text-primary">
                Exclusive
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                    Ubicación
                  </p>

                  <p className="text-on-surface">
                    3 Norte #3
                    <br />
                    Tecamachalco, Mexico, 75480
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                    Horario
                  </p>

                  <p className="text-on-surface">
                    Lunes - Viernes: 09:00 - 19:00
                    <br />
                    Sábado: 10:00 - 16:00
                  </p>

                  {/* Estado en tiempo real */}
                  <div className="mt-3 flex items-center gap-2 text-sm">
                  <span
                  className={`h-2 w-2 rounded-full ${
                  estado.abierto ? 'bg-green-500' : 'bg-red-500'
                }`}
                />

                <span
                 className={`font-semibold ${
                 estado.abierto ? 'text-green-500' : 'text-red-500'
                }`}
                >
                {estado.abierto ? 'Abierto ahora' : 'Cerrado'}
                </span>

               <span className="text-on-surface-variant">
              · {estado.mensaje}
             </span>
              </div>
                  
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                    Contacto Directo
                  </p>

                  <p className="text-on-surface">
                    +52 249 172 2881
                    <br />
                    bregaperfumeriatk@gmail.com
                  </p>
                </div>

              </div>
            </div>

            {/* Mapa */}
<div className="h-64 overflow-hidden border border-outline-variant/20">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15100.087010475994!2d-97.73897076985098!3d18.8861161448737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c563a79314c5a5%3A0x76b8b5ab94e98908!2sC.%203%20Nte.%203%2C%20El%20Convento%2C%20Centro%2C%2075480%20Tecamachalco%2C%20Pue.!5e0!3m2!1ses!2smx!4v1788925529234!5m2!1ses!2smx"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Ubicación de Brega Perfumería"
  />
</div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}