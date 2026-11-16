/**
 * URLs del sitio anterior (centromedicophillips.cl). Ese dominio redirige 1:1 a
 * www.optima-salud.cl conservando la ruta, así que las rutas antiguas llegan aquí.
 * Fuente: historial del Internet Archive. Las URLs sin equivalente se dejan en 404.
 * Se importa desde next.config.mjs (por eso es .mjs y no .ts).
 */
const pairs = [
  // Inicio y páginas institucionales del sitio 2012-2013
  ["/index.html", "/"],
  ["/CMP/Bienvenida.html", "/"],
  ["/CMP/Ubicacion.html", "/#contacto"],
  ["/CMP/Fotos_del_Lugar.html", "/"],
  ["/CMP/Personal.html", "/equipo"],
  ["/CMP/Convenios.html", "/convenios-empresas"],
  ["/CMP/Psiquiatras-Fonasa.html", "/psicologos-fonasa-santiago"],
  ["/psiquiatras-atienden-por-fonasa-en-santiago-centro", "/psicologos-fonasa-santiago"],
  // Reserva
  ["/reserva-tu-hora.html", "/reserva"],
  ["/solicitud-hora", "/reserva"],
  ["/gracias.html", "/reserva"],
  // Fichas antiguas de profesionales
  ["/dra-alicia-figueroa", "/equipo/dra-alicia-figueroa"],
  ["/dra-graciela-rojas", "/equipo/dra-graciela-rojas"],
  ["/psicologa-susana-romero", "/equipo/susana-romero-a"],
  ["/dra-mariana-nuno", "/equipo"],
  ["/piscologa-maria-jesus-riadi", "/equipo"],
  // Profesionales que ya no forman parte del equipo
  ["/equipo/denise-gerber", "/equipo"],
  ["/equipo/ignacia-leal", "/equipo"],
  ["/equipo/ignacio-rios", "/equipo"],
  ["/equipo/liliana-canileo", "/equipo"],
  // Blog: tests de depresión
  ["/blog/2019/09/09/depresion-autoevaluacion-online-gratis", "/tests/phq-9"],
  ["/blog/2020/09/09/depresion-test-online-gratis", "/tests/phq-9"],
  // Blog: artículos recuperados (contenido en lib/blog.ts)
  ["/blog/2020/09/09/depresion-diagnostico-y-tratamiento", "/blog/depresion-diagnostico-y-tratamiento"],
  ["/que-es-la-depresion", "/blog/depresion-diagnostico-y-tratamiento"],
  ["/category/depresion", "/blog/depresion-diagnostico-y-tratamiento"],
  ["/tag/depresion", "/blog/depresion-diagnostico-y-tratamiento"],
  ["/blog/2020/09/09/depresion-postparto-diagnostico-y-tratamiento", "/blog/depresion-posparto"],
  ["/cuando-podemos-decir-que-estamos-frente-a-la-depresion-posparto", "/blog/depresion-posparto"],
  ["/blog/2020/09/09/depresion-en-la-tercera-edad", "/blog/depresion-en-la-tercera-edad"],
  ["/demencia-senil", "/blog/depresion-en-la-tercera-edad"],
  ["/category/demencia", "/blog/depresion-en-la-tercera-edad"],
  ["/tag/demencia", "/blog/depresion-en-la-tercera-edad"],
  ["/tag/demencia-senil", "/blog/depresion-en-la-tercera-edad"],
  ["/tag/adulto-mayor", "/blog/depresion-en-la-tercera-edad"],
  ["/blog/2021/08/13/que-es-la-ansiedad", "/blog/que-es-la-ansiedad"],
  ["/blog/2021/06/25/necesito-ayuda-para-mi-salud-mental", "/blog/necesito-ayuda-salud-mental"],
]

export const legacyRedirects = pairs.map(([source, destination]) => ({ source, destination, permanent: true }))
