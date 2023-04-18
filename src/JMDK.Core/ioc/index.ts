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
 * @example
 * container.get<TPresenter>(Symbols.Presenter);
 */
const container = new Container()

container.load(coreDependencies.containerModule, uiDependencies.containerModule)

export { container, Symbols }
