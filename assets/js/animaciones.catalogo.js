globalThis.NiloCatLibrary = {
  "schemaVersion": 2,
  "name": "Nilo Cat",
  "units": "ms",
  "viewBox": [
    -14,
    -64,
    348,
    368
  ],
  "clips": [
    {
      "id": "reposo",
      "name": "Reposo",
      "category": "Esenciales",
      "loop": true,
      "poster": 850,
      "purpose": "Se sienta y respira con calma mientras la app está disponible.",
      "duration": 2500,
      "frames": [
        {
          "t": 0,
          "label": "Neutro"
        },
        {
          "t": 850,
          "label": "Inhala",
          "sy": 1.025,
          "headY": -2,
          "tail": -4
        },
        {
          "t": 1450,
          "label": "Exhala",
          "sy": 0.993,
          "tail": 4
        },
        {
          "t": 1680,
          "label": "Párpados a medio cerrar",
          "blink": 0.53
        },
        {
          "t": 1750,
          "label": "Parpadeo",
          "blink": 0.06
        },
        {
          "t": 1820,
          "label": "Reabre",
          "blink": 0.9
        },
        {
          "t": 2500,
          "label": "Vuelta a neutro"
        }
      ]
    },
    {
      "id": "parpadear",
      "name": "Parpadear",
      "category": "Esenciales",
      "loop": false,
      "poster": 210,
      "purpose": "Abrir y cerrar los ojos desde la postura base.",
      "duration": 350,
      "frames": [
        {
          "t": 0,
          "label": "Mirada abierta"
        },
        {
          "t": 120,
          "label": "Párpados bajan",
          "blink": 0.55
        },
        {
          "t": 210,
          "label": "Ojos cerrados",
          "blink": 0.035
        },
        {
          "t": 265,
          "label": "Pausa breve",
          "blink": 0.035
        },
        {
          "t": 350,
          "label": "Ojos abiertos"
        }
      ]
    },
    {
      "id": "mirar",
      "name": "Mirar de un lado a otro",
      "category": "Esenciales",
      "loop": false,
      "poster": 500,
      "purpose": "Reacciona suavemente a un cambio de foco.",
      "duration": 1280,
      "frames": [
        {
          "t": 0,
          "label": "Al frente"
        },
        {
          "t": 220,
          "label": "A la izquierda",
          "gx": -7,
          "head": -4
        },
        {
          "t": 500,
          "label": "Mantiene la mirada",
          "gx": -7,
          "head": -4
        },
        {
          "t": 690,
          "label": "Cruza la mirada",
          "gx": 7,
          "head": 4
        },
        {
          "t": 990,
          "label": "Sostiene a la derecha",
          "gx": 7,
          "head": 4
        },
        {
          "t": 1280,
          "label": "Vuelve al frente"
        }
      ]
    },
    {
      "id": "sentarse",
      "name": "Sentarse",
      "category": "Movimiento",
      "loop": false,
      "poster": 1020,
      "purpose": "Se acomoda tras entrar o regresar al reposo.",
      "duration": 1020,
      "frames": [
        {
          "t": 0,
          "label": "Antes de sentarse",
          "y": -8,
          "sy": 1.08,
          "rx": 184,
          "lx": 112,
          "ly": 246,
          "ry": 246
        },
        {
          "t": 280,
          "label": "Baja el peso",
          "y": 1,
          "sy": 0.98,
          "lx": 115,
          "rx": 183,
          "ly": 252,
          "ry": 252
        },
        {
          "t": 530,
          "label": "Planta las dos patas",
          "y": 4,
          "sx": 1.12,
          "sy": 0.9,
          "headY": 5,
          "tail": 12,
          "lx": 123,
          "rx": 175
        },
        {
          "t": 770,
          "label": "Recupera altura",
          "sy": 1.015,
          "tail": -2
        },
        {
          "t": 1020,
          "label": "Sentado estable"
        }
      ]
    },
    {
      "id": "saludar",
      "name": "Saludar",
      "category": "Esenciales",
      "loop": false,
      "poster": 600,
      "purpose": "Levanta una pata desde delante del pecho para saludar.",
      "duration": 1510,
      "frames": [
        {
          "t": 0,
          "label": "Ambas patas apoyadas"
        },
        {
          "t": 250,
          "label": "Despega la pata frontal",
          "lx": 111,
          "ly": 217,
          "padsL": 0.25
        },
        {
          "t": 480,
          "label": "Coloca la pata delante del pecho",
          "lx": 77,
          "ly": 158,
          "padsL": 1,
          "head": -3,
          "fx": "wave",
          "tail": 3
        },
        {
          "t": 600,
          "label": "Muñeca hacia afuera",
          "lx": 66,
          "ly": 149,
          "padsL": 1,
          "head": -5,
          "fx": "wave",
          "tail": 3
        },
        {
          "t": 770,
          "label": "Muñeca hacia adentro",
          "lx": 91,
          "ly": 166,
          "padsL": 1,
          "head": -2,
          "fx": "wave",
          "tail": 3
        },
        {
          "t": 970,
          "label": "Segunda onda",
          "lx": 68,
          "ly": 151,
          "padsL": 1,
          "head": -3,
          "fx": "wave",
          "tail": 3
        },
        {
          "t": 1210,
          "label": "Devuelve la pata al suelo",
          "lx": 107,
          "ly": 221,
          "padsL": 0.25
        },
        {
          "t": 1510,
          "label": "Sentado"
        }
      ]
    },
    {
      "id": "hola",
      "name": "Hola",
      "category": "Mensajes",
      "loop": false,
      "poster": 720,
      "purpose": "Da la bienvenida por primera vez con una viñeta.",
      "duration": 2550,
      "frames": [
        {
          "t": 0,
          "label": "Se acomoda"
        },
        {
          "t": 280,
          "label": "Levanta la pata",
          "lx": 77,
          "ly": 158,
          "padsL": 1,
          "head": -3,
          "fx": "wave",
          "tail": 3,
          "scale": 0.85,
          "headY": 12
        },
        {
          "t": 400,
          "label": "Aparece la viñeta",
          "lx": 77,
          "ly": 158,
          "padsL": 1,
          "head": -3,
          "fx": "wave",
          "tail": 3,
          "text": "¡Hola!",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 720,
          "label": "Saluda hacia afuera",
          "lx": 66,
          "ly": 149,
          "padsL": 1,
          "head": -3,
          "fx": "wave",
          "tail": 3,
          "text": "¡Hola!",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 920,
          "label": "Completa el saludo",
          "lx": 88,
          "ly": 164,
          "padsL": 1,
          "head": -3,
          "fx": "wave",
          "tail": 3,
          "text": "¡Hola!",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 1250,
          "label": "Baja la pata",
          "text": "¡Hola!",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 2000,
          "label": "Sostiene la viñeta",
          "text": "¡Hola!",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 2280,
          "label": "Se despide de la viñeta",
          "text": "¡Hola!",
          "bubble": 0,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 2550,
          "label": "Vuelta a reposo"
        }
      ]
    },
    {
      "id": "pensando",
      "name": "Pensando",
      "category": "Esenciales",
      "loop": true,
      "poster": 1050,
      "purpose": "Acompaña la generación del guion con una pata bajo el mentón.",
      "duration": 2500,
      "frames": [
        {
          "t": 0,
          "label": "Observa"
        },
        {
          "t": 390,
          "label": "Sube la pata desde el pecho",
          "lx": 125,
          "ly": 203,
          "head": -3,
          "gx": -3,
          "gy": -4
        },
        {
          "t": 670,
          "label": "Pata en la barbilla",
          "lx": 130,
          "ly": 157,
          "gx": -5,
          "gy": -8,
          "head": -6,
          "fx": "think",
          "tail": 8
        },
        {
          "t": 1050,
          "label": "Idea en proceso",
          "lx": 130,
          "ly": 157,
          "gx": -7,
          "gy": -8,
          "head": -6,
          "fx": "think",
          "tail": 5
        },
        {
          "t": 1530,
          "label": "Mira un poco más arriba",
          "lx": 130,
          "ly": 157,
          "gx": -5,
          "gy": -10,
          "head": -8,
          "fx": "think",
          "tail": 8
        },
        {
          "t": 2080,
          "label": "Relaja el gesto",
          "lx": 121,
          "ly": 221,
          "gx": -3,
          "head": -3
        },
        {
          "t": 2500,
          "label": "Reinicia en neutro"
        }
      ]
    },
    {
      "id": "trabajando",
      "name": "Trabajando",
      "category": "Esenciales",
      "loop": true,
      "poster": 550,
      "purpose": "Teclea suavemente durante producción o edición.",
      "duration": 1440,
      "frames": [
        {
          "t": 0,
          "label": "Prepara la pantalla",
          "head": 7,
          "headX": 4,
          "gx": -6,
          "gy": 7,
          "blink": 0.8,
          "face": "focus",
          "lx": 104,
          "ly": 247,
          "rx": 137,
          "ry": 254,
          "prop": "screen",
          "tail": 5
        },
        {
          "t": 250,
          "label": "Primer toque",
          "head": 7,
          "headX": 4,
          "gx": -6,
          "gy": 7,
          "blink": 0.8,
          "face": "focus",
          "lx": 98,
          "ly": 241,
          "rx": 137,
          "ry": 254,
          "prop": "screen",
          "tail": 5
        },
        {
          "t": 550,
          "label": "Pata en el control",
          "head": 9,
          "headX": 4,
          "gx": -6,
          "gy": 7,
          "blink": 0.8,
          "face": "focus",
          "lx": 104,
          "ly": 248,
          "rx": 137,
          "ry": 254,
          "prop": "screen",
          "tail": 5
        },
        {
          "t": 840,
          "label": "Levanta la pata",
          "head": 7,
          "headX": 4,
          "gx": -6,
          "gy": 7,
          "blink": 0.8,
          "face": "focus",
          "lx": 94,
          "ly": 239,
          "rx": 137,
          "ry": 254,
          "prop": "screen",
          "tail": 2
        },
        {
          "t": 1150,
          "label": "Segundo toque",
          "head": 7,
          "headX": 4,
          "gx": -6,
          "gy": 7,
          "blink": 0.8,
          "face": "focus",
          "lx": 103,
          "ly": 247,
          "rx": 137,
          "ry": 254,
          "prop": "screen",
          "tail": 5
        },
        {
          "t": 1440,
          "label": "Vuelve a la posición de trabajo",
          "head": 7,
          "headX": 4,
          "gx": -6,
          "gy": 7,
          "blink": 0.8,
          "face": "focus",
          "lx": 104,
          "ly": 247,
          "rx": 137,
          "ry": 254,
          "prop": "screen",
          "tail": 5
        }
      ]
    },
    {
      "id": "listo_grabar",
      "name": "¿Listo para grabar?",
      "category": "Mensajes",
      "loop": false,
      "poster": 950,
      "purpose": "Invita cuando hay un guion listo y grabar es el siguiente paso.",
      "duration": 4050,
      "frames": [
        {
          "t": 0,
          "label": "Busca la mirada"
        },
        {
          "t": 350,
          "label": "Gesto de invitación",
          "lx": 93,
          "ly": 212,
          "padsL": 0.7,
          "head": -3
        },
        {
          "t": 530,
          "label": "Entra la pregunta",
          "lx": 93,
          "ly": 212,
          "padsL": 1,
          "head": -3,
          "text": "¿Listo para grabar tu video?",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 950,
          "label": "Sostiene la pregunta",
          "lx": 89,
          "ly": 208,
          "padsL": 1,
          "head": -3,
          "text": "¿Listo para grabar tu video?",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 2650,
          "label": "Baja la pata",
          "text": "¿Listo para grabar tu video?",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 3500,
          "label": "Última pausa",
          "text": "¿Listo para grabar tu video?",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 3780,
          "label": "Se cierra la viñeta",
          "text": "¿Listo para grabar tu video?",
          "bubble": 0,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 4050,
          "label": "Reposo"
        }
      ]
    },
    {
      "id": "feliz",
      "name": "Feliz",
      "category": "Esenciales",
      "loop": false,
      "poster": 530,
      "purpose": "Confirma una pequeña victoria con un saltito.",
      "duration": 1380,
      "frames": [
        {
          "t": 0,
          "label": "Atento"
        },
        {
          "t": 220,
          "label": "Anticipación",
          "y": 4,
          "sx": 1.12,
          "sy": 0.9,
          "headY": 5,
          "tail": -7,
          "face": "happy",
          "head": -3
        },
        {
          "t": 390,
          "label": "Despegue",
          "y": -21,
          "sx": 0.91,
          "sy": 1.07,
          "lx": 110,
          "ly": 211,
          "rx": 188,
          "ry": 212,
          "padsL": 0.5,
          "padsR": 0.5,
          "feet": 0.75,
          "face": "happy",
          "fx": "none",
          "tail": -14
        },
        {
          "t": 530,
          "label": "Punto alto",
          "y": -41,
          "sx": 0.91,
          "sy": 1.07,
          "lx": 110,
          "ly": 211,
          "rx": 188,
          "ry": 212,
          "padsL": 0.5,
          "padsR": 0.5,
          "feet": 0.75,
          "face": "happy",
          "fx": "hop",
          "tail": -14
        },
        {
          "t": 690,
          "label": "Descenso",
          "y": -14,
          "sx": 0.91,
          "sy": 1.07,
          "lx": 110,
          "ly": 211,
          "rx": 188,
          "ry": 212,
          "padsL": 0.5,
          "padsR": 0.5,
          "feet": 0.75,
          "face": "happy",
          "fx": "none",
          "tail": -14
        },
        {
          "t": 820,
          "label": "Aterriza",
          "y": 4,
          "sx": 1.12,
          "sy": 0.9,
          "headY": 5,
          "tail": 12
        },
        {
          "t": 1090,
          "label": "Se asienta",
          "face": "happy",
          "head": -3,
          "tail": -7
        },
        {
          "t": 1380,
          "label": "Reposo"
        }
      ]
    },
    {
      "id": "saltar",
      "name": "Saltar",
      "category": "Movimiento",
      "loop": false,
      "poster": 490,
      "purpose": "Un salto limpio con anticipación, vuelo y recuperación.",
      "duration": 1050,
      "frames": [
        {
          "t": 0,
          "label": "Reposo"
        },
        {
          "t": 170,
          "label": "Flexiona",
          "y": 4,
          "sx": 1.12,
          "sy": 0.9,
          "headY": 5,
          "tail": 12
        },
        {
          "t": 320,
          "label": "Se estira",
          "y": -25,
          "sx": 0.91,
          "sy": 1.14,
          "lx": 110,
          "ly": 211,
          "rx": 188,
          "ry": 212,
          "padsL": 0.5,
          "padsR": 0.5,
          "feet": 0.75,
          "face": "normal",
          "fx": "none",
          "tail": -14
        },
        {
          "t": 490,
          "label": "Punto alto",
          "y": -55,
          "sx": 0.91,
          "sy": 1.07,
          "lx": 110,
          "ly": 211,
          "rx": 188,
          "ry": 212,
          "padsL": 0.5,
          "padsR": 0.5,
          "feet": 0.75,
          "face": "normal",
          "fx": "none",
          "tail": -14
        },
        {
          "t": 650,
          "label": "Comienza el descenso",
          "y": -22,
          "sx": 0.91,
          "sy": 1.07,
          "lx": 110,
          "ly": 211,
          "rx": 188,
          "ry": 212,
          "padsL": 0.5,
          "padsR": 0.5,
          "feet": 0.75,
          "face": "normal",
          "fx": "none",
          "tail": -14
        },
        {
          "t": 790,
          "label": "Impacto suave",
          "y": 4,
          "sx": 1.12,
          "sy": 0.9,
          "headY": 5,
          "tail": 12
        },
        {
          "t": 1050,
          "label": "Estabiliza"
        }
      ]
    },
    {
      "id": "moverse",
      "name": "Moverse lateralmente",
      "category": "Movimiento",
      "loop": false,
      "poster": 1370,
      "purpose": "Pasa de un lado al otro dentro de su espacio.",
      "duration": 1370,
      "frames": [
        {
          "t": 0,
          "label": "Centro"
        },
        {
          "t": 230,
          "label": "Anticipa",
          "x": -10,
          "tilt": -5,
          "lx": 105,
          "ly": 237,
          "rx": 187,
          "ry": 251,
          "tail": -8.5,
          "head": 0.8999999999999999,
          "sy": 0.97
        },
        {
          "t": 510,
          "label": "Paso a la derecha",
          "x": 24,
          "tilt": 7,
          "lx": 105,
          "ly": 237,
          "rx": 187,
          "ry": 251,
          "tail": 11.9,
          "head": -1.26
        },
        {
          "t": 790,
          "label": "Frena",
          "x": 39,
          "tilt": -4,
          "lx": 105,
          "ly": 237,
          "rx": 187,
          "ry": 251,
          "tail": -6.8,
          "head": 0.72
        },
        {
          "t": 1100,
          "label": "Paso hacia el centro",
          "x": 15,
          "tilt": -6,
          "lx": 105,
          "ly": 237,
          "rx": 187,
          "ry": 251,
          "tail": -10.2,
          "head": 1.08
        },
        {
          "t": 1370,
          "label": "Centro y patas apoyadas"
        }
      ]
    },
    {
      "id": "esconderse",
      "name": "Esconderse",
      "category": "Movimiento",
      "loop": false,
      "poster": 1000,
      "purpose": "Baja por el borde de su contenedor hasta quedar oculto.",
      "duration": 1000,
      "frames": [
        {
          "t": 0,
          "label": "Visible",
          "cut": 1
        },
        {
          "t": 250,
          "label": "Mira el borde",
          "cut": 1,
          "gy": 6,
          "head": 5
        },
        {
          "t": 510,
          "label": "Baja y asoman las orejas",
          "y": 155,
          "cut": 1,
          "spark": 0
        },
        {
          "t": 800,
          "label": "Oculto",
          "y": 267,
          "cut": 1,
          "spark": 0
        },
        {
          "t": 1000,
          "label": "Sostiene fuera de vista",
          "y": 267,
          "cut": 1,
          "spark": 0
        }
      ]
    },
    {
      "id": "asomarse",
      "name": "Asomarse",
      "category": "Movimiento",
      "loop": false,
      "poster": 630,
      "purpose": "Muestra primero las orejas y los ojos y luego se sienta.",
      "duration": 1400,
      "frames": [
        {
          "t": 0,
          "label": "Oculto",
          "y": 267,
          "cut": 1,
          "spark": 0
        },
        {
          "t": 240,
          "label": "Salen las orejas",
          "y": 183,
          "cut": 1,
          "spark": 0
        },
        {
          "t": 500,
          "label": "Aparecen los ojos",
          "y": 124,
          "cut": 1,
          "gx": 6,
          "head": -4,
          "spark": 0
        },
        {
          "t": 630,
          "label": "Mirada desde el borde",
          "y": 124,
          "cut": 1,
          "gx": -6,
          "head": -4,
          "spark": 0
        },
        {
          "t": 880,
          "label": "Se impulsa",
          "cut": 1,
          "y": 49,
          "sy": 1.04
        },
        {
          "t": 1150,
          "label": "Entra y se acomoda",
          "y": 4,
          "sx": 1.12,
          "sy": 0.9,
          "headY": 5,
          "tail": 12,
          "cut": 1
        },
        {
          "t": 1400,
          "label": "Sentado",
          "cut": 1
        }
      ]
    },
    {
      "id": "susto",
      "name": "Susto",
      "category": "Esenciales",
      "loop": false,
      "poster": 390,
      "purpose": "Reacciona brevemente a una sorpresa leve.",
      "duration": 1140,
      "frames": [
        {
          "t": 0,
          "label": "Reposo"
        },
        {
          "t": 155,
          "label": "Encoge las patas",
          "y": 4,
          "sx": 1.12,
          "sy": 0.9,
          "headY": 5,
          "tail": 12,
          "face": "shock",
          "pupils": 0.6
        },
        {
          "t": 280,
          "label": "Se sobresalta",
          "lx": 76,
          "ly": 190,
          "rx": 222,
          "ry": 190,
          "padsL": 1,
          "padsR": 1,
          "face": "shock",
          "pupils": 0.31,
          "feet": 1,
          "fx": "alarm",
          "y": -23
        },
        {
          "t": 390,
          "label": "Punto alto con cola erizada",
          "lx": 76,
          "ly": 190,
          "rx": 222,
          "ry": 190,
          "padsL": 1,
          "padsR": 1,
          "face": "shock",
          "pupils": 0.31,
          "feet": 1,
          "fx": "alarm",
          "y": -38
        },
        {
          "t": 560,
          "label": "Aterriza",
          "lx": 76,
          "ly": 190,
          "rx": 222,
          "ry": 190,
          "padsL": 1,
          "padsR": 1,
          "face": "shock",
          "pupils": 0.31,
          "feet": 0.15,
          "fx": "alarm",
          "y": 0,
          "sx": 1.06,
          "sy": 0.94
        },
        {
          "t": 820,
          "label": "Recobra la calma",
          "face": "normal",
          "pupils": 0.8,
          "tail": 3
        },
        {
          "t": 1140,
          "label": "Reposo"
        }
      ]
    },
    {
      "id": "celebrando",
      "name": "Celebrando",
      "category": "Esenciales",
      "loop": false,
      "poster": 680,
      "purpose": "Celebra un video terminado o publicado.",
      "duration": 1750,
      "frames": [
        {
          "t": 0,
          "label": "Reposo"
        },
        {
          "t": 190,
          "label": "Anticipa",
          "y": 4,
          "sx": 1.12,
          "sy": 0.9,
          "headY": 5,
          "tail": 12
        },
        {
          "t": 390,
          "label": "Eleva las dos patas desde el pecho",
          "lx": 83,
          "ly": 153,
          "rx": 216,
          "ry": 153,
          "padsL": 1,
          "padsR": 1,
          "face": "joy",
          "fx": "none",
          "sx": 1.025,
          "tail": -6,
          "feet": 0.55,
          "y": -15
        },
        {
          "t": 680,
          "label": "Patas arriba y chispas",
          "lx": 83,
          "ly": 153,
          "rx": 216,
          "ry": 153,
          "padsL": 1,
          "padsR": 1,
          "face": "joy",
          "fx": "party",
          "sx": 1.025,
          "tail": -6,
          "feet": 0.55
        },
        {
          "t": 1020,
          "label": "Sostiene celebración",
          "lx": 78,
          "ly": 153,
          "rx": 220,
          "ry": 153,
          "padsL": 1,
          "padsR": 1,
          "face": "joy",
          "fx": "party",
          "sx": 1.025,
          "tail": -6,
          "feet": 0.55,
          "y": -6
        },
        {
          "t": 1420,
          "label": "Baja ambas patas",
          "face": "happy",
          "head": -3,
          "tail": -7,
          "lx": 103,
          "ly": 218,
          "rx": 194,
          "ry": 219
        },
        {
          "t": 1750,
          "label": "Regresa sentado"
        }
      ]
    },
    {
      "id": "durmiendo",
      "name": "Durmiendo",
      "category": "Esenciales",
      "loop": true,
      "poster": 1450,
      "purpose": "Siesta opcional cuando pasa un rato sin actividad.",
      "duration": 3000,
      "frames": [
        {
          "t": 0,
          "label": "Ovillo",
          "curl": 1,
          "headY": 95,
          "headX": -18,
          "head": -12,
          "lx": 104,
          "ly": 264,
          "rx": 126,
          "ry": 264,
          "face": "sleep",
          "fx": "sleep"
        },
        {
          "t": 700,
          "label": "Inhala",
          "curl": 1,
          "headY": 95,
          "headX": -18,
          "head": -12,
          "lx": 104,
          "ly": 264,
          "rx": 126,
          "ry": 264,
          "face": "sleep",
          "fx": "sleep",
          "sy": 1.018
        },
        {
          "t": 1450,
          "label": "Exhala y descansa",
          "curl": 1,
          "headY": 95,
          "headX": -18,
          "head": -12,
          "lx": 104,
          "ly": 264,
          "rx": 126,
          "ry": 264,
          "face": "sleep",
          "fx": "sleep",
          "sy": 0.99
        },
        {
          "t": 2200,
          "label": "Inhala suavemente",
          "curl": 1,
          "headY": 95,
          "headX": -18,
          "head": -12,
          "lx": 104,
          "ly": 264,
          "rx": 126,
          "ry": 264,
          "face": "sleep",
          "fx": "sleep",
          "sy": 1.02
        },
        {
          "t": 3000,
          "label": "Ovillo",
          "curl": 1,
          "headY": 95,
          "headX": -18,
          "head": -12,
          "lx": 104,
          "ly": 264,
          "rx": 126,
          "ry": 264,
          "face": "sleep",
          "fx": "sleep"
        }
      ]
    },
    {
      "id": "despertar",
      "name": "Despertar",
      "category": "Movimiento",
      "loop": false,
      "poster": 1150,
      "purpose": "Desenrolla la cola y vuelve a sentarse.",
      "duration": 1150,
      "frames": [
        {
          "t": 0,
          "label": "Hecho un ovillo",
          "curl": 1,
          "headY": 95,
          "headX": -18,
          "head": -12,
          "lx": 104,
          "ly": 264,
          "rx": 126,
          "ry": 264,
          "face": "sleep",
          "fx": "sleep"
        },
        {
          "t": 290,
          "label": "Abre apenas los ojos",
          "curl": 1,
          "headY": 95,
          "headX": -18,
          "head": -12,
          "lx": 104,
          "ly": 264,
          "rx": 126,
          "ry": 264,
          "face": "normal",
          "fx": "none",
          "blink": 0.18
        },
        {
          "t": 590,
          "label": "Se desenrolla",
          "curl": 0.27,
          "headY": 22,
          "headX": -6,
          "blink": 0.63,
          "rx": 191,
          "lx": 108,
          "tail": -15
        },
        {
          "t": 860,
          "label": "Estira las patas",
          "sy": 1.08,
          "tail": -8,
          "blink": 0.92
        },
        {
          "t": 1150,
          "label": "Sentado y despierto"
        }
      ]
    },
    {
      "id": "preocupado",
      "name": "Preocupado",
      "category": "Esenciales",
      "loop": false,
      "poster": 750,
      "purpose": "Acompaña fallos recuperables con un gesto empático.",
      "duration": 1580,
      "frames": [
        {
          "t": 0,
          "label": "Atento"
        },
        {
          "t": 270,
          "label": "Baja las orejas",
          "ear": 12,
          "head": 3,
          "blink": 0.88
        },
        {
          "t": 510,
          "label": "Frunce las cejas",
          "ear": 22,
          "head": 5,
          "blink": 0.82,
          "face": "worry",
          "fx": "sweat",
          "tail": 12
        },
        {
          "t": 750,
          "label": "Sostiene gesto preocupado",
          "ear": 22,
          "head": 5,
          "blink": 0.82,
          "face": "worry",
          "fx": "sweat",
          "tail": 12
        },
        {
          "t": 1280,
          "label": "Suaviza la mirada",
          "ear": 22,
          "head": 5,
          "blink": 0.41,
          "face": "worry",
          "fx": "sweat",
          "tail": 12
        },
        {
          "t": 1580,
          "label": "Vuelve a reposo"
        }
      ]
    },
    {
      "id": "medalla",
      "name": "Medalla desbloqueada",
      "category": "Recompensas",
      "loop": false,
      "poster": 880,
      "purpose": "Premia una meta semanal con una medalla visual.",
      "duration": 3180,
      "frames": [
        {
          "t": 0,
          "label": "Atento"
        },
        {
          "t": 240,
          "label": "Se prepara para celebrar",
          "y": 4,
          "sx": 1.12,
          "sy": 0.9,
          "headY": 5,
          "tail": 12
        },
        {
          "t": 540,
          "label": "Eleva las dos patas",
          "lx": 83,
          "ly": 153,
          "rx": 216,
          "ry": 153,
          "padsL": 1,
          "padsR": 1,
          "face": "joy",
          "fx": "party",
          "sx": 1.025,
          "tail": -6,
          "feet": 0.55,
          "y": -14
        },
        {
          "t": 880,
          "label": "Presenta la medalla",
          "lx": 83,
          "ly": 153,
          "rx": 216,
          "ry": 153,
          "padsL": 1,
          "padsR": 1,
          "face": "joy",
          "fx": "medal",
          "sx": 1.025,
          "tail": -6,
          "feet": 0.55,
          "y": 4,
          "text": "¡Meta cumplida!",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 1650,
          "label": "Mantiene la medalla",
          "lx": 83,
          "ly": 153,
          "rx": 216,
          "ry": 153,
          "padsL": 1,
          "padsR": 1,
          "face": "joy",
          "fx": "medal",
          "sx": 1.025,
          "tail": -6,
          "feet": 0.55,
          "text": "¡Meta cumplida!",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 2180,
          "label": "Baja las patas",
          "face": "happy",
          "fx": "medal",
          "text": "¡Meta cumplida!",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 2900,
          "label": "Cierra mensaje",
          "text": "¡Meta cumplida!",
          "bubble": 0,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 3180,
          "label": "Reposo"
        }
      ]
    },
    {
      "id": "hablar",
      "name": "Viñeta configurable",
      "category": "Mensajes",
      "loop": false,
      "poster": 900,
      "purpose": "Muestra un texto breve elegido por la interfaz.",
      "duration": 3100,
      "frames": [
        {
          "t": 0,
          "label": "Atento",
          "scale": 0.85,
          "headY": 12
        },
        {
          "t": 200,
          "label": "Aparece viñeta",
          "text": "¡Vamos!",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 900,
          "label": "Pausa legible",
          "head": 3,
          "text": "¡Vamos!",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 2500,
          "label": "Fin de lectura",
          "text": "¡Vamos!",
          "bubble": 1,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 2800,
          "label": "Retira viñeta",
          "text": "¡Vamos!",
          "bubble": 0,
          "headY": 12,
          "scale": 0.85
        },
        {
          "t": 3100,
          "label": "Reposo"
        }
      ]
    },
    {
      "id": "saludo_director",
      "name": "Saludo de director",
      "category": "Recompensas nuevas",
      "loop": false,
      "poster": 690,
      "purpose": "Levanta la pata por delante del pecho, toca la boina y hace una reverencia breve.",
      "duration": 1420,
      "frames": [
        {
          "t": 0,
          "label": "Sentado"
        },
        {
          "t": 190,
          "label": "Levanta la pata frontal",
          "lx": 102,
          "ly": 185
        },
        {
          "t": 420,
          "label": "Toca la boina",
          "lx": 108,
          "ly": 75,
          "padsL": 0.9,
          "head": -7,
          "headY": 4
        },
        {
          "t": 690,
          "label": "Inclina la cabeza",
          "lx": 108,
          "ly": 75,
          "padsL": 0.9,
          "head": 12,
          "headY": 10,
          "blink": 0.36
        },
        {
          "t": 870,
          "label": "Guiño del director",
          "lx": 108,
          "ly": 75,
          "padsL": 0.9,
          "head": 3,
          "headY": 4,
          "wink": 1,
          "intensity": 0.5
        },
        {
          "t": 1110,
          "label": "Retira la pata",
          "lx": 103,
          "ly": 195,
          "tail": 4
        },
        {
          "t": 1420,
          "label": "Vuelve a sentarse"
        }
      ],
      "wardrobe": {
        "cabeza": "boina"
      }
    },
    {
      "id": "claqueta_guino",
      "name": "Claqueta y guiño",
      "category": "Recompensas nuevas",
      "loop": false,
      "poster": 730,
      "purpose": "Nilo abre la claqueta, la cierra con la pata adelantada y guiña un ojo.",
      "duration": 1590,
      "frames": [
        {
          "t": 0,
          "label": "Claqueta cerrada",
          "recompensa": "claqueta",
          "lx": 119,
          "ly": 194,
          "rx": 181,
          "ry": 217,
          "gx": -3,
          "gy": 7
        },
        {
          "t": 290,
          "label": "Abre la bisagra",
          "recompensa": "claqueta",
          "lx": 132,
          "ly": 180,
          "rx": 181,
          "ry": 217,
          "gx": -3,
          "gy": 7,
          "propAngle": -28
        },
        {
          "t": 530,
          "label": "Sube el brazo",
          "recompensa": "claqueta",
          "lx": 145,
          "ly": 171,
          "rx": 181,
          "ry": 217,
          "gx": -3,
          "gy": 7,
          "propAngle": -34
        },
        {
          "t": 730,
          "label": "Cierra y guiña",
          "recompensa": "claqueta",
          "lx": 153,
          "ly": 197,
          "rx": 181,
          "ry": 217,
          "gx": -3,
          "gy": 7,
          "propAngle": 0,
          "wink": 1,
          "intensity": 1
        },
        {
          "t": 940,
          "label": "Sostiene la mirada",
          "recompensa": "claqueta",
          "lx": 119,
          "ly": 194,
          "rx": 181,
          "ry": 217,
          "gx": -3,
          "gy": 7,
          "head": -6,
          "wink": 0.1,
          "intensity": 0.3
        },
        {
          "t": 1250,
          "label": "Acomoda las patas",
          "recompensa": "claqueta",
          "lx": 119,
          "ly": 194,
          "rx": 181,
          "ry": 217,
          "gx": -3,
          "gy": 7
        },
        {
          "t": 1590,
          "label": "Retoma el reposo"
        }
      ],
      "wardrobe": {}
    },
    {
      "id": "baile_estreno",
      "name": "Baile de estreno",
      "category": "Recompensas nuevas",
      "loop": false,
      "poster": 940,
      "purpose": "Dos pasos laterales, giro estilizado y remate con las dos patas al frente.",
      "duration": 1620,
      "frames": [
        {
          "t": 0,
          "label": "Patas apoyadas"
        },
        {
          "t": 180,
          "label": "Toma impulso",
          "sx": 1.08,
          "sy": 0.93,
          "head": 4
        },
        {
          "t": 390,
          "label": "Paso a la izquierda",
          "face": "happy",
          "feet": 0.75,
          "recompensa": "baile",
          "sx": 0.92,
          "sy": 1.05,
          "y": -13,
          "lx": 92,
          "ly": 190,
          "rx": 175,
          "ry": 192,
          "padsL": 0.6,
          "padsR": 0.6,
          "x": -31,
          "tilt": -9,
          "tail": 10
        },
        {
          "t": 590,
          "label": "Paso a la derecha",
          "face": "happy",
          "feet": 0.75,
          "recompensa": "baile",
          "sx": 0.92,
          "sy": 1.05,
          "y": -11,
          "lx": 125,
          "ly": 190,
          "rx": 207,
          "ry": 192,
          "padsL": 0.6,
          "padsR": 0.6,
          "x": 30,
          "tilt": 10,
          "tail": -9
        },
        {
          "t": 750,
          "label": "Entra al giro",
          "face": "happy",
          "feet": 0.35,
          "recompensa": "baile",
          "x": 16,
          "sx": 0.56,
          "tilt": 6,
          "head": 9,
          "lx": 118,
          "ly": 210,
          "rx": 181,
          "ry": 203
        },
        {
          "t": 940,
          "label": "Salto y remate",
          "face": "joy",
          "feet": 0.92,
          "recompensa": "baile",
          "sx": 0.92,
          "sy": 1.05,
          "y": -32,
          "lx": 88,
          "ly": 151,
          "rx": 209,
          "ry": 151,
          "padsL": 0.6,
          "padsR": 0.6,
          "intensity": 1,
          "tail": -9
        },
        {
          "t": 1130,
          "label": "Aterriza",
          "sx": 1.1,
          "sy": 0.92,
          "face": "happy",
          "intensity": 0.38
        },
        {
          "t": 1370,
          "label": "Hace una reverencia",
          "head": 8,
          "headY": 6,
          "face": "happy",
          "tail": 3
        },
        {
          "t": 1620,
          "label": "De nuevo en reposo"
        }
      ],
      "wardrobe": {}
    },
    {
      "id": "saludo_doble",
      "name": "Saludo doble",
      "category": "Recompensas nuevas",
      "loop": false,
      "poster": 1110,
      "purpose": "Activa una pantalla a la vez, dirige la mirada y saluda por delante del cuerpo.",
      "duration": 1740,
      "frames": [
        {
          "t": 0,
          "label": "Se muestran las dos pantallas",
          "recompensa": "telefonos"
        },
        {
          "t": 200,
          "label": "Mira a la izquierda",
          "recompensa": "telefonos",
          "gx": -9,
          "head": -6,
          "tail": 6
        },
        {
          "t": 470,
          "label": "Saluda a la izquierda",
          "recompensa": "telefonos",
          "lx": 70,
          "ly": 158,
          "padsL": 1,
          "gx": -10,
          "head": -7
        },
        {
          "t": 700,
          "label": "Cambia de lado",
          "recompensa": "telefonos",
          "lx": 110,
          "ly": 228,
          "rx": 190,
          "ry": 203,
          "intensity": 0.5
        },
        {
          "t": 930,
          "label": "Mira a la derecha",
          "recompensa": "telefonos",
          "rx": 217,
          "ry": 174,
          "padsR": 0.6,
          "gx": 9,
          "head": 7,
          "intensity": 0.86
        },
        {
          "t": 1110,
          "label": "Saluda a la derecha",
          "recompensa": "telefonos",
          "rx": 228,
          "ry": 157,
          "padsR": 1,
          "gx": 9,
          "head": 7,
          "intensity": 1
        },
        {
          "t": 1390,
          "label": "Baja la pata",
          "recompensa": "telefonos",
          "rx": 191,
          "ry": 230,
          "head": 2,
          "intensity": 0.7
        },
        {
          "t": 1740,
          "label": "Regresa al centro"
        }
      ],
      "wardrobe": {}
    },
    {
      "id": "pulso_a_tiempo",
      "name": "Toque de reloj",
      "category": "Recompensas nuevas",
      "loop": false,
      "poster": 730,
      "purpose": "Busca el reloj con la mirada, señala hacia él y asiente dos veces.",
      "duration": 1350,
      "frames": [
        {
          "t": 0,
          "label": "Sentado"
        },
        {
          "t": 240,
          "label": "Encuentra el reloj",
          "gx": 7,
          "gy": 6,
          "head": 4
        },
        {
          "t": 450,
          "label": "Se inclina",
          "gx": 9,
          "gy": 7,
          "head": 8,
          "rx": 216,
          "ry": 233
        },
        {
          "t": 730,
          "label": "Señala con la pata frontal",
          "gx": 10,
          "gy": 7,
          "head": 10,
          "rx": 245,
          "ry": 228,
          "padsR": 0.6,
          "intensity": 0.55
        },
        {
          "t": 920,
          "label": "Primer asentimiento",
          "head": 8,
          "headY": 8,
          "rx": 207,
          "ry": 227,
          "blink": 0.45
        },
        {
          "t": 1110,
          "label": "Segundo asentimiento",
          "head": 7,
          "headY": 5,
          "rx": 185,
          "ry": 245,
          "blink": 0.68
        },
        {
          "t": 1350,
          "label": "Vuelve a mirar al frente"
        }
      ],
      "wardrobe": {
        "objeto": "reloj"
      }
    },
    {
      "id": "revela_escena",
      "name": "Cambio de luces",
      "category": "Recompensas nuevas",
      "loop": false,
      "poster": 1040,
      "purpose": "Nilo barre el aire con la pata y aparecen, por turnos, tres fondos de estudio.",
      "duration": 1610,
      "frames": [
        {
          "t": 0,
          "label": "Escenario de día",
          "escenario": "dia"
        },
        {
          "t": 220,
          "label": "Anticipa el cambio",
          "escenario": "dia",
          "head": -6,
          "gx": -5,
          "lx": 92,
          "ly": 198
        },
        {
          "t": 470,
          "label": "Primer barrido",
          "escenario": "dia",
          "lx": 71,
          "ly": 165,
          "padsL": 1,
          "head": -7,
          "intensity": 0.48
        },
        {
          "t": 600,
          "label": "Entra la noche",
          "escenario": "noche",
          "lx": 90,
          "ly": 151,
          "padsL": 1,
          "head": -4,
          "intensity": 0.72
        },
        {
          "t": 825,
          "label": "Cruza al otro lado",
          "escenario": "noche",
          "rx": 215,
          "ry": 175,
          "padsR": 0.68,
          "head": 6,
          "intensity": 0.35
        },
        {
          "t": 1040,
          "label": "Enciende Premiere",
          "escenario": "premiere",
          "rx": 225,
          "ry": 159,
          "padsR": 0.9,
          "head": 8,
          "face": "happy",
          "intensity": 1
        },
        {
          "t": 1280,
          "label": "Baja la pata",
          "escenario": "premiere",
          "rx": 190,
          "ry": 225,
          "face": "happy",
          "intensity": 0.35
        },
        {
          "t": 1610,
          "label": "Posa en el estudio",
          "escenario": "premiere"
        }
      ],
      "wardrobe": {}
    },
    {
      "id": "pulso_de_voz",
      "name": "Cabeceo de escucha",
      "category": "Recompensas nuevas",
      "loop": false,
      "poster": 780,
      "purpose": "Nilo ajusta un audífono y marca tres pulsos con la cabeza.",
      "duration": 1320,
      "frames": [
        {
          "t": 0,
          "label": "Escucha"
        },
        {
          "t": 210,
          "label": "Pata al audífono",
          "rx": 218,
          "ry": 125,
          "padsR": 0.7,
          "head": 4
        },
        {
          "t": 470,
          "label": "Pulso uno",
          "rx": 218,
          "ry": 125,
          "padsR": 0.7,
          "head": -8,
          "headY": 5,
          "face": "happy"
        },
        {
          "t": 650,
          "label": "Sube la mirada",
          "head": 3,
          "rx": 202,
          "ry": 179
        },
        {
          "t": 780,
          "label": "Pulso dos",
          "head": 8,
          "headY": 7,
          "face": "happy",
          "tail": -8
        },
        {
          "t": 1020,
          "label": "Pulso tres",
          "head": -5,
          "headY": 6,
          "face": "happy",
          "tail": 8
        },
        {
          "t": 1320,
          "label": "Suelta el ritmo"
        }
      ],
      "wardrobe": {
        "cabeza": "auriculares"
      }
    },
    {
      "id": "pose_premiere",
      "name": "Pose de Premiere",
      "category": "Recompensas nuevas",
      "loop": false,
      "poster": 750,
      "purpose": "Nilo se acomoda los lentes y hace una pose breve de alfombra roja.",
      "duration": 1300,
      "frames": [
        {
          "t": 0,
          "label": "Neutro"
        },
        {
          "t": 220,
          "label": "Lleva la pata a los lentes",
          "lx": 92,
          "ly": 119,
          "padsL": 0.6,
          "head": -5
        },
        {
          "t": 460,
          "label": "Ajusta el lente",
          "lx": 93,
          "ly": 108,
          "padsL": 0.8,
          "head": -7
        },
        {
          "t": 750,
          "label": "Pose y destellos",
          "lx": 94,
          "ly": 159,
          "padsL": 1,
          "head": -8,
          "tilt": -4,
          "face": "happy",
          "intensity": 1
        },
        {
          "t": 1000,
          "label": "Sostiene la pose",
          "head": -5,
          "face": "happy",
          "intensity": 0.28
        },
        {
          "t": 1300,
          "label": "Baja la pata y vuelve a reposo"
        }
      ],
      "wardrobe": {
        "ojos": "lentes"
      }
    },
    {
      "id": "aplauso",
      "name": "Aplauso de estudio",
      "category": "Recompensas nuevas",
      "loop": false,
      "poster": 820,
      "purpose": "Dos aplausos de Nilo con las patas visibles por delante del pecho.",
      "duration": 1580,
      "frames": [
        {
          "t": 0,
          "label": "Sentado"
        },
        {
          "t": 230,
          "label": "Abre ambas patas",
          "lx": 91,
          "ly": 155,
          "rx": 210,
          "ry": 155,
          "padsL": 0.7,
          "padsR": 0.7,
          "face": "happy"
        },
        {
          "t": 500,
          "label": "Primer aplauso",
          "recompensa": "palmas",
          "face": "happy",
          "lx": 140,
          "ly": 169,
          "rx": 159,
          "ry": 168,
          "padsL": 0.6,
          "padsR": 0.6,
          "intensity": 0.85
        },
        {
          "t": 650,
          "label": "Separa las patas",
          "recompensa": "palmas",
          "face": "happy",
          "lx": 102,
          "ly": 154,
          "rx": 196,
          "ry": 154,
          "padsL": 0.6,
          "padsR": 0.6,
          "intensity": 0
        },
        {
          "t": 820,
          "label": "Segundo aplauso",
          "recompensa": "palmas",
          "face": "happy",
          "lx": 140,
          "ly": 169,
          "rx": 159,
          "ry": 168,
          "padsL": 0.6,
          "padsR": 0.6,
          "intensity": 1
        },
        {
          "t": 1050,
          "label": "Separa y celebra",
          "recompensa": "palmas",
          "face": "happy",
          "lx": 92,
          "ly": 169,
          "rx": 208,
          "ry": 168,
          "padsL": 0.6,
          "padsR": 0.6,
          "intensity": 0.33,
          "y": -8
        },
        {
          "t": 1280,
          "label": "Aterriza o se acomoda",
          "face": "happy",
          "sx": 1.04,
          "sy": 0.95
        },
        {
          "t": 1580,
          "label": "Reposo"
        }
      ],
      "wardrobe": {
        "cuello": "panuelo"
      }
    }
  ]
};
