import { ContainerModule } from 'inversify'
import { HomeViewPresenter } from '@/JMDK.UI/views/home-view/presenter/home-view-presenter'

const Symbols = {
  store: Symbol('store')
}

const containerModule = new ContainerModule((bind) => {
  bind(HomeViewPresenter).toSelf()
  bind('store').toConstantValue({})
})

export default { Symbols, containerModule }
