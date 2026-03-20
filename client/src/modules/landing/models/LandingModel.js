/**
 * LandingModel
 * -------------
 * Entidad de datos para la vista principal (Landing Page).
 */

import { BaseModel } from '../../../core/BaseModel.js'

export class LandingModel extends BaseModel {
  /**
   * Define los valores por defecto del modelo.
   * @returns {Object}
   */
  defaults() {
    return {
      title: 'Bienvenido a la Plataforma',
      subtitle: 'La solución definitiva para gestionar tus proyectos con arquitectura MVVM.',
      features: [
        'Arquitectura Escalar por Módulos',
        'Separación de Responsabilidades',
        'Clean Code',
      ],
    }
  }

  /**
   * Validación de negocio (vacía en el landing por ahora).
   * @returns {boolean}
   */
  validate() {
    return true
  }
}
