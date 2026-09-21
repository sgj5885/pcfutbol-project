`
┌──────────────────────────────┐
│          INTERFAZ            │
│                              │
│  Botones                     │
│  Menús                       │
│  Pop-ups                     │
└──────────────┬───────────────┘
               │
               │ "Carga MiLiga"
               ▼
┌──────────────────────────────┐
│      MOTOR DEL JUEGO         │
│                              │
│  Partida                     │
│  Club                        │
│  Economía                    │
│  Mercado                     │
└──────────────┬───────────────┘
               │
               │ "Necesito una partida"
               ▼
┌──────────────────────────────┐
│      PartidaRepository       │
│                              │
│  Lee JSON                    │
│  Guarda JSON                 │
│  Borra JSON                  │
└──────────────┬───────────────┘
               │
               ▼
          Disco duro
`