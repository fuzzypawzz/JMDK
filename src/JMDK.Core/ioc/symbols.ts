import coreDependencies from '@/JMDK.Core/infrastructure/dependency-injection'
import uiDependencies from '@/JMDK.UI/infrastructure/dependency-injection'

type Symbols = {
  /**
   * Dependency injections available from the Core layer.
   */
  Core: (typeof coreDependencies)['Symbols']

  /**
   * Dependency injections available from the UI layer.
   */
  UI: (typeof uiDependencies)['Symbols']
}

/**
 * @constant ioc
 * @description Unique identifiers for each dependency in the IOC container.
 */
export const Symbols: Symbols = {
  Core: coreDependencies.Symbols,
  UI: uiDependencies.Symbols,
}
