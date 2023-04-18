import 'reflect-metadata'

import { Container } from 'inversify'

import coreDependencies from '@/JMDK.Core/dependency-injection'
import uiDependencies from '@/JMDK.UI/dependency-injection'

import { Symbols } from './symbols'

/**
 * @constant container
 * @description An instance of the IOC container.
 * As a general guideline, you should only use the get<T> method to resolve dependencies
 * from the composition root (here).
 *
 * Read more in our Inversion Of Control documentation to see some examples of how
 * we use the get<T> method to resolve dependencies in the framework components, making the
 * container act as a bridge between the framework and our logic/store/services etc.
 *
 * @example
 * container.get<OrderFlowPresenter>(Symbols.OrderFlowPresenter);
 */
const container = new Container()

container.load(coreDependencies.containerModule, uiDependencies.containerModule)

export { container, Symbols }
