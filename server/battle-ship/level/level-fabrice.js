import EasyLevel from './easy-level'
import ExpertLevel from './expert-level'
import MediumLevel from './medium-level'


class levelFabric {
  constructor() {
    this._levelToClassLevel = {
      easy: EasyLevel,
      medium: MediumLevel,
      expert: ExpertLevel
    }
  }

  create(level) {
    return new this._levelToClassLevel[level]()
  }
}

export default levelFabric