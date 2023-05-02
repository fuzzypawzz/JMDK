import { useRootStore } from '@/JMDK.Store/root'
import { Symbols, container } from '.'

/**
 * @author Jannik Maag (fuzzypawzz)
 * @function bindFrameworkDependencies
 * @description
 * Vue plugin used to extract framework dependencies so they can be bound
 * to the IOC container.
 */
export default {
  install: (app: unknown, options: any) => {
    const { router } = options

    const rootStore = useRootStore()

    if (!router) throw new Error('Could not load the router dependency.')

    container.rebind(Symbols.Core.Router).toConstantValue(router)
    container.rebind('store').toConstantValue(rootStore)
  },
}
