import { computed } from 'vue'

export function readonlyComputed<T>(fn: () => T) {
  return computed<Readonly<T>>(fn)
}
