
`                 Usuario
                     │
                     ▼
        repository.cargarPartida("MiLiga")
                     │
                     ▼
          Construye la ruta
                     │
                     ▼
              readFile()
                     │
                     ▼
             JSON.parse()
                     │
                     ▼
             Objeto plano
                     │
                     ▼
      Partida.fromJSON(datos)   ← AQUÍ cambia todo
                     │
                     ▼
        Partida reconstruye:
                     │
      ┌──────────────┼──────────────┐
      ▼              ▼              ▼
Club.fromJSON   Temporada...   Mercado...
      │              │              │
      └──────────────┼──────────────┘
                     ▼
          Instancia Partida
                     │
                     ▼
             return partida
             
`