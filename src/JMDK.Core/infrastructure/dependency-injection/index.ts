import { ContainerModule } from 'inversify'

const Symbols = {
  Router: Symbol('Router'),
}

// Router is rebound in the bind-framework-dependencies plugin
const mockedVueRouter = {}

const containerModule = new ContainerModule((bind) => {
  bind(Symbols.Router).toConstantValue(mockedVueRouter)
})

export default { Symbols, containerModule }
