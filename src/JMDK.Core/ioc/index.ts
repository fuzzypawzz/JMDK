import 'reflect-metadata'

import { Container } from 'inversify'

import coreDependencies from '@/JMDK.Core/dependency-injection'
import uiDependencies from '@/JMDK.UI/dependency-injection'

import { Symbols } from './symbols'

const container = new Container()

container.load(coreDependencies.containerModule, uiDependencies.containerModule)

export { container, Symbols }
