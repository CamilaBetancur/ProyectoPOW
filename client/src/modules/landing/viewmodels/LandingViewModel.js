/**
 * LandingViewModel
 * ----------------
 * Estado de la UI para la página de Landing.
 */

import { BaseViewModel } from '../../../core/BaseViewModel.js'
import { eventBus } from '../../../shared/utils/eventBus.js'
import { LandingModel } from '../models/LandingModel.js'

export class LandingViewModel extends BaseViewModel {
  _initState() {
    const model = new LandingModel()
    const data = model.defaults()
    
    this.setState({
      title: data.title,
      subtitle: data.subtitle,
      features: data.features,
      isStarted: false
    })
  }

  // ─── Comandos ─────────────────────────────────────────────────────────────

  /**
   * Acción que invoca la View cuando el usuario hace click en Empezar/Login.
   */
  goToLogin() {
    this.setState({ isStarted: true })
    // Emitimos el evento para que main.js encamine hacia LoginView
    eventBus.emit('landing:goToLogin')
  }
}
