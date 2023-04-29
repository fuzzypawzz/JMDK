import { defaultsDeep } from 'lodash'

export function recursivelyAccessDeepProperties(object: object): void {
  defaultsDeep({}, object)
}
