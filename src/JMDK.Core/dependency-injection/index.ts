import { ContainerModule } from 'inversify'

const Symbols = {
  Router: Symbol('Router'),
}

const containerModule = new ContainerModule(() => {})

export default { Symbols, containerModule }
