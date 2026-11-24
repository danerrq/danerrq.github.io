/* Nilo Studio · web de venta v2 */

// ── Ajustes ───────────────────────────────────────────────────────────────
// Enlace de pago de Polar con la oferta de lanzamiento aplicada (USD 19; el descuento caduca en OFERTA_FIN).
const CHECKOUT_URL = 'https://buy.polar.sh/polar_cl_LSKpJtHYkJBoUYkhkUfmuPF38ZyNK6PJSDJQB4RKGuD';
// Enlace de pago al precio normal (USD 29). Se usa cuando OFERTA_FIN ya pasó.
const CHECKOUT_URL_NORMAL = 'https://buy.polar.sh/polar_cl_PXbZGP3ZDqbzF2uRcuKZURIlyVMowpbxv1TAY4TEkHP';
// Oferta de lanzamiento: termina el 1-12-2026 a las 23:59 hora de Bogotá (UTC−5).
const OFERTA_FIN = '2026-12-02T04:59:00Z';
const PRECIO_NORMAL = 29, PRECIO_OFERTA = 19;
// Vídeo demo vertical 9:16 (p. ej. 'assets/video/demo.mp4'). Vacío = rotan los ejemplos reales.
const VIDEO_DEMO_URL = '';
const VIDEO_DEMO_POSTER = '';
// ──────────────────────────────────────────────────────────────────────────

const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
const movil = matchMedia('(max-width: 640px)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ico = (id, w = 14) => `<svg width="${w}" height="${w}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const hayIO = 'IntersectionObserver' in window;

/* Vídeos reales (recortados, sin logo ni sonido). Solo estilos incluidos en la app:
   motor propio (café), HyperFrames (canal), animation-styles (ciclovía) y pixelfx (Egipto).
   Nada de packs opcionales de terceros (Lemo-Opuscar). */
const CLIPS = [
  ['ciclovia', 'Isla low-poly'], ['cafe', 'Motor Nilo Studio'], ['canal', 'Explicador plano'], ['egipto', 'Pixel art'],
  ['ciclovia2', 'Isla low-poly'], ['egipto2', 'Pixel art']
];
// En el hero, un clip por estilo para que los tres celulares nunca repitan estilo
const CLIPS_HERO = ['ciclovia', 'cafe', 'canal', 'egipto'];
const ESTILOS = [["as-whiteboard","Pizarra blanca"],["as-chalkboard","Pizarra de tiza"],["as-notepad_doodle","Garabatos de libreta"],["as-blueprint","Plano técnico"],["as-hand_drawn","Lápiz a mano"],["as-urban_sketch","Boceto urbano"],["as-crayon_book","Libro de crayolas"],["as-watercolour","Acuarela"],["as-one_line","Una sola línea"],["as-cel_line_boil","Línea viva"],["as-flat_vector","Vector plano"],["as-cel_anime_80s","Anime de los 80"],["as-stick_figure","Monigotes"],["as-cut_out","Collage"],["as-red_papercut","Papel recortado"],["as-paper_pop_up","Libro desplegable"],["as-shadow_puppet","Sombras chinescas"],["as-woodcut","Grabado en madera"],["as-engraving","Grabado antiguo"],["as-silkscreen_poster","Serigrafía"],["as-ukiyo_e","Ukiyo-e"],["as-art_deco","Art déco"],["as-stained_glass","Vitral"],["as-memphis_diorama","Diorama Memphis"],["as-sticker_explainer","Pegatinas"],["as-math_diagram","Diagrama"],["as-low_poly_island","Low-poly"],["as-brick_toy","Bloques"],["as-glass_product","Cristal"],["as-claymation","Plastilina"],["as-pixel_art_rpg","Pixel art RPG"],["as-silent_film","Cine mudo"],["as-newsreel","Noticiero"],["as-lidar_survey","LiDAR"],["as-microscope","Microscopio"],["as-hologram_hud","Holograma"],["as-circuit_board","Circuitos"],["as-liquid_motion","Líquido"],["as-generative_abstract","Generativo"]];

/* ---------- compra ---------- */
const aviso = $('#aviso');
let avisoT;
const avisar = t => { aviso.textContent = t; aviso.classList.add('ver'); clearTimeout(avisoT); avisoT = setTimeout(() => aviso.classList.remove('ver'), 3200); };
const finOferta = Date.parse(OFERTA_FIN);
const hayOferta = () => Date.now() < finOferta;
function aplicarPrecio() {
  const oferta = hayOferta();
  const url = oferta ? CHECKOUT_URL : CHECKOUT_URL_NORMAL;
  $$('[data-precio]').forEach(el => (el.textContent = oferta ? PRECIO_OFERTA : PRECIO_NORMAL));
  $$('[data-oferta]').forEach(el => (el.hidden = !oferta));
  const sub = $('[data-fija-sub]');
  if (sub) sub.textContent = oferta ? `Antes USD ${PRECIO_NORMAL} · lanzamiento` : 'Pago único · garantía 14 días';
  $$('[data-comprar]').forEach(a => { a.href = url; a.rel = 'noopener'; });
}
aplicarPrecio();
// cuenta atrás (hero y precio). Al llegar a cero la oferta desaparece sola.
const dos = n => String(n).padStart(2, '0');
let relojT;
function tic() {
  const r = Math.max(0, finOferta - Date.now());
  const d = Math.floor(r / 864e5), h = Math.floor(r / 36e5) % 24, m = Math.floor(r / 6e4) % 60, sg = Math.floor(r / 1e3) % 60;
  $$('[data-reloj]').forEach(el => { $('[data-d]', el).textContent = d; $('[data-h]', el).textContent = dos(h); $('[data-m]', el).textContent = dos(m); $('[data-s]', el).textContent = dos(sg); });
  if (!r) { clearInterval(relojT); aplicarPrecio(); }
}
if (hayOferta()) { tic(); relojT = setInterval(tic, 1000); }

/* ---------- barra de compra fija en el móvil ---------- */
const fija = $('#compra-fija'), hero = $('.hero'), precio = $('#precio'), finalS = $('.final');
const visibles = new Set();
function alDesplazar() {
  const mostrar = scrollY > hero.offsetHeight * 0.8 && !visibles.size;
  fija.classList.toggle('visible', mostrar);
  fija.setAttribute('aria-hidden', String(!mostrar));
}
addEventListener('scroll', alDesplazar, { passive: true });
if (hayIO) {
  const io = new IntersectionObserver(es => { es.forEach(e => e.isIntersecting ? visibles.add(e.target) : visibles.delete(e.target)); alDesplazar(); });
  io.observe(precio); io.observe(finalS);
}

/* ---------- cinta ---------- */
const frases = ['No vas a editar nada', 'Idea → vídeo', 'Con tu voz', 'Subtítulos y portada', '4 redes', 'Más de 180 estilos', 'En español', 'USD 29, una vez'];
$('#cinta').innerHTML = [...frases, ...frases, ...frases, ...frases].map(f => `<span>${f}</span>`).join('');

/* ---------- vídeos: solo se reproducen cuando se ven ---------- */
function videoClip(nombre, extra = '') {
  return `<video muted playsinline loop preload="none" poster="assets/clips/${nombre}.webp" data-src="assets/clips/${nombre}.mp4" ${extra}></video>`;
}
const vio = hayIO ? new IntersectionObserver(es => es.forEach(e => {
  const v = e.target;
  if (e.isIntersecting && !reducido) {
    if (!v.src) v.src = v.dataset.src;
    v.play().catch(() => {});
  } else v.pause();
}), { threshold: 0.25 }) : null;
const vigilar = root => $$('video[data-src]', root).forEach(v => vio ? vio.observe(v) : (v.src = v.dataset.src));

/* ---------- hero: vídeo demo o ejemplos reales rotando ---------- */
// 3 celulares en abanico: cada uno reproduce un reel real y cambia de estilo;
// cada 8 s rotan de posición (izquierda → centro → derecha). En el móvil solo se reproduce el del centro.
const abanico = $('#abanico');
const telefonos = $$('.telefono', abanico);
const POS = ['t-izq', 't-centro', 't-der'];
const enPantalla = new Set(['egipto', 'ciclovia', 'canal']);
const estado = telefonos.map(t => ({ t, clip: t.classList.contains('t-izq') ? 'egipto' : t.classList.contains('t-der') ? 'canal' : 'ciclovia' }));
const nombreDe = n => CLIPS.find(c => c[0] === n)[1];
function siguienteClip(actualN) {
  const libres = CLIPS_HERO.filter(n => !enPantalla.has(n));
  const n = libres[Math.floor(Math.random() * libres.length)] || actualN;
  enPantalla.delete(actualN); enPantalla.add(n);
  return n;
}
function ponerClip(e, n, animar = true) {
  e.clip = n;
  const p = $('.pantalla', e.t), img = $('img.poster', p), etq = $('.etq-estilo span', p);
  const cambiar = () => {
    img.src = `assets/clips/${n}.webp`;
    etq.textContent = nombreDe(n);
    const v = $('video', p);
    if (v && e.reproduce) { v.classList.remove('listo'); v.src = `assets/clips/${n}.mp4`; v.play().then(() => v.classList.add('listo')).catch(() => {}); }
  };
  if (animar && !reducido) { e.t.classList.remove('cambia'); void e.t.offsetWidth; e.t.classList.add('cambia'); setTimeout(cambiar, 330); }
  else cambiar();
}
if (VIDEO_DEMO_URL) {
  const pantalla = $('#pantalla');
  pantalla.innerHTML = `<video class="listo" muted playsinline loop autoplay src="${VIDEO_DEMO_URL}" ${VIDEO_DEMO_POSTER ? `poster="${VIDEO_DEMO_POSTER}"` : ''} aria-label="Vídeo de demostración"></video><button class="sonido" type="button">${ico('play', 16)}Toca para oír</button>`;
  const v = $('video', pantalla), b = $('.sonido', pantalla);
  b.onclick = () => { v.muted = false; v.currentTime = 0; v.play(); b.remove(); };
} else if (!reducido) {
  estado.forEach(e => {
    e.reproduce = !movil || e.t.classList.contains('t-centro');
    if (!e.reproduce) return;
    const v = document.createElement('video');
    Object.assign(v, { muted: true, playsInline: true, preload: 'metadata' });
    v.setAttribute('playsinline', ''); v.setAttribute('aria-hidden', 'true');
    v.poster = `assets/clips/${e.clip}.webp`;
    $('.pantalla', e.t).prepend(v);
    v.src = `assets/clips/${e.clip}.mp4`;
    v.play().then(() => v.classList.add('listo')).catch(() => {});
    // al terminar el clip (3,6 s), dos vueltas y cambia de estilo
    let vueltas = 0;
    v.addEventListener('ended', () => { if (++vueltas % 2) { v.play(); return; } ponerClip(e, siguienteClip(e.clip)); });
  });
  // en el móvil, los laterales cambian de póster sin reproducir
  if (movil) setInterval(() => estado.filter(e => !e.reproduce).forEach(e => ponerClip(e, siguienteClip(e.clip))), 7200);
  // carrusel con profundidad (no en el móvil: así el que reproduce sigue en el centro)
  if (!movil) setInterval(() => {
    telefonos.forEach(t => {
      const i = POS.findIndex(p => t.classList.contains(p));
      t.classList.remove(POS[i]); t.classList.add(POS[(i + 1) % 3]);
    });
  }, 8000);
}

/* ---------- galería de estilos ---------- */
$('#clips').innerHTML = CLIPS.map(([n, nombre]) => `<figure class="clip entra"><div class="marco">${videoClip(n, `aria-label="Ejemplo: ${nombre}"`)}</div><figcaption>${nombre}</figcaption></figure>`).join('');
vigilar($('#clips'));
const mitad = Math.ceil(ESTILOS.length / 2);
const filaEst = (l, c = '') => `<div class="fila-est ${c}">${(reducido ? l : [...l, ...l]).map(([f, n]) => `<div class="est"><img src="assets/estilos/${f}.webp" alt="" loading="lazy" width="104" height="130"><span>${n}</span></div>`).join('')}</div>`;
$('#mosaico').innerHTML = filaEst(ESTILOS.slice(0, mitad)) + filaEst(ESTILOS.slice(mitad), 'inversa');

/* ---------- el gato ---------- */
const gatos = {};
function gato(id, clip) {
  const el = document.getElementById(id);
  if (!el || !window.NiloCat || !window.NiloCatLibrary) return;
  const g = NiloCat.mount(el, NiloCatLibrary, { id, reduced: reducido, onEnd: () => g.play('reposo') });
  gatos[id] = { g, clip };
  if (hayIO) new IntersectionObserver(([e]) => e.isIntersecting ? g.play(clip) : g.stop(), { threshold: 0.2 }).observe(el);
  else g.play(clip);
}
gato('gato-hero', 'hola');
gato('gato-app', 'trabajando');
gato('gato-final', 'celebrando');

/* ---------- el flujo: la app recreada ---------- */
const IDEA = 'Por qué el café a veces te da sueño';
const ETAPAS = [
  { menu: 'ideas', titulo: 'Ideas', dur: 4200, html: () => `
    <div class="vista"><h4>Ideas para tu nicho <span class="ia">✦ IA</span></h4><p class="sub">La app te las propone cada semana. Elige una y listo.</p>
      <div class="sugeridas">
        ${[['9/10', '≈ 45 s', IDEA, '«Te tomas un café para despertarte… y a la hora tienes más sueño.»'],
           ['8/10', '≈ 50 s', 'El banano que comes es un clon', '«El banano del súper es copia de copia de copia.»'],
           ['8/10', '≈ 55 s', 'La ciclovía nació en Bogotá', '«Medio mundo la copió. Y empezó un domingo de 1974.»']]
          .map(([nota, dur, t, g], i) => `<div class="sug ${i ? '' : 'objetivo'}"><div class="sug-top"><span class="nota">${nota}</span><span>${dur}</span></div><b>${t}</b><p>${g}</p><span class="mini prim hacer">${ico('play')}Hacer este vídeo</span></div>`).join('')}
      </div>
      <div class="propia">${ico('idea')}<span>¿Ya tienes una idea? Escríbela</span></div>
      <span class="cursor-falso" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 3l14 8-6 1.5L10 19z" fill="#fff" stroke="#1C1B1F" stroke-width="1.5" stroke-linejoin="round"/></svg></span></div>`,
    alEntrar: () => clicFalso() },
  { menu: 'ideas', titulo: 'Guion', html: () => `
    <div class="vista"><h4>Guion <span class="ia">✦ IA</span></h4><p class="sub">Escrito por Claude en segundos. Lo puedes cambiar.</p>
      <div class="caja guion">
        <p><b>GANCHO</b>Te tomas un café para despertarte… y a la hora tienes más sueño. No estás loco.</p>
        <p style="animation-delay:.4s"><b>CUERPO</b>La cafeína tapa la adenosina, la molécula del cansancio. Pero no la borra: se acumula.</p>
        <p style="animation-delay:.8s"><b>CIERRE</b>¿Cuántas tazas te tomas tú? Te leo.</p>
      </div></div>` },
  { menu: 'voz', titulo: 'Voz', html: () => `
    <div class="vista"><h4>Tu voz</h4><p class="sub">Grabada por ti o tu voz clonada.</p>
      <div class="caja"><div class="onda">${Array.from({ length: 42 }, (_, i) => `<i style="--h:${30 + Math.round(Math.abs(Math.sin(i * 1.7)) * 65)}%;animation-delay:${(i % 7) * 90}ms"></i>`).join('')}</div>
      <div class="fila-dato"><span>${ico('mic')} narracion.wav</span><b>0:41</b></div></div></div>` },
  { menu: 'proyectos', titulo: 'En producción', html: () => `
    <div class="vista"><h4>Produciendo tu vídeo</h4><p class="sub">Puedes cerrar la ventana: te avisa al terminar.</p>
      <div class="prod"><div class="caja">
        <ul class="pasos-prod">
          <li class="ok"><span class="ic">${ico('check', 11)}</span>Guion<small>0:20</small></li>
          <li class="ok"><span class="ic">${ico('check', 11)}</span>Voz y tiempos<small>0:45</small></li>
          <li class="va"><span class="ic"></span>Animando 9 escenas<small id="min">≈ 4 min</small></li>
          <li><span class="ic"></span>Subtítulos y música</li>
          <li><span class="ic"></span>Portada</li>
        </ul>
        <div class="barra-prog"><i></i></div>
        <div class="fila-dato"><span>Estilo · Ilustración plana</span><b id="pct">0 %</b></div>
      </div><div class="mini-cel">${videoClip('cafe')}</div></div></div>`,
    alEntrar: () => { contar($('#pct'), 72, ' %', 3000); vigilar($('#escena')); } },
  { menu: 'proyectos', titulo: 'Por revisar', html: () => `
    <div class="vista"><h4>Listo para revisar</h4><p class="sub">Míralo y apruébalo. O pide un cambio.</p>
      <div class="revision"><div class="mini-cel">${videoClip('cafe')}</div><div class="caja">
        <ul class="chequeo">
          <li>${ico('check')}Formato vertical para el móvil</li>
          <li style="animation-delay:.15s">${ico('check')}Subtítulos debajo de la cara</li>
          <li style="animation-delay:.3s">${ico('check')}Portada y título</li>
          <li style="animation-delay:.45s">${ico('check')}Textos para cada red</li>
        </ul>
        <div class="fila-btns"><span class="mini">Pedir cambios</span><span class="mini prim pulsa">${ico('check')}Aprobar</span></div>
      </div></div></div>`, alEntrar: () => vigilar($('#escena')) },
  { menu: 'calendario', titulo: 'Calendario', html: () => {
    const dias = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    const redes = ['tt', 'ig', 'yt', 'fb'], nom = { tt: 'tiktok', ig: 'instagram', yt: 'youtube', fb: 'facebook' };
    return `<div class="vista"><h4>Tu semana</h4><p class="sub">Cada red con su texto, su portada y su hora.</p>
      <div class="semana">${dias.map((d, k) => `<div class="dia ${k === 2 ? 'hoy' : ''}"><b>${d}</b>${[0, 2, 4].includes(k) ? redes.map((r, j) => `<span class="pub ${r}" style="animation-delay:${k * 120 + j * 70}ms">${ico(nom[r], 10)}</span>`).join('') + '<span>18:30</span>' : ''}</div>`).join('')}</div>
      <div class="aviso-ok">${ico('check', 18)}Programado en TikTok, Instagram, YouTube y Facebook</div></div>`;
  } }
];
const DUR = 3400;
document.documentElement.style.setProperty('--dur', DUR + 'ms');
const escena = $('#escena'), etapas = $$('.etapa'), titulo = $('#app-titulo'), menus = $$('.app .item');
let actual = 0, ciclo, enVista = false, contarT, clicT = [];
// cursor animado: va a la primera sugerencia y pulsa «Hacer este vídeo»
function clicFalso() {
  clicT.forEach(clearTimeout); clicT = [];
  const cur = $('.cursor-falso', escena), tarjeta = $('.sug.objetivo', escena), btn = tarjeta && $('.hacer', tarjeta);
  if (!cur || !btn) return;
  const caja = escena.getBoundingClientRect(), b = btn.getBoundingClientRect();
  const x = b.left - caja.left + b.width * 0.6, y = b.top - caja.top + b.height * 0.55;
  if (reducido) { tarjeta.classList.add('elegida'); return; }
  cur.style.transform = `translate(${caja.width - 40}px, ${caja.height - 30}px)`;
  clicT.push(setTimeout(() => { cur.classList.add('ve'); cur.style.transform = `translate(${x}px, ${y}px)`; }, 250));
  clicT.push(setTimeout(() => { cur.classList.add('clic'); btn.classList.add('pulsado'); tarjeta.classList.add('elegida'); btn.innerHTML = `${ico('check')}Empezando…`; }, 1750));
  clicT.push(setTimeout(() => cur.classList.remove('clic'), 2000));
}
function contar(el, fin, suf, dur) {
  cancelAnimationFrame(contarT);
  if (!el) return;
  const t0 = performance.now();
  const paso = t => { const k = Math.min(1, (t - t0) / dur); el.textContent = Math.round(fin * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) contarT = requestAnimationFrame(paso); };
  contarT = requestAnimationFrame(paso);
}
function mostrar(n, auto = true) {
  actual = n;
  const e = ETAPAS[n];
  etapas.forEach((b, k) => { b.setAttribute('aria-selected', String(k === n)); b.classList.toggle('hecha', k < n); });
  menus.forEach(m => m.classList.toggle('activo', m.dataset.menu === e.menu));
  titulo.textContent = e.titulo;
  escena.innerHTML = e.html();
  e.alEntrar?.();
  clearTimeout(ciclo);
  const dur = e.dur || (n === ETAPAS.length - 1 ? DUR + 1200 : DUR);
  etapas[n].style.setProperty('--dur', dur + 'ms');
  if (auto && enVista && !reducido) ciclo = setTimeout(() => mostrar((actual + 1) % ETAPAS.length), dur);
}
etapas.forEach((b, k) => b.addEventListener('click', () => mostrar(k, false)));
escena.innerHTML = ETAPAS[0].html();
if (hayIO) new IntersectionObserver(([e]) => {
  enVista = e.isIntersecting;
  if (enVista) mostrar(actual); else clearTimeout(ciclo);
}, { threshold: 0.3 }).observe($('.app'));
else mostrar(0, false);
menus.forEach(m => m.classList.toggle('activo', m.dataset.menu === 'ideas'));

/* ---------- formatos: el modal «Subir mi vídeo» y el inicio de la app ---------- */
const ACABADOS = [['Dinámico', 'Zooms, gráficos, efectos y música'], ['Limpio', 'Cortes de silencios y subtítulos'], ['Solo subtítulos', 'Tu vídeo tal cual, con subtítulos y logo'], ['Gancho animado', 'Tu clip arriba y una animación que explica el resto']];
const FORMATOS = [
  () => `<h4>Nuevo vídeo</h4><p class="muted">Desde una idea, con el estilo que quieras.</p>
    <div class="tarjeta-ini"><span class="ico-ini">${ico('chispa', 20)}</span><b>Vídeo animado</b><span>Elige una idea: la app escribe el guion, lo narra con tu voz y lo anima con tu estilo.</span></div>
    <span class="etq-campo">Estilo</span>
    <div class="galeria-mini" id="gm">${['as-watercolour', 'as-pixel_art_rpg', 'as-claymation', 'as-ukiyo_e', 'as-blueprint', 'as-paper_pop_up', 'as-chalkboard', 'as-low_poly_island'].map((f, i) => `<img src="assets/estilos/${f}.webp" alt="" loading="lazy" class="${i ? '' : 'on'}">`).join('')}</div>
    <div class="fila-btns"><span class="mini prim">${ico('play')}Hacer este vídeo</span></div>`,
  () => `<h4>Subir mi vídeo</h4><p class="muted">¿Qué hacemos con él?</p>
    <div class="dos"><div class="tile on"><b>${ico('chispa', 16)}Edítalo por mí</b>Lo grabé con el celular: ponle subtítulos, cortes, gráficos y mi marca.</div>
      <div class="tile"><b>${ico('calendario', 16)}Ya está listo</b>Ya lo edité: solo escribe los textos y prográmalo.</div></div>
    <span class="etq-campo">Acabado</span>
    <div class="chips" id="acab">${ACABADOS.map(([n, d], i) => `<span class="chip ${i ? '' : 'on'}" title="${d}"><b>${n}</b></span>`).join('')}</div>
    <p class="nota-app" id="acab-d">${ACABADOS[0][1]}</p>
    <div class="fila-btns"><span class="mini prim">${ico('camara')}Subir y editar</span></div>`,
  () => `<h4>Subir mi vídeo</h4><p class="muted">¿Qué hacemos con él?</p>
    <div class="dos"><div class="tile"><b>${ico('chispa', 16)}Edítalo por mí</b>Lo grabé con el celular: ponle subtítulos, cortes, gráficos y mi marca.</div>
      <div class="tile on"><b>${ico('calendario', 16)}Ya está listo</b>Ya lo edité: solo escribe los textos y prográmalo.</div></div>
    <span class="etq-campo">¿De dónde saco los textos para las redes?</span>
    <div class="chips" id="leer"><span class="chip on">${ico('mic')}Escucha el audio</span><span class="chip">${ico('comentario')}Lee sus subtítulos</span><span class="chip">${ico('texto')}Te digo de qué trata</span></div>
    <p class="nota-app">El vídeo no se toca. Claude lo entiende, escribe el título, los textos y los hashtags de cada red, y lo deja listo para que lo apruebes.</p>
    <div class="fila-btns"><span class="mini prim">${ico('calendario')}Programar</span></div>`
];
const modal = $('#modal-formato'), opciones = $$('.opcion');
let fActual = 0, fCiclo, chipT, fVista = false;
function verFormato(n, auto = true) {
  fActual = n;
  opciones.forEach((o, k) => o.setAttribute('aria-selected', String(k === n)));
  modal.innerHTML = `<div class="vista">${FORMATOS[n]()}</div>`;
  clearInterval(chipT);
  if (!reducido) {
    const grupo = $('#acab', modal) || $('#leer', modal) || $('#gm', modal);
    if (grupo) {
      let i = 0;
      chipT = setInterval(() => {
        const hijos = [...grupo.children];
        i = (i + 1) % hijos.length;
        hijos.forEach((h, k) => h.classList.toggle('on', k === i));
        const d = $('#acab-d', modal);
        if (d) d.textContent = ACABADOS[i][1];
      }, 1300);
    }
  }
  clearTimeout(fCiclo);
  if (auto && fVista && !reducido) fCiclo = setTimeout(() => verFormato((fActual + 1) % FORMATOS.length), 6500);
}
opciones.forEach((o, k) => o.addEventListener('click', () => verFormato(k, false)));
verFormato(0, false);
if (hayIO) new IntersectionObserver(([e]) => { fVista = e.isIntersecting; if (fVista) verFormato(fActual); else { clearTimeout(fCiclo); clearInterval(chipT); } }, { threshold: 0.3 }).observe(modal);

/* ---------- entradas al hacer scroll y contador ---------- */
if (hayIO && !reducido) {
  const abajo = $$('.entra').filter(el => el.getBoundingClientRect().top > innerHeight);
  abajo.forEach(el => el.classList.add('espera'));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.remove('espera'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -6% 0px' });
  abajo.forEach(el => io.observe(el));
  const c = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    contar(e.target, +e.target.dataset.cuenta, '', 1400);
    setTimeout(() => (e.target.textContent = e.target.dataset.cuenta + '+'), 1450);
    c.unobserve(e.target);
  }), { threshold: 0.6 });
  $$('[data-cuenta]').forEach(el => c.observe(el));
} else $$('[data-cuenta]').forEach(el => (el.textContent = el.dataset.cuenta + '+'));

/* ---------- preguntas: una abierta a la vez ---------- */
$$('.faq details').forEach(d => d.addEventListener('toggle', () => { if (d.open) $$('.faq details').forEach(o => o !== d && (o.open = false)); }));

/* ---------- antes vs. con Nilo: tacha lo de antes y marca lo nuevo al aparecer ---------- */
const comp = $('#comparador');
if (comp && hayIO && !reducido) {
  comp.classList.add('anima');
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { comp.classList.add('visto'); o.disconnect(); } }, { threshold: 0.35 }).observe(comp);
}

/* ---------- créditos: proyectos de código abierto ---------- */
const TERCEROS = [
  ['HyperFrames', 'HeyGen', 'Apache-2.0', 'https://github.com/heygen-com/hyperframes'],
  ['Lemo-Opuscar', 'LemoLab', 'pack opcional de terceros (licencia no comercial), no incluido', 'https://github.com/lemomo-ai/lemo-opuscar'],
  ['pixelfx', 'Patch', 'MIT', 'https://github.com/patch-gg/pixelfx'],
  ['video-shotcraft', 'Vincent Wei', 'Apache-2.0', 'https://github.com/Vincentwei1021/video-shotcraft'],
  ['ClaudeAnimationBase', 'John Heibel', 'MIT', 'https://github.com/JohnHeibel/ClaudeAnimationBase'],
  ['earshot', 'Leon Lin', 'MIT', 'https://github.com/Leonxlnx/earshot'],
  ['animation-styles', 'Deenu Khan', 'MIT', 'https://github.com/deenukhan/animation-styles'],
  ['motion-graphics-skills', 'Charlie', 'MIT', 'https://github.com/charlie947/motion-graphics-skills'],
  ['storytelling-skills', 'yaxeen', 'MIT', 'https://github.com/yaxeen/storytelling-skills'],
  ['viral-hooks', 'rediumvex', 'MIT', 'https://github.com/rediumvex/viral-hooks-skill'],
  ['take-one', 'Tal Siach', 'MIT', 'https://github.com/talsiach/take-one'],
  ['unslop', 'heydamir', 'CC BY 4.0', 'https://github.com/heydamir/unslop'],
  ['instagram-agent-skill', 'Jake Schincariol', 'MIT', 'https://github.com/Jakeschincariol/instagram-agent-skill'],
  ['Playwright', 'Microsoft', 'Apache-2.0', 'https://github.com/microsoft/playwright'],
  ['faster-whisper', 'SYSTRAN', 'MIT', 'https://github.com/SYSTRAN/faster-whisper'],
  ['FFmpeg', 'FFmpeg', 'LGPL/GPL · herramienta aparte', 'https://ffmpeg.org'],
  ['yt-dlp', 'yt-dlp', 'Unlicense', 'https://github.com/yt-dlp/yt-dlp'],
  ['edge-tts', 'rany2', 'LGPL/GPL-3.0 · herramienta aparte', 'https://github.com/rany2/edge-tts'],
  ['VoiceStudio', 'debpalash', 'AGPL-3.0 · app aparte, opcional', 'https://github.com/debpalash/VoiceStudio'],
  ['Tauri', 'Tauri', 'MIT / Apache-2.0', 'https://github.com/tauri-apps/tauri'],
  ['QRCode.js', 'davidshimjs', 'MIT', 'https://github.com/davidshimjs/qrcodejs'],
  ['Inter', 'Rasmus Andersson', 'SIL Open Font License', 'https://github.com/rsms/inter'],
  ['Unbounded', 'NaN', 'SIL Open Font License', 'https://github.com/googlefonts/unbounded']
];
const tl = $('#terceros');
if (tl) tl.innerHTML = TERCEROS.map(([n, autor, lic, url]) => `<li><a href="${url}" target="_blank" rel="noopener">${n}</a><span>${autor} · ${lic}</span></li>`).join('');
