(function (global) {
  "use strict";

  const C = { fur: "#7C3AED", dark: "#5B21B6", lilac: "#C4B5FD", pink: "#F0ABFC", pupil: "#1E1033", spark: "#FBBF24", white: "#FFFFFF" };
  const BASE = Object.freeze({
    x: 0, y: 0, scale: 1, sx: 1, sy: 1, tilt: 0, head: 0, headX: 0, headY: 0, ear: 0,
    blink: 1, gx: 0, gy: 0, pupils: 1, tail: 0, spark: 1, alpha: 1, curl: 0,
    lx: 126, ly: 262, rx: 171, ry: 262, padsL: 0, padsR: 0, feet: 0,
    face: "normal", fx: "none", prop: "none", text: "", bubble: 0, cut: 0,
    wink: 0, recompensa: "none", propAngle: 0, intensity: 0,
    cabeza: "", cuello: "", ojos: "", escenario: "", objeto: ""
  });
  let nextId = 0;
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const esc = value => String(value).replace(/[<>&"']/g, char => ({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"}[char]));
  const path = (d, fill, extra = "") => `<path d="${d}" fill="${fill}" ${extra}/>`;
  const oval = (x, y, rx, ry, fill, extra = "") => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" ${extra}/>`;
  const stroke = (d, color, width, extra = "") => path(d, "none", `stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" ${extra}`);
  const group = (body, transform = "", extra = "") => `<g${transform ? ` transform="${transform}"` : ""} ${extra}>${body}</g>`;
  const star = (x, y, scale, opacity = 1) => group(path("M0-11Q2-2 11 0Q2 2 0 11Q-2 2-11 0Q-2-2 0-11Z", C.spark), `translate(${x} ${y}) scale(${scale})`, `opacity="${opacity}"`);

  const EQUIPMENT = Object.freeze({
    cabeza: ["boina", "auriculares"], cuello: ["panuelo"], ojos: ["lentes"],
    escenario: ["dia", "noche", "premiere"], objeto: ["reloj"]
  });
  const SLOT = { boina:"cabeza", auriculares:"cabeza", panuelo:"cuello", lentes:"ojos", reloj:"objeto", dia:"escenario", noche:"escenario", premiere:"escenario" };
  const rounded = (x,y,w,h,rx,f,extra="") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}" ${extra}/>`;

  function accessory(id) {
    if (id === "boina") return group(
      path("M102 75Q96 60 110 50Q141 24 178 54Q190 65 178 75Q147 88 102 75Z", C.pupil)
      + path("M108 69Q122 39 152 45Q169 49 176 62Q149 72 108 69Z", "#4C237A")
      + stroke("M143 46Q149 36 155 37", C.pupil, 5)
      + path("M104 74Q139 81 177 70L176 78Q144 88 106 81Z", C.dark)
      + star(162,65,.42),
      'rotate(-8 148 68)', 'data-layer="accesorio-boina"');
    if (id === "auriculares") return group(
      stroke("M66 123V108C66 52 232 55 232 108V123", C.pupil, 10)
      + stroke("M77 98C92 67 203 67 220 98", C.lilac, 3)
      + rounded(54,108,25,45,10,C.pupil)+rounded(58,115,10,29,5,C.lilac)
      + rounded(219,108,25,45,10,C.pupil)+rounded(230,115,10,29,5,C.lilac),
      "", 'data-layer="accesorio-auriculares"');
    if (id === "lentes") return group(
      stroke("M81 106L68 101M217 106L230 101M133 109Q149 103 165 109", C.pupil, 5)
      + rounded(84,97,54,40,13,"#211234",'stroke="#C4B5FD" stroke-width="3"')
      + rounded(160,97,54,40,13,"#211234",'stroke="#C4B5FD" stroke-width="3"')
      + stroke("M95 126L114 105M173 126L192 105", "#9D73E2", 5, 'opacity=".72"'),
      "", 'data-layer="accesorio-lentes"');
    if (id === "panuelo") return group(
      path("M114 171Q149 181 184 170L181 191Q161 205 149 222Q131 209 116 194Z", "#A958CD")
      + path("M117 174Q147 183 182 172L180 185Q146 197 118 186Z", C.pink)
      + path("M179 178Q199 176 204 191L186 189L197 204Q184 205 176 187Z", "#A958CD")
      + star(147,198,.38),
      "", 'data-layer="accesorio-panuelo"');
    if (id === "reloj") return group(
      oval(280,235,25,25,C.pupil)+oval(280,235,21,21,C.spark)+oval(280,235,16,16,C.white)
      + stroke("M280 225V235L287 239",C.pupil,2.6)
      + stroke("M267 255L263 261M293 255L297 261",C.dark,3),
      "", 'data-layer="accesorio-reloj"');
    return "";
  }

  function backdrop(name) {
    const colors = {
      dia:["#F6EDFF","#D7C1FA","#FFF4C9","#8664B8"],
      noche:["#24133F","#3D2759","#D9C1FF","#CDB8F8"],
      premiere:["#32163C","#573060","#FFD880","#F8C7DD"]
    }[name];
    if (!colors) return "";
    const [bg,floor,sun,line] = colors;
    return group(rounded(-14,-64,348,368,22,bg)
      + path("M-14 222Q155 181 334 222V304H-14Z",floor)
      + oval(267,3,18,18,sun)
      + stroke("M23 33H55M27 39H45M289 74H313",line,3)
      + stroke("M23 266H73M255 266H314",line,2,'opacity=".65"'), "", 'data-layer="escenario"');
  }

  function rewardProp(s) {
    if (s.recompensa === "claqueta") {
      const clap = path("M-33-12H34V-2H-33Z",C.pupil)
        + path("M-32-12H-23L-12-2H-21ZM-8-12H1L12-2H3ZM16-12H25L34-3H25Z",C.lilac);
      return group(rounded(-34,-8,69,37,5,C.pupil)+path("M-8 1L10 10L-8 19Z",C.lilac)
        + group(clap,`rotate(${s.propAngle} -31 -8)`)+oval(-30,-8,2.9,2.9,C.spark),
        "translate(151 208)", 'data-layer="claqueta"');
    }
    if (s.recompensa === "telefonos") {
      const phone = (x,active) => group(
        rounded(-16,-26,32,56,8,C.pupil)
        + rounded(-12,-20,24,39,4,active?"#F4D8FF":C.lilac)
        + path("M-5-11L7-2L-5 6Z",active?"#6D28D9":C.dark)
        + oval(0,24,2.6,2.6,active?C.spark:C.white),
        `translate(${x} 219)`);
      return group(phone(59,s.intensity<.45)+phone(243,s.intensity>.55), "", 'data-layer="telefonos"');
    }
    return "";
  }

  function rewardEffects(s) {
    const amount=clamp(s.intensity,0,1);
    if (!amount) return "";
    const shapes = s.recompensa === "palmas" ? [[125,102,.65],[174,101,.60]]
      : s.recompensa === "claqueta" ? [[190,176,.55],[206,188,.42]]
      : [[48,53,.63],[248,48,1],[276,97,.58]];
    return shapes.map(([x,y,k])=>star(x,y,k*(.65+.35*amount),amount)).join("");
  }

  function eyes(s, id) {
    if (["happy", "joy", "sleep"].includes(s.face)) {
      const d = s.face === "sleep" ? "M-13-1Q0 12 13-1" : "M-13 4Q0-16 13 4";
      return [111, 187].map(x => group(stroke(d, C.pupil, 3.1), `translate(${x} 118)`)).join("");
    }
    const open = clamp(s.blink, .035, 1.15);
    return [111, 187].map((x, i) => {
      const gid = id + "eye" + i;
      const aperture = i === 1 ? open * (1 - .96 * s.wink) : open;
      const ry = Math.max(1,29 * aperture);
      const py = clamp(s.gy * open + 1, -ry * .6, ry * .6);
      const pr = s.pupils;
      const px = s.gx;
      const closed = i===1 ? clamp((s.wink-.48)/.45,0,1) : 0;
      const eye = `<defs><clipPath id="${gid}">${oval(x, 117, 23, ry, "white")}</clipPath></defs>`
        + oval(x, 117, 23, ry, C.white)
        + group(
          oval(x + px, 117 + py, 12.2 * pr, Math.max(2, 16.4 * pr * open), C.pupil)
          + oval(x + px - 3, 111 + py, 3.5 * pr, Math.max(.4, 3.5 * pr * open), C.white),
          "", `clip-path="url(#${gid})"`
        );
      return group(eye,"",`opacity="${1-closed}"`)
        + (closed ? stroke(`M${x-13} 119Q${x} 113 ${x+13} 119`,C.pupil,3,`opacity="${closed}"`) : "");
    }).join("");
  }

  function face(s, id) {
    const leftEar = path("M61 103Q58 63 81 23Q85 16 91 22Q114 43 130 76L108 102Z", C.fur)
      + path("M71 85Q73 53 87 33Q91 29 116 73Q91 73 71 85Z", C.lilac);
    const ears = group(leftEar, `rotate(${-s.ear} 88 85)`)
      + group(leftEar, `translate(298 0) scale(-1 1) rotate(${-s.ear} 88 85)`);
    let eyebrows = "";
    if (s.face === "worry") eyebrows = stroke("M93 88Q106 93 119 81M179 81Q192 93 205 88", C.pupil, 3.5);
    if (s.face === "focus") eyebrows = stroke("M95 87L119 94M178 94L202 87", C.dark, 3.4);
    const mouths = {
      normal: stroke("M137 154Q142 162 149 155Q156 162 161 154", C.pupil, 2.9),
      happy: stroke("M138 152Q149 167 160 152", C.pupil, 3.2),
      joy: path("M136 151Q149 159 162 151Q160 174 149 174Q139 174 136 151Z", C.pupil)
        + oval(149, 166, 6.5, 4, C.pink),
      shock: oval(149, 157, 5.6, 7, C.pupil),
      worry: stroke("M140 160Q149 148 158 160", C.pupil, 3),
      sleep: stroke("M137 154Q142 162 149 155Q156 162 161 154", C.pupil, 2.8),
      focus: stroke("M140 155Q149 159 158 154", C.pupil, 2.7)
    };
    const head = ears + path("M60 99Q67 77 110 69Q149 61 188 69Q231 77 238 99Q257 127 238 151Q218 177 149 179Q80 177 60 151Q41 127 60 99Z", C.fur)
      + eyes(s, id) + eyebrows
      + path("M140 137Q149 133 158 137Q162 142 152 147Q149 149 146 147Q136 142 140 137Z", C.pink)
      + (mouths[s.face] || mouths.normal)
      + stroke("M82 138Q60 132 43 138M81 146Q62 147 50 156M216 138Q238 132 255 138M217 146Q236 147 248 156", C.pupil, 2.25);
    return group(head + accessory(s.cabeza) + accessory(s.ojos), `translate(${s.headX} ${s.headY}) rotate(${s.head} 149 128)`, 'data-layer="cabeza"');
  }

  function tail(s) {
    if (s.curl > .64) return "";
    const bristle = s.fx === "alarm";
    const d = bristle ? "M190 254L216 250L221 225L236 228L239 202L256 206L258 181L275 183L277 161" :
      "M192 254C215 255 223 232 230 211C238 187 263 186 274 168C284 152 275 137 264 137C254 137 251 143 250 147";
    return group(stroke(d, C.fur, bristle ? 15 : 19)
      + (bristle ? "" : star(280, 123, .88, s.spark)), `rotate(${s.tail} 194 250)`, 'data-layer="cola"');
  }

  function paw(which, x, y, pads, c) {
    const left = which === "L";
    const shoulderX = left ? 124 : 174;
    const shoulderY = 179 + c * 75;
    const raised = clamp((250 - y) / 100, 0, 1);
    const elbowX = shoulderX + (x - shoulderX) * .22;
    const elbowY = shoulderY + (y - shoulderY) * .43 + 17 * raised;
    const d = `M${shoulderX} ${shoulderY}Q${elbowX} ${elbowY} ${x} ${y}`;
    const drop = Math.max(0, Math.min(1, pads));
    const tips = path("M-8 4Q-10 7-8 10M0 4Q-2 8 0 11M8 4Q6 7 8 10", "none", `stroke="${C.dark}" stroke-width="1.5" stroke-linecap="round" opacity="${1-drop}"`);
    return group(
      stroke(d, C.dark, 25, 'opacity=".38"')
      + stroke(d, C.fur, 21)
      + group(oval(0, 2, 15, 12, C.fur)
        + tips
        + group(oval(0, 3, 6.4, 5.1, C.pink)
          + [-7, 0, 7].map((v, i) => oval(v, i === 1 ? -5 : -3, 2.6, 2.7, C.lilac)).join(""), "", `opacity="${drop}"`),
        `translate(${x} ${y})`), "", `data-layer="pata-frontal-${which}"`
    );
  }

  function effects(s) {
    const f = s.fx;
    if (f === "think") return [0,1,2].map(i => oval(155+i*13, 13-i*2, 2.7+i*.45, 2.7+i*.45, C.dark)).join("");
    if (f === "party" || f === "medal") return [[42,66,.9],[241,45,1.13],[279,90,.78],[55,120,.55]]
      .map(([x,y,k])=>star(x,y,k)).join("") + (f === "medal" ? group(
        path("M-19-27H-5L5-2H-9ZM19-27H5L-5-2H9Z", C.dark)
        + oval(0, 7, 15, 15, C.spark) + path("M0-2L3 4L10 5L5 10L6 17L0 14L-6 17L-5 10L-10 5L-3 4Z", "#9A5509"),
        "translate(245 208)") : "");
    if (f === "sweat") return path("M266 115Q252 132 266 137Q280 132 266 115Z", C.lilac);
    if (f === "alarm") return stroke("M46 64L37 56M51 53L48 43M36 76L25 72", C.dark, 3);
    if (f === "wave") return stroke("M59 155Q47 150 47 138M48 163Q34 157 34 147", C.dark, 2.3);
    if (f === "hop") return stroke("M138 291L134 285M149 294V285M161 291L165 284", C.dark, 2.5);
    if (f === "sleep") return '<text x="216" y="160" fill="#5B21B6" font-family="system-ui,sans-serif" font-weight="700" font-size="23">z</text>';
    return "";
  }

  function screen() {
    return group(
      path("M43 244H102L114 263H78Q71 263 68 257L55 253Z", C.dark)
      + path("M33 215Q32 209 38 208H87Q93 208 95 214L102 241Q103 247 96 248H49Q42 248 40 242Z", C.lilac)
      + oval(66, 228, 5, 5, C.fur) + stroke("M51 261H103", C.dark, 5),
      "", 'data-layer="pantalla"');
  }

  function speech(s) {
    if (!s.text || s.bubble <= 0) return "";
    const words = s.text.trim().slice(0, 72).split(/\s+/);
    const lines = words.reduce((list, word) => {
      const at = list.length - 1;
      if (list[at] && (list[at] + " " + word).length > 22) list.push(word);
      else list[at] = list[at] ? list[at] + " " + word : word;
      return list;
    }, [""]).slice(0, 3);
    const w = clamp(Math.max(...lines.map(l => l.length)) * 8.6 + 35, 81, 288);
    const h = 19 + lines.length * 18;
    return group('<rect x="' + (160 - w / 2) + '" y="9" rx="14" width="' + w + '" height="' + h + '" fill="white" stroke="#DDD0FC" stroke-width="1.5"/>'
      + path(`M153 ${h+8}H169L158 ${h+16}Z`, C.white)
      + lines.map((line,i)=>`<text x="160" y="${31+i*18}" text-anchor="middle" fill="${C.pupil}" font-size="14" font-weight="700" font-family="system-ui,sans-serif">${esc(line)}</text>`).join(""),
      "", `opacity="${clamp(s.bubble,0,1)}" data-layer="viñeta"`);
  }

  function render(state, namespace) {
    const s = { ...BASE, ...state };
    const id = String(namespace || "nilo" + (++nextId)).replace(/[^a-zA-Z0-9_-]/g, "_");
    const c = clamp(s.curl, 0, 1);
    const haunches = c > .64
      ? oval(177, 239, 62, 31, C.dark) + oval(154, 255, 59, 18, C.fur)
      : path("M116 169Q113 192 97 212Q78 238 87 253Q93 274 126 272H172Q203 274 211 253Q220 238 202 212Q184 188 182 169Z", C.dark)
        + path("M117 166Q149 155 181 166Q184 190 188 218Q191 255 174 268H124Q108 256 111 218Q114 188 117 166Z", C.fur);
    const hind = s.feet > .15 ? oval(103 - s.feet * 18, 256, 14, 11, C.fur, `opacity="${s.feet}"`) + oval(196 + s.feet * 18, 256, 14, 11, C.fur, `opacity="${s.feet}"`) : "";
    const curlTail = c > .64 ? stroke("M225 244Q234 262 206 265Q179 269 153 264", C.fur, 15)
      + star(227, 238, .68, s.spark) : "";
    const limbs = paw("L", s.lx, s.ly, s.padsL, c) + paw("R", s.rx, s.ry, s.padsR, c);
    const body = tail(s) + group(haunches + hind, "", 'data-layer="torso"') + face(s, id)
      + (c < .64 ? accessory(s.cuello) : "") + rewardProp(s)
      + limbs + curlTail + (s.prop === "screen" ? screen() : "") + effects(s) + rewardEffects(s);
    const clip = `<defs><clipPath id="${id}stage"><rect x="-14" y="-64" width="348" height="${364 - clamp(s.cut,0,1)*27}"/></clipPath></defs>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-14 -64 348 368" width="348" height="368" role="img" aria-label="Nilo Cat">${clip}`
      + backdrop(s.escenario) + accessory(s.objeto) + group(group(body, `translate(${s.x} ${s.y}) translate(149 270) rotate(${s.tilt}) scale(${s.scale*s.sx} ${s.scale*s.sy}) translate(-149 -270)`, `opacity="${s.alpha}"`),
        "", `clip-path="url(#${id}stage)"`) + speech(s) + "</svg>";
  }

  function sample(clip, milliseconds) {
    const t = clamp(milliseconds, 0, clip.duration);
    const frames = clip.frames;
    const after = frames.findIndex(frame => frame.t > t);
    if (after === -1) return { ...BASE, ...frames.at(-1) };
    if (after === 0) return { ...BASE, ...frames[0] };
    const a = { ...BASE, ...frames[after-1] };
    const b = { ...BASE, ...frames[after] };
    const u = (t-a.t)/(b.t-a.t);
    const eased = b.ease === "linear" ? u : u*u*(3-2*u);
    const result = {};
    for (const k of Object.keys(BASE)) result[k] = typeof a[k] === "number" ? a[k] + (b[k]-a[k])*eased : a[k];
    return result;
  }

  function mount(element, library, options = {}) {
    let frame, start, index = 0, active, message, time = 0;
    let reduced = options.reduced === true;
    let equipped = {};
    const draw = state => {
      const featured = Object.fromEntries(Object.keys(EQUIPMENT).filter(slot => state[slot]).map(slot => [slot,state[slot]]));
      const outfit = {...equipped,...(active?.wardrobe || {}),...featured};
      element.innerHTML = render({...state,...outfit}, "nilo_widget_" + (options.id ?? "main"));
    };
    const stop = () => { cancelAnimationFrame(frame); index++; };
    const display = state => draw(message && state.bubble > 0 ? {...state,text:message} : state);
    function play(id, opts = {}) {
      const clip = library.clips.find(item => item.id === id);
      if (!clip) return false;
      stop(); active = clip; start = undefined; time = 0; message = opts.text;
      if (reduced) { time = clip.poster; display(sample(clip, time)); return true; }
      display(sample(clip, 0));
      const run = index;
      function tick(now) {
        if (run !== index) return;
        start ??= now;
        time = Math.min(now - start, clip.duration);
        display(sample(clip, time));
        if (time < clip.duration) frame = requestAnimationFrame(tick);
        else if (opts.loop ?? clip.loop) { start = now; frame = requestAnimationFrame(tick); }
        else options.onEnd?.(id);
      }
      frame = requestAnimationFrame(tick);
      return true;
    }
    draw(BASE);
    return {
      play, stop,
      setEquipment(items) {
        equipped = Object.fromEntries(Object.entries(items || {}).filter(([slot,id]) => EQUIPMENT[slot]?.includes(id)));
        display(active ? sample(active,time) : BASE);
      },
      seek(ms) { if (active) { stop(); time = clamp(ms,0,active.duration); display(sample(active,time)); } },
      say(text) { return play("hablar", {text}); },
      currentTime: () => time,
      setReduced(value) { reduced = Boolean(value); if (reduced && active) { stop(); time = active.poster; display(sample(active,time)); } },
      destroy() { stop(); element.replaceChildren(); }
    };
  }

  function asset(id) {
    const slot = SLOT[id];
    if (!slot) return "";
    const boxes = {boina:"94 30 102 63",auriculares:"48 55 204 104",panuelo:"106 163 106 68",lentes:"61 91 176 54",reloj:"252 207 56 58"};
    const box = boxes[id] || "-14 -64 348 368";
    const [, , w, h] = box.split(" ");
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${box}" width="${w}" height="${h}">${slot === "escenario" ? backdrop(id) : accessory(id)}</svg>`;
  }
  global.NiloCat = { palette: C, base:BASE, render, sample, mount, equipment:EQUIPMENT, asset };
})(globalThis);
