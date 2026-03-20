/**
 * LandingService
 * --------------
 * Acceso a datos de red del módulo landing.
 */

import { httpClient } from '../../../shared/utils/httpClient.js'

export class LandingService {
  /**
   * Ejemplo de llamada a red (puede estar vacío en el landing).
   */
  async fetchLandingStats() {
    // Si hubiese backend para stats, sería:
    // return await httpClient.get('/api/landing/stats')
    return { users: 0, projects: 0 }
  }
}

export const landingService = new LandingService()
