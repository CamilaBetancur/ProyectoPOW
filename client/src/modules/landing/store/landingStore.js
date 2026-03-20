/**
 * landingStore
 * ------------
 * Store global para el módulo landing.
 */

class LandingStore {
  constructor() {
    this.hasVisited = false
  }

  // Ejemplo de método para registrar visita
  markAsVisited() {
    this.hasVisited = true
  }
}

export const landingStore = new LandingStore()
