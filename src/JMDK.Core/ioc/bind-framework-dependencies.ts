import { container, Symbols } from '.'

/**
 * @author Jannik Maag (fuzzypawzz)
 * @function bindFrameworkDependencies
 * @description
 * Vue plugin used to extract framework dependencies so they can be bound
 * to the IOC container.
 */
export default {
  install: (app: any, options: any) => {
    const { router } = options

    if (!router) throw new Error('Could not load the router dependency.')

    container.rebind(Symbols.Core.Router).toConstantValue(router)
  },
}
