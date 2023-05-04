import { ContainerModule } from 'inversify'
import { HomeViewPresenter } from '@/JMDK.UI/views/home-view/presenter/home-view-presenter'

const Symbols = {}

const containerModule = new ContainerModule((bind) => {
  bind(HomeViewPresenter).toSelf()
})

export default { Symbols, containerModule }
