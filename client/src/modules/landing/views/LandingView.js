/**
 * LandingView
 * -----------
 * Renderiza la interfaz gráfica estática y maneja clics hacia Login.
 */

import { BaseView } from '../../../core/BaseView.js'
import { LandingViewModel } from '../viewmodels/LandingViewModel.js'

export class LandingView extends BaseView {
  constructor(options = {}) {
    // Si no proveen viewModel, instanciamos el por defecto
    const viewModel = options.viewModel || new LandingViewModel()
    super({ ...options, viewModel })
  }

  // ─── Renderizado inicial ──────────────────────────────────────────────────

  render() {
    // Leemos el estado inicial para pintar datos
    const title = this._viewModel.getState('title')
    const subtitle = this._viewModel.getState('subtitle')
    const features = this._viewModel.getState('features') || []

    return `
      <div class="landing-container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; text-align: center; background-color: #f4f7f6;">
        <div class="landing-hero" style="background: white; padding: 3rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 600px;">
          <h1 class="landing-hero__title" style="color: #2c3e50; font-size: 2.5rem; margin-bottom: 1rem;">${title}</h1>
          <p class="landing-hero__subtitle" style="color: #555; font-size: 1.2rem; margin-bottom: 2rem;">${subtitle}</p>
          
          <ul class="landing-hero__features" style="list-style: none; padding: 0; margin-bottom: 2rem; color: #666; font-size: 1rem;">
            ${features.map(f => `<li style="margin-bottom: 0.5rem;">✓ ${f}</li>`).join('')}
          </ul>

          <button id="btn-login" class="btn btn--primary" style="padding: 1rem 2rem; font-size: 1.1rem; border: none; background: #3498db; color: white; border-radius: 6px; cursor: pointer; transition: background 0.3s; width: 100%;">
            Comenzar e Iniciar Sesión
          </button>
        </div>
      </div>
    `
  }

  // ─── Binding del ViewModel ────────────────────────────────────────────────

  _bindViewModel() {
    // Nos suscribimos por si isStarted debiera mostrar un spinner (ejemplo)
    this._subscribe('isStarted', isStarted => {
      const btn = this.$('#btn-login')
      if (btn) {
        btn.disabled = isStarted
        btn.textContent = isStarted ? 'Redirigiendo...' : 'Comenzar e Iniciar Sesión'
        if (isStarted) {
          btn.style.opacity = '0.7'
          btn.style.cursor = 'not-allowed'
        }
      }
    })
  }

  // ─── Binding de eventos DOM ───────────────────────────────────────────────

  _bindEvents() {
    this._addEvent('#btn-login', 'click', () => {
      // Delegamos la acción al ViewModel
      this._viewModel.goToLogin()
    })
  }
}
